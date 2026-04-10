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
        title: 'Storely',
        slug: 'Storely',
        liveUrl: 'https://storely-ak.vercel.app/',
        year: 2025,
        description: `Storely is a full-stack e-commerce web application designed to deliver a seamless and user-friendly online shopping experience.`,
        role: `Full-Stack Developer`,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT Authentication',
            'REST APIs',
        ],
        thumbnail: '/projects/thumbnail/storely-thumbanil.jpeg',
        longThumbnail: '/projects/thumbnail/storely.png',
        images: [
            '/projects/thumbnail/storelyimg1.png',
            '/projects/thumbnail/storelyimg2.png',
            '/projects/thumbnail/storelyimg3.png',
            '/projects/thumbnail/storelyimg4.png',
        ]
    },
    {
        title: 'Kwality-Sweets',
        slug: 'Kwality-Sweets',
        liveUrl: 'https://sweetsdelight.vercel.app/',
        year: 2025,
        description: `Sweets Delight is a scalable and interactive e-commerce frontend inspired by traditional Indian sweet brands.`,
        role: `As the sole frontend developer, I:<br/>
- Architected and developed the complete frontend using React, focusing on performance and maintainability.<br/>
- Implemented Swiper.js-based interactive sliders for hero and product showcases.<br/>
- Integrated Framer Motion for smooth animations and enhanced UX.<br/>
- Built reusable UI components and scalable architecture.<br/>
- Developed a global theming system using CSS variables.<br/>
- Optimized layouts for responsiveness across devices.`,
        techStack: [
            'React Js',
            'CSS',
            'Framer Motion',
            'Swiper.js',
        ],
        thumbnail: '/projects/thumbnail/sweets_delight.png',
        longThumbnail: '/projects/long/sweets_delight.png',
        images: [
            '/projects/images/sweetsdelight-1.png',
            '/projects/images/sweetsdelight-2.png',
            '/projects/images/sweetsdelight-3.png',
        ],
    },
    {
        title: 'Juvarya',
        slug: 'Juvarya',
        liveUrl: 'https://juvarya-web.vercel.app/',
        year: 2025,
        description: `Juvarya is a modern web application featuring a highly responsive user interface and an engaging user experience designed with modern web paradigms.`,
        role: `Frontend Developer`,
        techStack: [
            'React Js',
            'Tailwind CSS',
            'Framer Motion'
        ],
        thumbnail: '/projects/thumbnail/juvarya.png',
        longThumbnail: '/projects/long/juvarya.png',
        images: [
            '/projects/long/juvarya.png',
            '/projects/thumbnail/juvarya.png'
        ]
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
            'Framer Motion'
        ],
        thumbnail: '/projects/thumbnail/hlt.png',
        longThumbnail: '/projects/long/hlt.png',
        images: [
            '/projects/long/hlt.png',
            '/projects/thumbnail/hlt.png'
        ]
    },
    {
        title: 'Real-Time Trading Simulator System',
        slug: 'real-time-trading-simulator',
        liveUrl: 'https://trading-simulator-two.vercel.app/',
        year: 2025,
        description: `A full-stack trading simulator platform that replicates real-world market mechanics, featuring live market data, a custom order matching engine, and WebSocket-based real-time updates. Built to enable users to execute and test trading strategies in a realistic, risk-free environment, with a focus on performance, scalability, and a premium user experience.`,
        role: `Full Stack Developer`,
        techStack: [
            'Next.js',
            'React.js',
            'TypeScript',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Prisma',
            'Redis',
            'WebSockets',
            'Tailwind CSS'
        ],
        thumbnail: '/projects/thumbnail/trading.png',
        longThumbnail: '/projects/long/trading.png',
        images: [
            '/projects/long/trading.png',
            '/projects/thumbnail/trading.png'
        ]
    }
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