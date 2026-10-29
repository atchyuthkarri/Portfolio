import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PROJECTS = [
    {
        name: 'archade-architecture',
        url: 'https://adaarchitecture.vercel.app/',
        waitMs: 8000,
        scrollAmount: 1000,
    },
    {
        name: 'studio-luxe',
        url: 'https://studio-luxe.vercel.app/',
        waitMs: 6000,
        scrollAmount: 900,
    },
    {
        name: 'entsorgung-gruppe',
        url: 'https://german-client.vercel.app/',
        waitMs: 6000,
        scrollAmount: 900,
    },
    {
        name: 'the-hole-in-the-wall-cafe',
        url: 'https://hole-in-the-wall-cafe-ufm6.vercel.app/',
        waitMs: 8500,
        scrollAmount: 1100,
    },
    {
        name: 'studio-anvishion',
        url: 'https://anveshanstudio.vercel.app/',
        waitMs: 9000,
        scrollAmount: 1000,
    },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
    const thumbDir = path.resolve('public/projects/thumbnail');
    const longDir = path.resolve('public/projects/long');
    const imgDir = path.resolve('public/projects/images');

    for (const dir of [thumbDir, longDir, imgDir]) {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }

    console.log('Launching headless Chrome...');
    const chrome = spawn(
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        [
            '--headless=new',
            '--remote-debugging-port=9555',
            '--disable-gpu',
            '--no-first-run',
            '--no-default-browser-check',
            '--window-size=1440,900',
            'about:blank',
        ],
    );

    await sleep(1500);

    const versionRes = await fetch('http://127.0.0.1:9555/json/version');
    const versionData = await versionRes.json();
    console.log('Connecting to CDP:', versionData.webSocketDebuggerUrl);

    const browserWs = new WebSocket(versionData.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
        browserWs.onopen = resolve;
        browserWs.onerror = reject;
    });

    let msgId = 1;
    function send(ws, method, params = {}) {
        return new Promise((resolve, reject) => {
            const id = msgId++;
            const handler = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.id === id) {
                        ws.removeEventListener('message', handler);
                        if (data.error) reject(data.error);
                        else resolve(data.result);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            ws.addEventListener('message', handler);
            ws.send(JSON.stringify({ id, method, params }));
        });
    }

    for (const project of PROJECTS) {
        console.log(`\n========================================`);
        console.log(`Processing ${project.name} (${project.url})...`);

        const { targetId } = await send(browserWs, 'Target.createTarget', {
            url: 'about:blank',
        });

        const targetWsUrl = `ws://127.0.0.1:9555/devtools/page/${targetId}`;
        const pageWs = new WebSocket(targetWsUrl);
        await new Promise((resolve) => (pageWs.onopen = resolve));

        await send(pageWs, 'Page.enable');
        await send(pageWs, 'Emulation.setDeviceMetricsOverride', {
            width: 1440,
            height: 900,
            deviceScaleFactor: 1.5,
            mobile: false,
        });

        console.log('Navigating to', project.url);
        await send(pageWs, 'Page.navigate', { url: project.url });

        console.log(`Waiting ${project.waitMs}ms for preloader and animations to settle...`);
        await sleep(project.waitMs);

        // Try dismissing any overlay or clicking to dismiss if applicable
        await send(pageWs, 'Runtime.evaluate', {
            expression: `
                const loaders = document.querySelectorAll('[class*="preloader"], [class*="loader"], [id*="loader"]');
                loaders.forEach(el => {
                    if (window.getComputedStyle(el).opacity === '0' || el.style.display === 'none') return;
                    el.style.display = 'none';
                });
            `,
        });
        await sleep(500);

        console.log('Capturing hero screenshot...');
        const heroScreenshot = await send(pageWs, 'Page.captureScreenshot', {
            format: 'png',
            clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 },
        });

        const thumbPath = path.join(thumbDir, `${project.name}.png`);
        fs.writeFileSync(thumbPath, Buffer.from(heroScreenshot.data, 'base64'));
        console.log('Saved thumbnail to', thumbPath);

        const img1Path = path.join(imgDir, `${project.name}-1.png`);
        fs.writeFileSync(img1Path, Buffer.from(heroScreenshot.data, 'base64'));

        console.log(`Scrolling ${project.scrollAmount}px for secondary showcase shot...`);
        await send(pageWs, 'Runtime.evaluate', {
            expression: `window.scrollTo({ top: ${project.scrollAmount}, behavior: 'instant' });`,
        });
        await sleep(2000);

        const scrolledScreenshot = await send(pageWs, 'Page.captureScreenshot', {
            format: 'png',
            clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 },
        });

        const longPath = path.join(longDir, `${project.name}.png`);
        fs.writeFileSync(longPath, Buffer.from(scrolledScreenshot.data, 'base64'));
        console.log('Saved long thumbnail to', longPath);

        const img2Path = path.join(imgDir, `${project.name}-2.png`);
        fs.writeFileSync(img2Path, Buffer.from(scrolledScreenshot.data, 'base64'));

        await send(browserWs, 'Target.closeTarget', { targetId });
        pageWs.close();
    }

    browserWs.close();
    chrome.kill();
    console.log('\nAll project screenshots updated successfully!');
}

main().catch((err) => {
    console.error('Error:', err);
    process.exit(1);
});
