import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'atchyuthkarri20@gmail',

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
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        // {
        //     name: 'Redux',
        //     icon: '/logo/redux.png',
        // },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        // {
        //     name: 'GSAP',
        //     icon: '/logo/gsap.png',
        // },
        // {
        //     name: 'Framer Motion',
        //     icon: '/logo/framer-motion.png',
        // },
        // {
        //     name: 'Sass',
        //     icon: '/logo/sass.png',
        // },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        // {
        //     name: 'NestJS',
        //     icon: '/logo/nest.svg',
        // },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        // {
        //     name: 'Prisma',
        //     icon: '/logo/prisma.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Storely',
        slug: 'Storely',
        liveUrl: 'https://storely-ak.vercel.app/',
        year: 2025,
        description: `
      Storely is a full-stack e-commerce web application designed to deliver a seamless and user-friendly online shopping experience. The platform allows users to browse products, view detailed product information, and perform CRUD operations efficiently through a well-structured backend.<br><br>
      
     Key Features:<br/>
        <ul>
        <li>🛒 Product Catalog System: Dynamic product listing with category-based filtering for easy product discovery</li>
        <li>🔍 Product Details View: Detailed product pages with pricing, descriptions, and images</li>
        <li>🛠️ Product Management: Add, update, and delete products through a structured CRUD workflow</li>
        <li>📱 Fully Responsive Design: Optimized user experience across mobile, tablet, and desktop devices</li>
        <li>⚡ Optimized Performance: Efficient frontend rendering and fast API responses for smooth browsing</li>
        </ul><br/>
      
      Technical Highlights:
<ul>
  <li>Designed RESTful APIs using Node.js and Express.js for product, cart, and user management</li>
  <li>Implemented JWT-based authentication for secure user access and role-based authorization</li>
  <li>Integrated MongoDB for scalable and efficient data storage</li>
  <li>Developed an admin panel enabling product CRUD operations</li>
  <li>Built reusable React components styled with Tailwind CSS for consistency and responsiveness</li>
</ul>
      `,
        role: `
        Full-Stack Developer <br/>
        Owned the end-to-end development of the Storely e-commerce platform:
        <ul>
        <li>🧠 Backend Development: Built RESTful APIs using Node.js and Express.js for products, users, cart, and orders</li>
        <li>🔐 Authentication & Security: Implemented JWT-based authentication and role-based access control</li>
        <li>🗄️ Database Design: Designed and managed MongoDB schemas for scalable product and user data</li>
        <li>🎨 Frontend Development: Developed responsive UI components using React JS and Tailwind CSS</li>
        <li>🛒 E-commerce Features: Implemented cart functionality, category-based product pages, and dynamic state updates</li>
        <li>🧑‍💼 Admin Dashboard: Created admin interfaces for product management with full CRUD operations</li>
        </ul>
        `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT Authentication',
            'REST APIs',
        ],
        thumbnail: '/projects/thumbnail/storely.png',
        longThumbnail: '/projects/thumbnail/storely.png',
        images: [
            '/projects/images/storelyimg2.png',
            '/projects/images/storelyimg3.png',
            '/projects/images/storelyimg4.png',
        ],
    },
    {
        title: 'Sweets Delight',
        slug: 'Sweets Delight',
        techStack: [
            'React Js',
            'Slider Js',
            'CSS',
            'Framer Motion',
            'debouncing',
        ],
        thumbnail: '/projects/thumbnail/Sweets_delight.png',
        longThumbnail: '/projects/thumbnail/Sweets_delight.png',
        images: [
            '/projects/images/sweetsdelight1.png',
            '/projects/images/sweetsdelight2.png',
            '/projects/images/sweetsdelight3.png',
            '/projects/images/sweetsdelight4.png',
        ],
        liveUrl: 'sweetsdelight.vercel.app',
        year: 2026,
        description: `Sweets Delight is a scalable and interactive e-commerce frontend inspired by traditional Indian sweet brands. The application incorporates dynamic product rendering, animated UI transitions using Framer Motion, and responsive carousels built with Swiper.js. The project emphasizes modular design, maintainability, and customizable theming through CSS root variables.`,

        role: `As the sole frontend developer, I:
        - Designed and developed the entire frontend using React.
        - Implemented Swiper.js-based sliders for hero and product showcases.
        - Integrated Framer Motion for smooth animations, transitions, and enhanced UX.
        - Built reusable UI components (Navbar, Hero, ProductCard, Products, Footer).
        - Structured the project for scalability with clean folder architecture.
        - Created a global theming system using CSS variables for flexible design updates.
        - Optimized layout for responsiveness across devices.`,
        },
    // {
    //     title: 'Resume Roaster',
    //     slug: 'resume-roaster',
    //     techStack: [
    //         'GPT-4',
    //         'Next.js',
    //         'Postgressql',
    //         'Prisma',
    //         'Tailwind CSS',
    //     ],
    //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    //     longThumbnail: '/projects/long/resume-roaster.jpg',
    //     images: [
    //         '/projects/images/resume-roaster-1.png',
    //         '/projects/images/resume-roaster-2.png',
    //         '/projects/images/resume-roaster-3.png',
    //     ],
    //     liveUrl: 'https://resume-roaster.vercel.app/',
    //     year: 2023,
    //     description:
    //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
    //     role: `As the sole developer and business owner, I:<br/>
    //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
    //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
    //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    // },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Atchyuthkarri/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Atchyuthkarri/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Project Intern',
        company: 'Indian Institute of Technology Dhanbad (IIT ISM)',
        duration: 'AUG 2025 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'SSIT',
        duration: 'JUN 2025 - AUG 2025',
    },
    // {
    //     title: 'Frontend Engineer',
    //     company: 'Anchorblock Technology',
    //     duration: 'Oct 2022 - Sep 2023',
    // },
    // {
    //     title: 'Frontend Developer (Part-time)',
    //     company: 'Branex IT',
    //     duration: 'Jan 2022 - Oct 2022',
    // },
];
