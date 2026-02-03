import { Translations } from './es';

export const en: Translations = {
  // SEO
  seo: {
    title: 'Antonio Guzmán | Senior Fullstack Developer & AI/ML Engineer',
    description: 'Senior Fullstack Developer with 5+ years of experience in React, Next.js, Node.js, and NestJS. Specialized in scalable web applications, microfrontends architecture, and AI/ML integration. Available for remote work.',
    keywords: 'Antonio Guzmán, Fullstack Developer, React Developer, Next.js, Node.js, NestJS, TypeScript, JavaScript, AI Engineer, ML Engineer, Mexico, Remote Developer',
  },

  // Header/Hero
  hero: {
    welcome: 'Welcome to my portfolio!',
    title: "I'm Web Developer",
    subtitle: 'Senior Fullstack Developer | AI/ML Engineer',
    visitFacebook: 'Visit me on Facebook',
    visitTwitter: 'Visit me on Twitter',
    visitInstagram: 'Visit me on Instagram',
    visitLinkedin: 'Visit me on LinkedIn',
    visitTwitch: 'Visit me on Twitch',
  },

  // AboutMe
  aboutMe: {
    title: "Hi, I'm Antonio Guzmán!",
    intro: 'Senior Fullstack Developer with 5+ years building scalable web applications for fintech and airline industries.',
    paragraph1: 'Led technical teams at Aeroméxico implementing microfrontends architecture that improved platform scalability by 40%. Currently developing AI-powered educational platforms using LLMs, machine learning APIs, and automation workflows.',
    paragraph2: 'Seeking to leverage full-stack expertise and growing AI/ML skills to build intelligent user interfaces and data-driven applications for international remote teams.',
    contact: "Let's chat, contact me.",
    availableRemote: 'Available for Remote Work Globally',
    location: 'Mexico City, Mexico',
  },

  // Experience
  experience: {
    title: 'Experience',
    subtitle: 'I have worked on projects as a frontend and backend developer, using technologies like React, Node.js, NestJS, and MongoDB.',
    showMore: 'Show more',
    showLess: 'Show less',
    current: 'Present',
    role: 'Role & Responsibilities',
    impact: 'Impact',
    jobs: {
      aeromexico: {
        company: 'Multiplica Talent (Aeroméxico)',
        role: 'Technical Lead | Frontend Developer',
        period: 'Jul 2022 - 2025',
        description: 'Led frontend team of 5 developers in migrating legacy platform to microfrontends architecture with SSR, improving load times by 35% and reducing maintenance overhead by 50%.',
        bullets: [
          'Architected and implemented React/Next.js solutions serving 2M+ monthly active users',
          'Established CI/CD pipelines and code review processes, reducing production bugs by 60%',
          'Collaborated with design team to implement unified design system',
          'Mentored junior developers and defined technical roadmaps',
        ],
      },
      cumplo: {
        company: 'Cumplo (Fintech)',
        role: 'Frontend Developer',
        period: 'Oct 2021 - Jul 2022',
        description: 'Built complete fintech platform from MVP to production serving SME lending marketplace with React, Redux, and GraphQL.',
        bullets: [
          'Developed responsive UI components with pixel-perfect Figma integration',
          'Implemented comprehensive testing suite reducing QA cycles by 40%',
          'Optimized platform performance improving Core Web Vitals by 45%',
          'Collaborated in Shape Up + Scrum methodology delivering 15+ features',
        ],
      },
      bbva: {
        company: 'Sitdigital (BBVA)',
        role: 'Frontend Developer',
        period: 'Jan 2020 - Oct 2021',
        duration: '1 year 10 months',
        description: 'Developed enterprise transaction management platforms for mid-market and enterprise clients using LitElement and Polymer.',
        bullets: [
          'Ensured BBVA design system compliance across 10+ applications',
          'Integrated banking APIs and secure payment systems',
          'Implemented responsive interfaces reducing customer support tickets by 25%',
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Technical Skills',
    subtitle: 'I consider myself a full stack web developer with knowledge to create both frontend and backend solutions, plus AI/ML experience.',
    categories: {
      frontend: {
        title: 'Frontend Development',
        items: ['JavaScript (5+ years)', 'TypeScript (3+ years)', 'React (5+ years)', 'Next.js (3+ years)', 'Angular (2+ years)', 'Redux, Zustand, TanStack Query'],
      },
      aiml: {
        title: 'AI/ML & Automation',
        items: ['OpenAI GPT, Claude, Hugging Face', 'n8n workflows', 'PostgreSQL, MongoDB, GraphQL', 'TensorFlow, PyTorch (in progress)'],
      },
      backend: {
        title: 'Backend & DevOps',
        items: ['Node.js, NestJS', 'AWS, Google Cloud Platform', 'Docker, Git, CI/CD', 'Agile/Scrum'],
      },
      mobile: {
        title: 'Mobile',
        items: ['Flutter, Dart (2+ years)', 'React Native (1+ year)', 'Kotlin, Swift (1+ year)'],
      },
    },
  },

  // Projects
  projects: {
    title: 'Featured Projects',
    subtitle: 'Personal projects where I apply everything I have learned',
    viewSite: 'View site',
    frontend: 'Frontend',
    backend: 'Backend',
    items: {
      expediaParts: {
        name: 'Expedia Parts - Automotive E-commerce',
        role: 'Fullstack Developer',
        period: '2024 - Present',
        description: 'Complete e-commerce platform for automotive engines and transmissions sales. Developed both frontend with Next.js 15 and React 19, and backend with NestJS and MongoDB. Integration with Stripe for payments and Supabase for authentication.',
        impact: 'Production platform with product catalog and quotation system',
        url: 'https://www.expediaparts.com/',
        techFrontend: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Stripe'],
        techBackend: ['NestJS', 'MongoDB', 'Mongoose', 'Supabase', 'Stripe API', 'Puppeteer'],
      },
      stugy: {
        name: 'Stugy - AI Educational Platform',
        role: 'Founder & Fullstack AI Developer',
        period: '2023 - Present',
        description: 'Built comprehensive educational platform leveraging OpenAI GPT and Claude APIs for automated content generation. Designed n8n automation workflows enabling teachers to create personalized learning materials, reducing content creation time by 70%.',
        impact: 'Serves 500+ educators with automated curriculum generation',
        url: '',
        techFrontend: ['React', 'TypeScript', 'TailwindCSS'],
        techBackend: ['Node.js', 'OpenAI API', 'Claude API', 'n8n'],
      },
      eduli: {
        name: 'Eduli - Educational Platform',
        role: 'Founder & Fullstack Developer',
        period: '2022 - Present',
        description: 'Developed complete digital learning management system transitioning traditional teaching to online delivery. Built scalable backend with NestJS serving RESTful APIs and real-time features.',
        impact: 'Digitized learning experience for 200+ students and 50+ teachers',
        url: '',
        techFrontend: ['React', 'TypeScript', 'SCSS'],
        techBackend: ['NestJS', 'MongoDB', 'Socket.io'],
      },
    },
  },

  // MoreAboutMe
  moreAboutMe: {
    title: 'About me',
    platziChallenge: 'In 2021 I entered a Platzi contest to create an e-commerce platform in record time. The project was Foody+ where I developed the frontend logic and collaborated with extraordinary people from different countries.',
    viewChallenge: 'View challenge page',
    education: 'I am currently pursuing my Computer Engineering degree at UAM-C, complementing it with self-taught studies and online courses on the Platzi educational platform, which has instilled in me the idea of never stop learning and keep growing as a person.',
    platziProfile: 'Platzi Profile',
  },

  // Footer
  footer: {
    copyright: '© Antonio Guzman',
    language: 'Language',
  },

  // Navigation
  nav: {
    home: 'Home',
    aboutMe: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    more: 'Learn more',
    contact: 'Contact',
    goToHome: 'Go to home',
    goToAboutMe: 'Go to about me section',
    goToSkills: 'Go to skills section',
    goToProjects: 'Go to projects section',
    goToMore: 'Learn more about me',
    goToContact: 'Go to contact section',
    visitGithub: 'Visit me on Github',
    visitLinkedin: 'Visit me on LinkedIn',
  },

  // Common
  common: {
    learnMore: 'Learn more',
    viewProject: 'View project',
    technologies: 'Technologies',
    loading: 'Loading...',
  },
};
