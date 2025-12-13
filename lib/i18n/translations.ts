export type Language = "en" | "es" | "fr" | "zh"

interface NavTranslations {
  domains: string
  services: string
  values: string
  projects: string
  contact: string
  portfolio: string
}

interface HeroTranslations {
  badge: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
}

interface DomainsTranslations {
  sectionTitle: string
  sectionSubtitle: string
  software: { title: string; description: string }
  content: { title: string; description: string }
  marketing: { title: string; description: string }
}

interface ServicesTranslations {
  sectionTitle: string
  sectionSubtitle: string
  tabs: {
    software: string
    ai: string
    graphic: string
    motion: string
    video: string
    marketing: string
  }
  software: { title: string; items: string[] }
  ai: { title: string; items: string[] }
  graphic: { title: string; items: string[] }
  motion: { title: string; items: string[] }
  video: { title: string; items: string[] }
  marketing: { title: string; items: string[] }
}

interface CoreValuesTranslations {
  sectionTitle: string
  sectionSubtitle: string
  values: { title: string; description: string }[]
}

interface VisionTranslations {
  sectionTitle: string
  paragraph1: string
  paragraph2: string
}

interface ProjectsTranslations {
  sectionTitle: string
  sectionSubtitle: string
  projects: { title: string; description: string; tag: string }[]
}

interface PortfolioTranslations {
  sectionTitle: string
  sectionSubtitle: string
  tabs: { graphic: string; video: string; motion: string }
  graphic: { title: string; category: string }[]
  video: { title: string; category: string }[]
  motion: { title: string; category: string }[]
}

interface ContactTranslations {
  sectionTitle: string
  sectionSubtitle: string
  form: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    serviceLabel: string
    servicePlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
  }
  info: {
    title: string
    description: string
    emailLabel: string
    locationLabel: string
    location: string
  }
}

interface NewsletterTranslations {
  title: string
  placeholder: string
  subscribe: string
  subscribing: string
  success: string
  error: string
}

interface FooterTranslations {
  tagline: string
  copyright: string
  aboutTitle: string
  aboutLinks: { label: string; href: string }[]
  servicesTitle: string
  servicesLinks: { label: string; href: string }[]
  contactTitle: string
  contactLinks: { label: string; href: string }[]
}

