import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PROJECTS = [
    {
        name: 'real-time-trading-simulator',
        url: 'https://trading-simulator-two.vercel.app/',
        waitMs: 5000,
        scrollHero: 0,
        scrollAmount: 650,
        scrollDetail: 1200,
    },
    {
        name: 'Storely',
        url: 'https://storely-ak.vercel.app/',
        waitMs: 5000,
        scrollHero: 0,
        scrollAmount: 700,
        scrollDetail: 1400,
    },
    {
        name: 'Kwality-Sweets',
        url: 'https://sweetsdelight.vercel.app/',
        waitMs: 6000,
        scrollHero: 0,
        scrollAmount: 800,
        scrollDetail: 1500,
    },
    {
        name: 'studio-anvishion',
        url: 'https://anveshanstudio.vercel.app/',
        waitMs: 8000,
        scrollHero: 0,
        scrollAmount: 950,
        scrollDetail: 1800,
    },
    {
        name: 'the-hole-in-the-wall-cafe',
        url: 'https://hole-in-the-wall-cafe-ufm6.vercel.app/',
        waitMs: 8000,
        scrollHero: 0,
        scrollAmount: 1000,
        scrollDetail: 1900,
    },
    {
        name: 'studio-luxe',
        url: 'https://studio-luxe.vercel.app/',
        waitMs: 6000,
        scrollHero: 0,
        scrollAmount: 850,
        scrollDetail: 1650,
    },
    {
        name: 'entsorgung-gruppe',
        url: 'https://german-client.vercel.app/',
        waitMs: 6000,
        scrollHero: 0,
        scrollAmount: 850,
        scrollDetail: 1700,
    },
    {
        name: 'archade-architecture',
        url: 'https://adaarchitecture.vercel.app/',
        waitMs: 8000,
        scrollHero: 0,
        scrollAmount: 950,
        scrollDetail: 1800,
    },
    {
        name: 'HLT-Solutions',
        url: 'https://hlt-mauve.vercel.app/',
        waitMs: 7000,
        scrollHero: 0,
        scrollAmount: 800,
        scrollDetail: 1600,
    },
    {
        name: 'Juvarya',
        url: 'https://juvarya-web.vercel.app/',
        waitMs: 6000,
        scrollHero: 0,
        scrollAmount: 750,
        scrollDetail: 1500,
    },
    {
        name: 'vault26',
        url: 'https://www.vault26.co.in/',
        waitMs: 7000,
        scrollHero: 0,
        scrollAmount: 850,
        scrollDetail: 1600,
    },
    {
        name: 'studio-deny',
        url: 'https://studiodeny.com',
        waitMs: 7000,
        scrollHero: 0,
        scrollAmount: 800,
        scrollDetail: 1600,
    },
    {
        name: 'studio-deny-billing',
        url: 'https://billing.studiodeny.com',
        waitMs: 6000,
        scrollHero: 0,
        scrollAmount: 600,
        scrollDetail: 1200,
    },
    {
        name: 'shookets-cafe',
        url: 'https://shooketscafe.vercel.app',
        waitMs: 6000,
        scrollHero: 0,
        scrollAmount: 850,
        scrollDetail: 1650,
    },
    {
        name: 'yy-interiors',
        url: 'https://www.yyinteriors.studio/',
        waitMs: 7000,
        scrollHero: 0,
        scrollAmount: 850,
        scrollDetail: 1750,
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

    console.log('Starting Chrome in headless mode with Pinterest framing...');
    const chrome = spawn(
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        [
            '--headless=new',
            '--remote-debugging-port=9444',
            '--disable-gpu',
            '--no-first-run',
            '--no-default-browser-check',
            '--window-size=1440,900',
            '--hide-scrollbars',
            'about:blank',
        ],
    );

    await sleep(2000);

    const versionRes = await fetch('http://127.0.0.1:9444/json/version');
    const versionData = await versionRes.json();
    console.log('Connected to CDP via WebSocket:', versionData.webSocketDebuggerUrl);

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

    const cleanPage = `
        try {
            // Remove preloader / spinners
            const loaders = document.querySelectorAll('[class*="preloader"], [class*="loader"], [id*="loader"], [class*="spinner"]');
            loaders.forEach(el => { el.style.display = 'none'; el.style.opacity = '0'; });

            // Remove cookie notices, overlays, banner dialogs
            const banners = document.querySelectorAll('[class*="cookie"], [id*="cookie"], [class*="banner"], [id*="banner"], [class*="consent"], [aria-label*="cookie"]');
            banners.forEach(b => {
                if (b.innerText && (b.innerText.toLowerCase().includes('cookie') || b.innerText.toLowerCase().includes('accept'))) {
                    b.style.display = 'none';
                }
            });

            // Clean scrollbars for aesthetics
            const style = document.createElement('style');
            style.innerHTML = '::-webkit-scrollbar { display: none !important; } html, body { scrollbar-width: none !important; }';
            document.head.appendChild(style);
        } catch(e) {}
    `;

    for (const project of PROJECTS) {
        console.log(`\n========================================`);
        console.log(`📸 Capturing: ${project.name} (${project.url})`);

        try {
            const { targetId } = await send(browserWs, 'Target.createTarget', {
                url: 'about:blank',
            });

            const targetWsUrl = `ws://127.0.0.1:9444/devtools/page/${targetId}`;
            const pageWs = new WebSocket(targetWsUrl);
            await new Promise((resolve) => (pageWs.onopen = resolve));

            await send(pageWs, 'Page.enable');
            // Pinterest-style crisp Retina deviceScaleFactor (1.5 for sharpness without huge memory footprint)
            await send(pageWs, 'Emulation.setDeviceMetricsOverride', {
                width: 1440,
                height: 900,
                deviceScaleFactor: 1.5,
                mobile: false,
            });

            console.log(`   Navigating to ${project.url}...`);
            await send(pageWs, 'Page.navigate', { url: project.url });

            console.log(`   Waiting ${project.waitMs}ms for fonts, styling & animations...`);
            await sleep(project.waitMs);

            await send(pageWs, 'Runtime.evaluate', { expression: cleanPage });
            await sleep(600);

            // 1. Capture Hero / Primary Thumbnail (1440x900)
            console.log('   -> Capturing Hero Shot (Thumbnail)...');
            const heroShot = await send(pageWs, 'Page.captureScreenshot', {
                format: 'png',
                clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 },
            });
            const heroBuf = Buffer.from(heroShot.data, 'base64');
            fs.writeFileSync(path.join(thumbDir, `${project.name}.png`), heroBuf);
            fs.writeFileSync(path.join(imgDir, `${project.name}-1.png`), heroBuf);

            // 2. Capture Signature Showcase / Middle Section
            console.log(`   -> Scrolling ${project.scrollAmount}px for Signature Showcase...`);
            await send(pageWs, 'Runtime.evaluate', {
                expression: `window.scrollTo({ top: ${project.scrollAmount}, behavior: 'instant' });`,
            });
            await sleep(2000);
            await send(pageWs, 'Runtime.evaluate', { expression: cleanPage });
            await sleep(400);

            const scrollShot = await send(pageWs, 'Page.captureScreenshot', {
                format: 'png',
                clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 },
            });
            const scrollBuf = Buffer.from(scrollShot.data, 'base64');
            fs.writeFileSync(path.join(longDir, `${project.name}.png`), scrollBuf);
            fs.writeFileSync(path.join(imgDir, `${project.name}-2.png`), scrollBuf);

            // 3. Capture Detail / Feature Section
            console.log(`   -> Scrolling to ${project.scrollDetail}px for Detail Shot...`);
            await send(pageWs, 'Runtime.evaluate', {
                expression: `window.scrollTo({ top: ${project.scrollDetail}, behavior: 'instant' });`,
            });
            await sleep(2000);
            await send(pageWs, 'Runtime.evaluate', { expression: cleanPage });
            await sleep(400);

            const detailShot = await send(pageWs, 'Page.captureScreenshot', {
                format: 'png',
                clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 },
            });
            const detailBuf = Buffer.from(detailShot.data, 'base64');
            fs.writeFileSync(path.join(imgDir, `${project.name}-3.png`), detailBuf);

            console.log(`   ✓ Saved: thumbnail, long, and 3 gallery images for ${project.name}`);

            await send(browserWs, 'Target.closeTarget', { targetId });
            pageWs.close();
        } catch (err) {
            console.error(`   ✕ Failed capturing ${project.name}:`, err.message);
        }
    }

    browserWs.close();
    chrome.kill();
    console.log('\n✨ All Pinterest-grade project screenshots successfully captured and updated!');
}

main().catch((err) => {
    console.error('Fatal execution error:', err);
    process.exit(1);
});
