export const es = {
  // SEO
  seo: {
    title: 'Antonio Guzmán | Senior Fullstack Developer & AI/ML Engineer',
    description: 'Senior Fullstack Developer con 5+ años de experiencia en React, Next.js, Node.js y NestJS. Especializado en aplicaciones web escalables, arquitectura de microfrontends e integración de IA/ML. Disponible para trabajo remoto.',
    keywords: 'Antonio Guzmán, Fullstack Developer, React Developer, Next.js, Node.js, NestJS, TypeScript, JavaScript, AI Engineer, ML Engineer, México, Remote Developer',
  },

  // Header/Hero
  hero: {
    welcome: '¡Bienvenido a mi portafolio!',
    title: "I'm Web Developer",
    subtitle: 'Senior Fullstack Developer | AI/ML Engineer',
    visitFacebook: 'Visítame en Facebook',
    visitTwitter: 'Visítame en Twitter',
    visitInstagram: 'Visítame en Instagram',
    visitLinkedin: 'Visítame en LinkedIn',
    visitTwitch: 'Visítame en Twitch',
  },

  // AboutMe
  aboutMe: {
    title: '¡Hola, soy Antonio Guzmán!',
    intro: 'Senior Fullstack Developer con más de 5 años construyendo aplicaciones web escalables para las industrias fintech y aerolíneas.',
    paragraph1: 'Lideré equipos técnicos en Aeroméxico implementando arquitectura de microfrontends que mejoró la escalabilidad de la plataforma en un 40%. Actualmente desarrollo plataformas educativas impulsadas por IA usando LLMs, APIs de machine learning y flujos de automatización.',
    paragraph2: 'Busco aprovechar mi experiencia fullstack y mis crecientes habilidades en AI/ML para construir interfaces de usuario inteligentes y aplicaciones basadas en datos para equipos remotos internacionales.',
    contact: 'Si quieres platicar, contáctame.',
    availableRemote: 'Disponible para trabajo remoto global',
    location: 'Ciudad de México, México',
  },

  // Experience
  experience: {
    title: 'Experiencia',
    subtitle: 'He trabajado en proyectos como desarrollador frontend y backend, utilizando tecnologías como React, Node.js, NestJS y MongoDB.',
    showMore: 'Ver más',
    showLess: 'Ver menos',
    current: 'Actual',
    role: 'Rol y Responsabilidades',
    impact: 'Impacto',
    jobs: {
      aeromexico: {
        company: 'Multiplica Talent (Aeroméxico)',
        role: 'Technical Lead | Frontend Developer',
        period: 'jul. 2022 - 2025',
        description: 'Lideré equipo frontend de 5 desarrolladores en la migración de plataforma legacy a arquitectura de microfrontends con SSR, mejorando tiempos de carga en 35% y reduciendo overhead de mantenimiento en 50%.',
        bullets: [
          'Arquitecté e implementé soluciones React/Next.js sirviendo a 2M+ usuarios activos mensuales',
          'Establecí pipelines CI/CD y procesos de code review, reduciendo bugs en producción en 60%',
          'Colaboré con el equipo de diseño para implementar sistema de diseño unificado',
          'Mentoré desarrolladores junior y definí roadmaps técnicos',
        ],
      },
      cumplo: {
        company: 'Cumplo (Fintech)',
        role: 'Frontend Developer',
        period: 'oct. 2021 - jul. 2022',
        description: 'Construí plataforma fintech completa desde MVP hasta producción sirviendo marketplace de préstamos para PyMEs con React, Redux y GraphQL.',
        bullets: [
          'Desarrollé componentes UI responsivos con integración pixel-perfect de Figma',
          'Implementé suite de testing comprensiva reduciendo ciclos de QA en 40%',
          'Optimicé rendimiento de la plataforma mejorando Core Web Vitals en 45%',
          'Colaboré en metodología Shape Up + Scrum entregando 15+ features',
        ],
      },
      bbva: {
        company: 'Sitdigital (BBVA)',
        role: 'Frontend Developer',
        period: 'ene. 2020 - oct. 2021',
        duration: '1 año 10 meses',
        description: 'Desarrollé plataformas empresariales de gestión de transacciones para clientes medianos y grandes usando LitElement y Polymer.',
        bullets: [
          'Aseguré cumplimiento del sistema de diseño de BBVA en 10+ aplicaciones',
          'Integré APIs bancarias y sistemas de pago seguros',
          'Implementé interfaces responsivas que redujeron tickets de soporte en 25%',
        ],
      },
    },
  },

  // Skills
  skills: {
    title: 'Habilidades Técnicas',
    subtitle: 'Me considero un desarrollador web full stack con conocimientos para crear soluciones tanto en frontend como en backend, además de experiencia en AI/ML.',
    categories: {
      frontend: {
        title: 'Frontend Development',
        items: ['JavaScript (5+ años)', 'TypeScript (3+ años)', 'React (5+ años)', 'Next.js (3+ años)', 'Angular (2+ años)', 'Redux, Zustand, TanStack Query'],
      },
      aiml: {
        title: 'AI/ML & Automatización',
        items: ['OpenAI GPT, Claude, Hugging Face', 'n8n workflows', 'PostgreSQL, MongoDB, GraphQL', 'TensorFlow, PyTorch (en progreso)'],
      },
      backend: {
        title: 'Backend & DevOps',
        items: ['Node.js, NestJS', 'AWS, Google Cloud Platform', 'Docker, Git, CI/CD', 'Agile/Scrum'],
      },
      mobile: {
        title: 'Mobile',
        items: ['Flutter, Dart (2+ años)', 'React Native (1+ año)', 'Kotlin, Swift (1+ año)'],
      },
    },
  },

  // Projects
  projects: {
    title: 'Proyectos Destacados',
    subtitle: 'Proyectos personales donde aplico todo lo aprendido',
    viewSite: 'Ver sitio',
    frontend: 'Frontend',
    backend: 'Backend',
    items: {
      expediaParts: {
        name: 'Expedia Parts - E-commerce Automotriz',
        role: 'Fullstack Developer',
        period: '2024 - Presente',
        description: 'E-commerce completo para venta de motores y transmisiones automotrices. Desarrollé tanto el frontend con Next.js 15 y React 19, como el backend con NestJS y MongoDB. Integración con Stripe para pagos y Supabase para autenticación.',
        impact: 'Plataforma en producción con catálogo de productos y sistema de cotizaciones',
        url: 'https://www.expediaparts.com/',
        techFrontend: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Stripe'],
        techBackend: ['NestJS', 'MongoDB', 'Mongoose', 'Supabase', 'Stripe API', 'Puppeteer'],
      },
      stugy: {
        name: 'Stugy - Plataforma Educativa con IA',
        role: 'Founder & Fullstack AI Developer',
        period: '2023 - Presente',
        description: 'Plataforma educativa que aprovecha OpenAI GPT y Claude APIs para generación automatizada de contenido. Diseñé flujos de automatización con n8n permitiendo a profesores crear materiales personalizados, reduciendo tiempo de creación de contenido en 70%.',
        impact: 'Sirve a 500+ educadores con generación automatizada de currículum',
        url: '',
        techFrontend: ['React', 'TypeScript', 'TailwindCSS'],
        techBackend: ['Node.js', 'OpenAI API', 'Claude API', 'n8n'],
      },
      eduli: {
        name: 'Eduli - Plataforma Educativa',
        role: 'Founder & Fullstack Developer',
        period: '2022 - Presente',
        description: 'Sistema completo de gestión de aprendizaje digital que transiciona la enseñanza tradicional al formato online. Backend escalable con NestJS sirviendo APIs RESTful y características en tiempo real.',
        impact: 'Digitalizó la experiencia de aprendizaje para 200+ estudiantes y 50+ profesores',
        url: '',
        techFrontend: ['React', 'TypeScript', 'SCSS'],
        techBackend: ['NestJS', 'MongoDB', 'Socket.io'],
      },
    },
  },

  // MoreAboutMe
  moreAboutMe: {
    title: 'Sobre mí',
    platziChallenge: 'En 2021 me inscribí a un concurso en Platzi para crear una plataforma de e-commerce en tiempo récord, el proyecto realizado fue Foody+ en ese proyecto yo realicé la lógica del frontend y colaboré conjuntamente con personas extraordinarias de diferentes países.',
    viewChallenge: 'Ver página del reto',
    education: 'Actualmente me encuentro desarrollando mi carrera ingeniería en computación en la UAM-C, y lo complemento estudiando de manera autodidacta y a la vez con cursos en línea dentro de la plataforma educativa Platzi la cual me ha fomentado la idea de nunca parar de aprender y seguir creciendo como persona.',
    platziProfile: 'Perfil de Platzi',
  },

  // Footer
  footer: {
    copyright: '© Antonio Guzman',
    language: 'Idioma',
  },

  // Navigation
  nav: {
    home: 'Inicio',
    aboutMe: 'Acerca de mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    more: 'Conocer más',
    contact: 'Contacto',
    goToHome: 'Ir al inicio',
    goToAboutMe: 'Ir a la sección acerca de mí',
    goToSkills: 'Ir a la sección de habilidades',
    goToProjects: 'Ir a la sección de proyectos',
    goToMore: 'Conocer más de mí',
    goToContact: 'Ir a la sección de contacto',
    visitGithub: 'Visítame en Github',
    visitLinkedin: 'Visítame en LinkedIn',
  },

  // Common
  common: {
    learnMore: 'Saber más',
    viewProject: 'Ver proyecto',
    technologies: 'Tecnologías',
    loading: 'Cargando...',
  },
};

export type Translations = typeof es;