export interface Translations {
  nav: NavTranslations
  hero: HeroTranslations
  domains: DomainsTranslations
  services: ServicesTranslations
  coreValues: CoreValuesTranslations
  vision: VisionTranslations
  projects: ProjectsTranslations
  portfolio: PortfolioTranslations
  contact: ContactTranslations
  newsletter: NewsletterTranslations
  footer: FooterTranslations
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      domains: "Domains",
      services: "Services",
      values: "Values",
      projects: "Projects",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    hero: {
      badge: "Built by Africa, accelerated through AI.",
      title: "Jakob's is a creative studio built by AI-native developers and creators.",
      subtitle: "We build apps, create content, and push the boundaries of what's possible with AI.",
      primaryCta: "Start a Project",
      secondaryCta: "Subscribe to Newsletter",
    },
    domains: {
      sectionTitle: "What We Do",
      sectionSubtitle: "Three powerful domains. One unified creative force.",
      software: { title: "Software, IT & AI Solutions", description: "Building powerful applications with cutting-edge technology" },
      content: { title: "Content Creation, Media & Entertainment", description: "Crafting compelling stories through design and video" },
      marketing: { title: "Marketing", description: "Growing brands with strategic digital campaigns" },
    },
    services: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Comprehensive solutions for the modern digital landscape",
      tabs: { software: "Software", ai: "AI", graphic: "Graphic", motion: "Motion", video: "Video", marketing: "Marketing" },
      software: { title: "Software Development", items: ["Mobile app development", "Web app development", "Corporate/SME websites"] },
      ai: { title: "AI", items: ["Conversational AI agents", "AI workflow automation", "Custom LLM fine-tuning for industries"] },
      graphic: { title: "Graphic Design", items: ["Brand identity design", "Social media graphics (carousel design)", "Banner ads & promos", "Packaging mockups", "Business cards, flyers, brochures", "Podcast cover art / YouTube thumbnails"] },
      motion: { title: "Motion Design", items: ["Logo animations", "Animated social posts", "Kinetic typography", "Explainer animations", "Promo event animations"] },
      video: { title: "Video Editing", items: ["Short-form editing (TikTok/Reels/Shorts)", "Long-form editing (YouTube & online courses)", "Corporate & commercial edits", "Event recap videos", "Branded influencer editing", "Documentary-style storytelling"] },
      marketing: { title: "Digital Marketing", items: ["Social media management", "Paid ads (Meta + Google)", "Content strategy + calendars", "Email marketing (Mailchimp)", "SEO optimization", "Campaign planning & reporting"] },
    },
    coreValues: {
      sectionTitle: "Our Core Values",
      sectionSubtitle: "The principles that guide everything we do",
      values: [
        { title: "Beauty", description: "Thoughtfully designed experiences" },
        { title: "Loyalty", description: "Long-lasting relationships" },
        { title: "Longevity", description: "Solutions built to endure" },
        { title: "Truth", description: "Transparency and integrity" },
        { title: "Discipline", description: "Focused execution" },
        { title: "Heritage", description: "Honoring our roots while innovating" },
      ],
    },
    vision: {
      sectionTitle: "Our Vision",
      paragraph1: "A thriving society built on cooperation and harmony, where innovation meets heritage. We envision a world where technology amplifies human creativity, where African talent leads global conversations, and where every project we touch becomes a testament to excellence and authenticity.",
      paragraph2: "Through thoughtful design, powerful code, and compelling stories, we're not just building products—we're shaping the future of creative work.",
    },
    projects: {
      sectionTitle: "What We're Building",
      sectionSubtitle: "We don't just talk—our work shows.",
      projects: [
        { title: "Pigby.io", description: "A powerful money tracker to help you manage your finances with ease", tag: "Live" },
        { title: "Jakob's Brand Identity", description: "The beginning of our creative universe—a complete visual system", tag: "Completed" },
        { title: "AI Solutions", description: "AI-powered solutions for automation, assistants and workflows", tag: "Coming Soon" },
      ],
    },
    portfolio: {
      sectionTitle: "Portfolio",
      sectionSubtitle: "A showcase of our creative work",
      tabs: { graphic: "Graphics", video: "Video", motion: "Software" },
      graphic: [
        { title: "Brand Identity Kit", category: "Branding" },
        { title: "Social Media Campaign", category: "Social" },
        { title: "Product Packaging", category: "Design" },
        { title: "Event Poster Series", category: "Print" },
      ],
      video: [
        { title: "Product Launch Video", category: "Commercial" },
        { title: "Documentary Short", category: "Storytelling" },
        { title: "Social Media Reels", category: "Social" },
        { title: "Event Highlight Reel", category: "Events" },
      ],
      motion: [
        { title: "Logo Animation", category: "Branding" },
        { title: "Explainer Video", category: "Educational" },
        { title: "Kinetic Typography", category: "Typography" },
        { title: "Promo Animation", category: "Marketing" },
      ],
    },
    contact: {
      sectionTitle: "Ready to work with us?",
      sectionSubtitle: "We'd love to build something extraordinary together.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        serviceLabel: "What service are you looking for?",
        servicePlaceholder: "e.g., Web Development, Branding",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send Message",
      },
      info: {
        title: "Get in Touch",
        description: "Whether you have a project in mind or just want to chat about possibilities, we're here to help bring your vision to life.",
        emailLabel: "Email",
        locationLabel: "Location",
        location: "Mauritius | Remote",
      },
    },
    newsletter: {
      title: "Stay ahead with insights on AI, design, and creativity.",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
      subscribing: "Subscribing...",
      success: "Thanks for subscribing!",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Built by Africa, accelerated through AI.",
      copyright: "© Jakob's. All rights reserved.",
      aboutTitle: "About Jakob's",
      aboutLinks: [
        { label: "Our Story", href: "#" },
        { label: "Core Values", href: "#" },
        { label: "Vision", href: "#" },
      ],
      servicesTitle: "Services",
      servicesLinks: [
        { label: "Software Development", href: "#services" },
        { label: "AI Solutions", href: "#services" },
        { label: "Content Creation", href: "#portfolio" },
        { label: "Digital Marketing", href: "#services" },
      ],
      contactTitle: "Contact",
      contactLinks: [
        { label: "hello@jakobs.studio", href: "mailto:hello@jakobs.studio" },
        { label: "Mauritius", href: "#" },
        { label: "Work with us", href: "#contact" },
      ],
    },
  },
  es: {
    nav: {
      domains: "Dominios",
      services: "Servicios",
      values: "Valores",
      projects: "Proyectos",
      contact: "Contacto",
      portfolio: "Portafolio",
    },
    hero: {
      badge: "Hecho en África. Impulsado por la innovación.",
      title: "Jakob's es un estudio creativo creado por desarrolladores y creadores nativos de IA.",
      subtitle: "Construimos aplicaciones, creamos contenido y ampliamos los límites de lo posible con IA.",
      primaryCta: "Iniciar un proyecto",
      secondaryCta: "Suscribirse al boletín",
    },
    domains: {
      sectionTitle: "Lo que hacemos",
      sectionSubtitle: "Tres dominios poderosos. Una fuerza creativa unificada.",
      software: { title: "Software, TI y Soluciones de IA", description: "Construyendo aplicaciones potentes con tecnología de vanguardia" },
      content: { title: "Creación de Contenido, Medios y Entretenimiento", description: "Creando historias cautivadoras a través del diseño y el video" },
      marketing: { title: "Marketing", description: "Haciendo crecer marcas con campañas digitales estratégicas" },
    },
    services: {
      sectionTitle: "Nuestros Servicios",
      sectionSubtitle: "Soluciones integrales para el panorama digital moderno",
      tabs: { software: "Software", ai: "IA", graphic: "Gráfico", motion: "Movimiento", video: "Video", marketing: "Marketing" },
      software: { title: "Desarrollo de Software", items: ["Desarrollo de aplicaciones móviles", "Desarrollo de aplicaciones web", "Sitios web corporativos/PYME"] },
      ai: { title: "IA", items: ["Agentes de IA conversacional", "Automatización de flujos de trabajo con IA", "Ajuste fino de LLM personalizado para industrias"] },
      graphic: { title: "Diseño Gráfico", items: ["Diseño de identidad de marca", "Gráficos para redes sociales (diseño de carrusel)", "Banners y promociones", "Mockups de empaques", "Tarjetas de presentación, volantes, folletos", "Portadas de podcast / Miniaturas de YouTube"] },
      motion: { title: "Diseño de Movimiento", items: ["Animaciones de logo", "Publicaciones animadas para redes sociales", "Tipografía cinética", "Animaciones explicativas", "Animaciones de eventos promocionales"] },
      video: { title: "Edición de Video", items: ["Edición de formato corto (TikTok/Reels/Shorts)", "Edición de formato largo (YouTube y cursos en línea)", "Ediciones corporativas y comerciales", "Videos resumen de eventos", "Edición de influencers de marca", "Narrativa estilo documental"] },
      marketing: { title: "Marketing Digital", items: ["Gestión de redes sociales", "Anuncios pagados (Meta + Google)", "Estrategia de contenido + calendarios", "Email marketing (Mailchimp)", "Optimización SEO", "Planificación de campañas e informes"] },
    },
    coreValues: {
      sectionTitle: "Nuestros Valores Fundamentales",
      sectionSubtitle: "Los principios que guían todo lo que hacemos",
      values: [
        { title: "Belleza", description: "Experiencias diseñadas con cuidado" },
        { title: "Lealtad", description: "Relaciones duraderas" },
        { title: "Longevidad", description: "Soluciones construidas para perdurar" },
        { title: "Verdad", description: "Transparencia e integridad" },
        { title: "Disciplina", description: "Ejecución enfocada" },
        { title: "Herencia", description: "Honrando nuestras raíces mientras innovamos" },
      ],
    },
    vision: {
      sectionTitle: "Nuestra Visión",
      paragraph1: "Una sociedad próspera construida sobre la cooperación y la armonía, donde la innovación se encuentra con la herencia. Imaginamos un mundo donde la tecnología amplifica la creatividad humana, donde el talento africano lidera conversaciones globales, y donde cada proyecto que tocamos se convierte en un testimonio de excelencia y autenticidad.",
      paragraph2: "A través de un diseño reflexivo, código poderoso e historias cautivadoras, no solo estamos construyendo productos—estamos dando forma al futuro del trabajo creativo.",
    },
    projects: {
      sectionTitle: "Lo que Estamos Construyendo",
      sectionSubtitle: "No solo hablamos—nuestro trabajo lo demuestra.",
      projects: [
        { title: "Pigby.io", description: "Un potente rastreador de dinero para ayudarte a gestionar tus finanzas con facilidad", tag: "En vivo" },
        { title: "Identidad de Marca Jakob's", description: "El comienzo de nuestro universo creativo—un sistema visual completo", tag: "Completado" },
        { title: "Soluciones de IA", description: "Soluciones impulsadas por IA para automatización, asistentes y flujos de trabajo", tag: "Próximamente" },
      ],
    },
    portfolio: {
      sectionTitle: "Portafolio",
      sectionSubtitle: "Una muestra de nuestro trabajo creativo",
      tabs: { graphic: "Gráficos", video: "Video", motion: "Software" },
      graphic: [
        { title: "Kit de Identidad de Marca", category: "Branding" },
        { title: "Campaña de Redes Sociales", category: "Social" },
        { title: "Empaque de Producto", category: "Diseño" },
        { title: "Serie de Pósters de Eventos", category: "Impreso" },
      ],
      video: [
        { title: "Video de Lanzamiento de Producto", category: "Comercial" },
        { title: "Cortometraje Documental", category: "Narrativa" },
        { title: "Reels de Redes Sociales", category: "Social" },
        { title: "Video Resumen de Evento", category: "Eventos" },
      ],
      motion: [
        { title: "Animación de Logo", category: "Branding" },
        { title: "Video Explicativo", category: "Educativo" },
        { title: "Tipografía Cinética", category: "Tipografía" },
        { title: "Animación Promocional", category: "Marketing" },
      ],
    },
    contact: {
      sectionTitle: "¿Listo para trabajar con nosotros?",
      sectionSubtitle: "Nos encantaría construir algo extraordinario juntos.",
      form: {
        nameLabel: "Nombre Completo",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "tu@correo.com",
        serviceLabel: "¿Qué servicio estás buscando?",
        servicePlaceholder: "ej., Desarrollo Web, Branding",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        submit: "Enviar Mensaje",
      },
      info: {
        title: "Ponte en Contacto",
        description: "Ya sea que tengas un proyecto en mente o solo quieras charlar sobre posibilidades, estamos aquí para ayudar a dar vida a tu visión.",
        emailLabel: "Correo Electrónico",
        locationLabel: "Ubicación",
        location: "Mauricio | Remoto",
      },
    },
    newsletter: {
      title: "Mantente a la vanguardia con ideas sobre IA, diseño y creatividad.",
      placeholder: "Introduce tu correo electrónico",
      subscribe: "Suscribirse",
      subscribing: "Suscribiendo...",
      success: "¡Gracias por suscribirte!",
      error: "Algo salió mal. Inténtalo de nuevo.",
    },
    footer: {
      tagline: "Hecho en África. Impulsado por la innovación.",
      copyright: "© Jakob's. Todos los derechos reservados.",
      aboutTitle: "Sobre Jakob's",
      aboutLinks: [
        { label: "Nuestra Historia", href: "#" },
        { label: "Valores Fundamentales", href: "#" },
        { label: "Visión", href: "#" },
      ],
      servicesTitle: "Servicios",
      servicesLinks: [
        { label: "Desarrollo de Software", href: "#services" },
        { label: "Soluciones de IA", href: "#services" },
        { label: "Creación de Contenido", href: "#portfolio" },
        { label: "Marketing Digital", href: "#services" },
      ],
      contactTitle: "Contacto",
      contactLinks: [
        { label: "hello@jakobs.studio", href: "mailto:hello@jakobs.studio" },
        { label: "Mauricio", href: "#" },
        { label: "Trabaja con nosotros", href: "#contact" },
      ],
    },
  },
  fr: {
    nav: {
      domains: "Domaines",
      services: "Services",
      values: "Valeurs",
      projects: "Projets",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    hero: {
      badge: "Construit en Afrique. Porté par l'innovation.",
      title: "Jakob's est un studio créatif créé par des développeurs et créateurs natifs de l'IA.",
      subtitle: "Nous créons des applications, produisons du contenu et repoussons les limites du possible avec l'IA.",
      primaryCta: "Lancer un projet",
      secondaryCta: "S'abonner à la newsletter",
    },
    domains: {
      sectionTitle: "Ce que nous faisons",
      sectionSubtitle: "Trois domaines puissants. Une force créative unifiée.",
      software: { title: "Logiciels, IT et Solutions IA", description: "Construire des applications puissantes avec une technologie de pointe" },
      content: { title: "Création de Contenu, Médias et Divertissement", description: "Créer des histoires captivantes à travers le design et la vidéo" },
      marketing: { title: "Marketing", description: "Développer les marques avec des campagnes numériques stratégiques" },
    },
    services: {
      sectionTitle: "Nos Services",
      sectionSubtitle: "Des solutions complètes pour le paysage numérique moderne",
      tabs: { software: "Logiciel", ai: "IA", graphic: "Graphique", motion: "Motion", video: "Vidéo", marketing: "Marketing" },
      software: { title: "Développement Logiciel", items: ["Développement d'applications mobiles", "Développement d'applications web", "Sites web d'entreprise/PME"] },
      ai: { title: "IA", items: ["Agents IA conversationnels", "Automatisation des flux de travail IA", "Ajustement fin de LLM personnalisé pour les industries"] },
      graphic: { title: "Design Graphique", items: ["Design d'identité de marque", "Graphiques pour réseaux sociaux (design carrousel)", "Bannières publicitaires et promos", "Maquettes d'emballage", "Cartes de visite, flyers, brochures", "Couvertures de podcast / Miniatures YouTube"] },
      motion: { title: "Motion Design", items: ["Animations de logo", "Publications animées pour réseaux sociaux", "Typographie cinétique", "Animations explicatives", "Animations d'événements promotionnels"] },
      video: { title: "Montage Vidéo", items: ["Montage format court (TikTok/Reels/Shorts)", "Montage format long (YouTube et cours en ligne)", "Montages corporate et commerciaux", "Vidéos récapitulatives d'événements", "Montage d'influenceurs de marque", "Narration style documentaire"] },
      marketing: { title: "Marketing Digital", items: ["Gestion des réseaux sociaux", "Publicités payantes (Meta + Google)", "Stratégie de contenu + calendriers", "Email marketing (Mailchimp)", "Optimisation SEO", "Planification de campagnes et rapports"] },
    },
    coreValues: {
      sectionTitle: "Nos Valeurs Fondamentales",
      sectionSubtitle: "Les principes qui guident tout ce que nous faisons",
      values: [
        { title: "Beauté", description: "Des expériences conçues avec soin" },
        { title: "Loyauté", description: "Des relations durables" },
        { title: "Longévité", description: "Des solutions construites pour durer" },
        { title: "Vérité", description: "Transparence et intégrité" },
        { title: "Discipline", description: "Exécution ciblée" },
        { title: "Héritage", description: "Honorer nos racines tout en innovant" },
      ],
    },
    vision: {
      sectionTitle: "Notre Vision",
      paragraph1: "Une société prospère construite sur la coopération et l'harmonie, où l'innovation rencontre l'héritage. Nous envisageons un monde où la technologie amplifie la créativité humaine, où le talent africain mène les conversations mondiales, et où chaque projet que nous touchons devient un témoignage d'excellence et d'authenticité.",
      paragraph2: "À travers un design réfléchi, un code puissant et des histoires captivantes, nous ne construisons pas seulement des produits—nous façonnons l'avenir du travail créatif.",
    },
    projects: {
      sectionTitle: "Ce que nous construisons",
      sectionSubtitle: "Nous ne faisons pas que parler—notre travail le prouve.",
      projects: [
        { title: "Pigby.io", description: "Un puissant outil de suivi financier pour gérer vos finances facilement", tag: "En ligne" },
        { title: "Identité de Marque Jakob's", description: "Le début de notre univers créatif—un système visuel complet", tag: "Terminé" },
        { title: "Solutions IA", description: "Solutions alimentées par l'IA pour l'automatisation, les assistants et les flux de travail", tag: "Bientôt" },
      ],
    },
    portfolio: {
      sectionTitle: "Portfolio",
      sectionSubtitle: "Une vitrine de notre travail créatif",
      tabs: { graphic: "Graphisme", video: "Vidéo", motion: "Logiciel" },
      graphic: [
        { title: "Kit d'Identité de Marque", category: "Branding" },
        { title: "Campagne Réseaux Sociaux", category: "Social" },
        { title: "Emballage Produit", category: "Design" },
        { title: "Série d'Affiches d'Événements", category: "Imprimé" },
      ],
      video: [
        { title: "Vidéo de Lancement Produit", category: "Commercial" },
        { title: "Court-métrage Documentaire", category: "Narration" },
        { title: "Reels Réseaux Sociaux", category: "Social" },
        { title: "Vidéo Récapitulative d'Événement", category: "Événements" },
      ],
      motion: [
        { title: "Animation de Logo", category: "Branding" },
        { title: "Vidéo Explicative", category: "Éducatif" },
        { title: "Typographie Cinétique", category: "Typographie" },
        { title: "Animation Promotionnelle", category: "Marketing" },
      ],
    },
    contact: {
      sectionTitle: "Prêt à travailler avec nous ?",
      sectionSubtitle: "Nous serions ravis de construire quelque chose d'extraordinaire ensemble.",
      form: {
        nameLabel: "Nom Complet",
        namePlaceholder: "Votre nom",
        emailLabel: "E-mail",
        emailPlaceholder: "votre@email.com",
        serviceLabel: "Quel service recherchez-vous ?",
        servicePlaceholder: "ex., Développement Web, Branding",
        messageLabel: "Message",
        messagePlaceholder: "Parlez-nous de votre projet...",
        submit: "Envoyer le Message",
      },
      info: {
        title: "Contactez-nous",
        description: "Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter des possibilités, nous sommes là pour vous aider à donner vie à votre vision.",
        emailLabel: "E-mail",
        locationLabel: "Localisation",
        location: "Maurice | À distance",
      },
    },
    newsletter: {
      title: "Gardez une longueur d'avance avec des idées sur l'IA, le design et la créativité.",
      placeholder: "Entrez votre e-mail",
      subscribe: "S'abonner",
      subscribing: "Abonnement...",
      success: "Merci pour votre abonnement !",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    footer: {
      tagline: "Construit en Afrique. Porté par l'innovation.",
      copyright: "© Jakob's. Tous droits réservés.",
      aboutTitle: "À propos de Jakob's",
      aboutLinks: [
        { label: "Notre Histoire", href: "#" },
        { label: "Valeurs Fondamentales", href: "#" },
        { label: "Vision", href: "#" },
      ],
      servicesTitle: "Services",
      servicesLinks: [
        { label: "Développement Logiciel", href: "#services" },
        { label: "Solutions IA", href: "#services" },
        { label: "Création de Contenu", href: "#portfolio" },
        { label: "Marketing Digital", href: "#services" },
      ],
      contactTitle: "Contact",
      contactLinks: [
        { label: "hello@jakobs.studio", href: "mailto:hello@jakobs.studio" },
        { label: "Maurice", href: "#" },
        { label: "Travaillez avec nous", href: "#contact" },
      ],
    },
  },
  zh: {
    nav: {
      domains: "领域",
      services: "服务",
      values: "价值观",
      projects: "项目",
      contact: "联系我们",
      portfolio: "作品集",
    },
    hero: {
      badge: "诞生于非洲，由创新驱动。",
      title: "Jakob's 是由 AI 原生开发者和创作者打造的创意工作室。",
      subtitle: "我们构建应用、创作内容，并不断突破 AI 的可能性边界。",
      primaryCta: "开始项目",
      secondaryCta: "订阅通讯",
    },
    domains: {
      sectionTitle: "我们的业务",
      sectionSubtitle: "三大强力领域，一股统一的创意力量。",
      software: { title: "软件、IT 与 AI 解决方案", description: "用尖端技术构建强大的应用程序" },
      content: { title: "内容创作、媒体与娱乐", description: "通过设计和视频打造引人入胜的故事" },
      marketing: { title: "市场营销", description: "通过战略性数字营销活动发展品牌" },
    },
    services: {
      sectionTitle: "我们的服务",
      sectionSubtitle: "为现代数字领域提供全面的解决方案",
      tabs: { software: "软件", ai: "AI", graphic: "平面", motion: "动效", video: "视频", marketing: "营销" },
      software: { title: "软件开发", items: ["移动应用开发", "网页应用开发", "企业/中小企业网站"] },
      ai: { title: "AI", items: ["对话式 AI 代理", "AI 工作流自动化", "行业定制 LLM 微调"] },
      graphic: { title: "平面设计", items: ["品牌标识设计", "社交媒体图形（轮播设计）", "横幅广告和促销", "包装样机", "名片、传单、宣传册", "播客封面 / YouTube 缩略图"] },
      motion: { title: "动效设计", items: ["Logo 动画", "动态社交帖子", "动态排版", "解说动画", "促销活动动画"] },
      video: { title: "视频剪辑", items: ["短视频剪辑（TikTok/Reels/Shorts）", "长视频剪辑（YouTube 和在线课程）", "企业和商业剪辑", "活动回顾视频", "品牌网红剪辑", "纪录片风格叙事"] },
      marketing: { title: "数字营销", items: ["社交媒体管理", "付费广告（Meta + Google）", "内容策略 + 日历", "邮件营销（Mailchimp）", "SEO 优化", "活动策划与报告"] },
    },
    coreValues: {
      sectionTitle: "我们的核心价值观",
      sectionSubtitle: "指导我们一切行动的原则",
      values: [
        { title: "美", description: "精心设计的体验" },
        { title: "忠诚", description: "持久的关系" },
        { title: "长久", description: "经久耐用的解决方案" },
        { title: "真实", description: "透明与诚信" },
        { title: "纪律", description: "专注执行" },
        { title: "传承", description: "在创新中尊重我们的根源" },
      ],
    },
    vision: {
      sectionTitle: "我们的愿景",
      paragraph1: "一个建立在合作与和谐基础上的繁荣社会，创新与传承在此交汇。我们设想一个技术放大人类创造力的世界，非洲人才引领全球对话，我们触及的每个项目都成为卓越与真实的见证。",
      paragraph2: "通过深思熟虑的设计、强大的代码和引人入胜的故事，我们不仅仅是在构建产品——我们正在塑造创意工作的未来。",
    },
    projects: {
      sectionTitle: "我们正在构建的",
      sectionSubtitle: "我们不只是说说——我们的作品说明一切。",
      projects: [
        { title: "Pigby.io", description: "一款强大的财务追踪工具，帮助您轻松管理财务", tag: "已上线" },
        { title: "Jakob's 品牌标识", description: "我们创意宇宙的开端——一套完整的视觉系统", tag: "已完成" },
        { title: "AI 解决方案", description: "面向自动化、助手和工作流的 AI 驱动解决方案", tag: "即将推出" },
      ],
    },
    portfolio: {
      sectionTitle: "作品集",
      sectionSubtitle: "我们创意作品的展示",
      tabs: { graphic: "图形", video: "视频", motion: "软件" },
      graphic: [
        { title: "品牌标识套件", category: "品牌" },
        { title: "社交媒体活动", category: "社交" },
        { title: "产品包装", category: "设计" },
        { title: "活动海报系列", category: "印刷" },
      ],
      video: [
        { title: "产品发布视频", category: "商业" },
        { title: "纪录短片", category: "叙事" },
        { title: "社交媒体短视频", category: "社交" },
        { title: "活动精彩回顾", category: "活动" },
      ],
      motion: [
        { title: "Logo 动画", category: "品牌" },
        { title: "解说视频", category: "教育" },
        { title: "动态排版", category: "排版" },
        { title: "促销动画", category: "营销" },
      ],
    },
    contact: {
      sectionTitle: "准备好与我们合作了吗？",
      sectionSubtitle: "我们很乐意与您一起创造非凡。",
      form: {
        nameLabel: "全名",
        namePlaceholder: "您的姓名",
        emailLabel: "邮箱",
        emailPlaceholder: "your@email.com",
        serviceLabel: "您在寻找什么服务？",
        servicePlaceholder: "例如，网站开发、品牌设计",
        messageLabel: "留言",
        messagePlaceholder: "告诉我们您的项目...",
        submit: "发送消息",
      },
      info: {
        title: "联系我们",
        description: "无论您有项目想法还是只想聊聊可能性，我们都在这里帮助您实现愿景。",
        emailLabel: "邮箱",
        locationLabel: "位置",
        location: "毛里求斯 | 远程",
      },
    },
    newsletter: {
      title: "掌握关于 AI、设计与创意的最新洞见。",
      placeholder: "输入您的电子邮箱",
      subscribe: "订阅",
      subscribing: "订阅中...",
      success: "感谢订阅！",
      error: "出错了，请重试。",
    },
    footer: {
      tagline: "诞生于非洲，由创新驱动。",
      copyright: "© Jakob's 保留所有权利。",
      aboutTitle: "关于 Jakob's",
      aboutLinks: [
        { label: "我们的故事", href: "#" },
        { label: "核心价值观", href: "#" },
        { label: "愿景", href: "#" },
      ],
      servicesTitle: "服务",
      servicesLinks: [
        { label: "软件开发", href: "#services" },
        { label: "AI 解决方案", href: "#services" },
        { label: "内容创作", href: "#portfolio" },
        { label: "数字营销", href: "#services" },
      ],
      contactTitle: "联系方式",
      contactLinks: [
        { label: "hello@jakobs.studio", href: "mailto:hello@jakobs.studio" },
        { label: "毛里求斯", href: "#" },
        { label: "与我们合作", href: "#contact" },
      ],
    },
  },
}
