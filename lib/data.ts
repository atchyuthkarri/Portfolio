import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'atchyuthkarri46@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Atchyuth, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    // upworkProfile: 'https://www.upwork.com/freelancers/Atchyuthkarri',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/atchyuthkarri' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/atchyuth-karri-4b437b271/',
    },
    { name: 'x', url: 'https://x.com/AtchyuthKarri' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Postman', icon: '/logo/postman.png' },
        { name: 'Vercel', icon: '/logo/vercel.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Trading Simulator – Real-Time Trading Engine (Client Project)',
        slug: 'real-time-trading-simulator',
        liveUrl: 'https://trading-simulator-two.vercel.app/',
        year: 2025,
        description: `A real-time trading engine and platform replicating market mechanics with concurrent user interactions, low-latency live price feeds, and an automated order execution engine.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Built a real-time trading platform using Next.js, Express.js, and PostgreSQL (Neon) with concurrent user interactions.</li>
<li>Implemented WebSocket-based communication for low-latency updates in price feeds and trade execution.</li>
<li>Designed backend services for order execution, transaction tracking, and profit & loss computation.</li>
<li>Ensured data consistency under concurrent requests using structured API workflows and state management.</li>
<li>Developed interactive dashboards with real-time charting for trade visualization.</li>
<li>Deployed frontend on Vercel and managed backend services for reliable application performance.</li>
</ul>`,
        techStack: [
            'Next.js',
            'Express.js',
            'PostgreSQL (Neon)',
            'WebSockets',
            'Node.js',
            'React.js',
            'TypeScript',
            'Tailwind CSS',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/trading.png',
        longThumbnail: '/projects/long/trading.png',
        images: [
            '/projects/long/trading.png',
            '/projects/thumbnail/trading.png',
        ],
    },
    {
        title: 'Storely – Containerized E-Commerce System with CI/CD',
        slug: 'Storely',
        liveUrl: 'https://storely-ak.vercel.app/',
        year: 2025,
        description: `Storely is a full-stack containerized e-commerce system built for reliable, consistent deployments with automated GitHub Actions CI/CD pipelines and high-throughput REST APIs.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Built a full-stack application using React, Node.js, and MongoDB.</li>
<li>Designed REST APIs supporting authentication, order workflows, and system integration.</li>
<li>Containerized backend services using Docker for consistent deployment environments.</li>
<li>Implemented CI/CD pipeline using GitHub Actions for automated build and deployment.</li>
<li>Improved backend response time by 30% through query and API optimizations.</li>
</ul>`,
        techStack: [
            'React.js',
            'Node.js',
            'MongoDB',
            'Docker',
            'GitHub Actions (CI/CD)',
            'REST APIs',
            'Express.js',
        ],
        thumbnail: '/projects/thumbnail/storely-thumbanil.jpeg',
        longThumbnail: '/projects/thumbnail/storely.png',
        images: [
            '/projects/thumbnail/storelyimg1.png',
            '/projects/thumbnail/storelyimg2.png',
            '/projects/thumbnail/storelyimg3.png',
            '/projects/thumbnail/storelyimg4.png',
        ],
    },
    {
        title: 'Kwality Sweets – Web Application (Client Project)',
        slug: 'Kwality-Sweets',
        liveUrl: 'https://sweetsdelight.vercel.app/',
        year: 2025,
        description: `A modern, modular e-commerce frontend inspired by traditional Indian sweet brands, engineered for responsive performance, optimized rendering, and seamless transitions.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Developed a modular frontend using React.js with reusable components.</li>
<li>Improved rendering efficiency through component optimization techniques.</li>
<li>Configured deployment on Vercel with environment-based settings for consistent builds.</li>
<li>Managed version-controlled workflows using Git for structured updates and deployments.</li>
</ul>`,
        techStack: [
            'React.js',
            'CSS',
            'Framer Motion',
            'Swiper.js',
            'Vercel',
            'Git',
        ],
        thumbnail: '/projects/thumbnail/Sweets_delight.png',
        longThumbnail: '/projects/long/sweetsdelight.png',
        images: [
            '/projects/thumbnail/Sweets_delight.png',
            '/projects/long/sweetsdelight.png',
        ],
    },
    {
        title: 'Studio Anvishion – Spatial Design',
        slug: 'studio-anvishion',
        liveUrl: 'https://anveshanstudio.vercel.app/',
        year: 2026,
        description: `An elite interior architecture and spatial design studio platform featuring cinematic visual storytelling, dark-mode luxury aesthetics, and interactive architectural project showcases.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Crafted an ultra-luxury spatial design studio web application with cinematic photography and dark ambient styling.</li>
<li>Implemented fluid page transitions, consultation booking flows, and interactive architectural case studies.</li>
<li>Built custom responsive masonry galleries to showcase residential and commercial transformations.</li>
<li>Optimized Core Web Vitals and image delivery for a seamless luxury browsing experience.</li>
</ul>`,
        techStack: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/studio-anvishion.png',
        longThumbnail: '/projects/thumbnail/studio-anvishion.png',
        images: [
            '/projects/thumbnail/studio-anvishion.png',
        ],
    },
    {
        title: 'The Hole in the Wall Café',
        slug: 'the-hole-in-the-wall-cafe',
        liveUrl: 'https://hole-in-the-wall-cafe-ufm6.vercel.app/',
        year: 2026,
        description: `An artisanal culinary experience and boutique cafe platform crafted with warm editorial typography, interactive daily gastronomy menus, and culinary storytelling.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Architected an artisanal bakery and single-origin coffee showcase website with warm editorial aesthetics.</li>
<li>Built interactive daily gastronomy menus, pastry showcase carousels, and press critiques.</li>
<li>Integrated smooth scroll-driven animations and playful hand-drawn micro-illustrations.</li>
<li>Optimized media loading strategies for high-definition culinary photography.</li>
</ul>`,
        techStack: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/the-hole-in-the-wall-cafe.png',
        longThumbnail: '/projects/thumbnail/the-hole-in-the-wall-cafe.png',
        images: [
            '/projects/thumbnail/the-hole-in-the-wall-cafe.png',
        ],
    },
    {
        title: 'Studio Luxe – Luxury Interiors',
        slug: 'studio-luxe',
        liveUrl: 'https://studio-luxe.vercel.app/',
        year: 2026,
        description: `A luxury interior architecture and bespoke furniture showcase platform crafted with editorial aesthetics, interactive product sliders, and consultation booking workflows.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Developed an editorial luxury furniture and spatial design web application using React.</li>
<li>Implemented interactive collection sliders, lounge aesthetics showcases, and consultation scheduling forms.</li>
<li>Created smooth micro-animations and typography hierarchy inspired by international fashion & design houses.</li>
<li>Ensured full mobile responsiveness and touch-friendly navigation across all viewports.</li>
</ul>`,
        techStack: [
            'React.js',
            'Vite',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/studio-luxe.png',
        longThumbnail: '/projects/thumbnail/studio-luxe.png',
        images: [
            '/projects/thumbnail/studio-luxe.png',
        ],
    },
    {
        title: 'Entsorgung Gruppe AG',
        slug: 'entsorgung-gruppe',
        liveUrl: 'https://german-client.vercel.app/',
        year: 2026,
        description: `A German industrial waste management and resource recovery enterprise platform engineered for multinational environmental compliance and sustainable ESG solutions.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Engineered an enterprise-grade corporate platform for Germany's leading resource recovery and industrial waste management group.</li>
<li>Built clean service exploration tools, environmental compliance dashboards, and facility locators.</li>
<li>Implemented high-contrast accessible UI with modern industrial typography and sleek glassmorphic navigation.</li>
<li>Configured internationalization-ready structure and optimized performance for global clientele.</li>
</ul>`,
        techStack: [
            'React.js',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/entsorgung-gruppe.png',
        longThumbnail: '/projects/thumbnail/entsorgung-gruppe.png',
        images: [
            '/projects/thumbnail/entsorgung-gruppe.png',
        ],
    },
    {
        title: 'Archade Architects',
        slug: 'archade-architecture',
        liveUrl: 'https://adaarchitecture.vercel.app/',
        year: 2026,
        description: `An award-winning architecture and spatial design studio web platform showcasing profound residential, commercial, and interior spaces with contemporary aesthetics.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Designed and engineered a minimalist, high-end architecture portfolio website featuring smooth transitions.</li>
<li>Developed interactive project showcase galleries with responsive grid layouts.</li>
<li>Optimized image assets and layout shifts for lightning-fast First Contentful Paint.</li>
<li>Deployed on Vercel with automated continuous deployment.</li>
</ul>`,
        techStack: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/archade-architecture.png',
        longThumbnail: '/projects/thumbnail/archade-architecture.png',
        images: [
            '/projects/thumbnail/archade-architecture.png',
        ],
    },
    {
        title: 'HLT Solutions',
        slug: 'HLT-Solutions',
        liveUrl: 'https://hlt-mauve.vercel.app/',
        year: 2026,
        description: `A futuristic, premium web platform crafted for an IT solutions agency, featuring rich glassmorphism effects, animated gradients, and high-performance interactive animations.`,
        role: `Full Stack Developer`,
        techStack: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/hlt.png',
        longThumbnail: '/projects/long/hlt.png',
        images: [
            '/projects/long/hlt.png',
            '/projects/thumbnail/hlt.png',
        ],
    },
    {
        title: 'Juvarya',
        slug: 'Juvarya',
        liveUrl: 'https://juvarya-web.vercel.app/',
        year: 2025,
        description: `A modern web application featuring a highly responsive user interface and an engaging user experience designed with modern web paradigms.`,
        role: `Frontend Developer`,
        techStack: [
            'React Js',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/juvarya.png',
        longThumbnail: '/projects/long/juvarya.png',
        images: [
            '/projects/long/juvarya.png',
            '/projects/thumbnail/juvarya.png',
        ],
    },
    {
        title: 'Vault26',
        slug: 'vault26',
        liveUrl: 'https://www.vault26.co.in/',
        year: 2026,
        description: `A premium e-commerce platform for curated collections, engineered for seamless shopping experiences with modern UI/UX design.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Built a full-stack e-commerce platform with React and Next.js.</li>
<li>Implemented product catalog, shopping cart, and checkout workflows.</li>
<li>Optimized performance and Core Web Vitals for fast load times.</li>
</ul>`,
        techStack: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'Node.js',
        ],
        thumbnail: '/projects/thumbnail/vault26.png',
        longThumbnail: '/projects/long/vault26.png',
        images: [
            '/projects/long/vault26.png',
        ],
    },
    {
        title: 'Studio Deny',
        slug: 'studio-deny',
        liveUrl: 'https://studiodeny.com',
        year: 2026,
        description: `A digital product studio platform showcasing creative work, portfolio pieces, and service offerings with modern design aesthetics.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Developed a portfolio and service showcase website for a digital design studio.</li>
<li>Implemented responsive layouts and smooth page transitions.</li>
<li>Built interactive project galleries and service detail pages.</li>
</ul>`,
        techStack: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/studio-deny.png',
        longThumbnail: '/projects/long/studio-deny.png',
        images: [
            '/projects/long/studio-deny.png',
        ],
    },
    {
        title: 'Studio Deny Billing',
        slug: 'studio-deny-billing',
        liveUrl: 'https://billing.studiodeny.com',
        year: 2026,
        description: `An internal billing and financial management tool for Studio Deny, designed for invoice generation, payment tracking, and financial reporting.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Engineered an enterprise-grade billing management system.</li>
<li>Implemented invoice generation, payment tracking, and financial dashboards.</li>
<li>Built role-based access control for secure financial operations.</li>
<li>Integrated payment gateway and automated billing workflows.</li>
</ul>`,
        techStack: [
            'Next.js',
            'React.js',
            'Node.js',
            'PostgreSQL',
            'Tailwind CSS',
            'TypeScript',
        ],
        thumbnail: '/projects/thumbnail/studio-deny-billing.png',
        longThumbnail: '/projects/long/studio-deny-billing.png',
        images: [
            '/projects/long/studio-deny-billing.png',
        ],
    },
    {
        title: 'Shookets Café',
        slug: 'shookets-cafe',
        liveUrl: 'https://shooketscafe.vercel.app',
        year: 2025,
        description: `A cozy café and bakery web application featuring menu showcases, order management, and a warm, inviting user experience.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Built a café and bakery website with interactive menu displays.</li>
<li>Implemented order booking and reservation systems.</li>
<li>Created warm, engaging UI with smooth animations and transitions.</li>
<li>Optimized for mobile-first user experience.</li>
</ul>`,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/shookets-cafe.png',
        longThumbnail: '/projects/long/shookets-cafe.png',
        images: [
            '/projects/long/shookets-cafe.png',
        ],
    },
    {
        title: 'YY Interiors',
        slug: 'yy-interiors',
        liveUrl: 'https://www.yyinteriors.studio/',
        year: 2024,
        description: `A luxury interior design studio platform showcasing high-end residential and commercial design projects with cinematic photography.`,
        role: `<ul class="list-disc pl-5 space-y-2">
<li>Designed and developed a luxury interior design portfolio website.</li>
<li>Built interactive project galleries with masonry layouts.</li>
<li>Implemented smooth scroll animations and cinematic visuals.</li>
<li>Created consultation booking workflows and contact management.</li>
</ul>`,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/yy-interiors.png',
        longThumbnail: '/projects/long/yy-interiors.png',
        images: [
            '/projects/long/yy-interiors.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Have Life Technology Solutions',
        duration: 'JAN 2026 - Present',
    },
    {
        title: 'Project Intern',
        company: 'Indian Institute of Technology Dhanbad (IIT ISM)',
        duration: 'AUG 2025 - JAN 2026',
    },
    {
        title: 'Frontend Developer',
        company: 'SSIT',
        duration: 'JUN 2025 - AUG 2025',
    }
];