/**
 * Datos de proyectos y perfil profesional para el portafolio de José Lucio Peraza Cárdenas
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "José Lucio Peraza Cárdenas",
    role: "Desarrollador Web & UI Enthusiast",
    company: "Grupo Petroil",
    location: "Mazatlán, Sinaloa, México",
    email: "joseluciopcx@gmail.com",
    github: "https://github.com/JoseLucioPC",
    githubUsername: "JoseLucioPC",
    avatar: "https://avatars.githubusercontent.com/u/58183741?v=4",
    bio: "Desarrollador web enfocado en construir interfaces de usuario limpias, dinámicas y de alto rendimiento. Especializado en arquitecturas web modernas, integración de hardware biométrico en navegadores y plataformas empresariales escalables.",
    stats: [
      { label: "Años de Experiencia", value: "5+", suffix: "" },
      { label: "Proyectos Entregados", value: "25+", suffix: "" },
      { label: "Estaciones & Sistemas", value: "50+", suffix: "" },
      { label: "Uptime & Satisfacción", value: "99.9%", suffix: "" }
    ]
  },
  
  categories: [
    { id: "all", name: "Todos los Proyectos", icon: "bi-grid-fill" },
    { id: "hardware", name: "Hardware & Biometría", icon: "bi-fingerprint" },
    { id: "enterprise", name: "Sistemas Empresariales", icon: "bi-building-gear" },
    { id: "frontend", name: "Frontend & UI/UX", icon: "bi-palette2" },
    { id: "opensource", name: "Open Source", icon: "bi-git" }
  ],

  projects: [
    {
      id: "iubi",
      title: "Iubi — Pasarela Biométrica en Navegador",
      category: "hardware",
      badge: "Destacado",
      shortDesc: "Integración innovadora que permite comunicar y manipular lectores biométricos DigitalPersona directamente desde el navegador web mediante JavaScript puro.",
      fullDesc: "Iubi es una solución especializada que rompe la limitación tradicional de los lectores de huella dactilar (que requerían software nativo de escritorio o plugins descontinuados). Mediante una arquitectura cliente ligera y WebSockets/REST, permite a aplicaciones web capturar huellas, renderizar la imagen WSQ/Bitmap en tiempo real con HTML5 Canvas y validar identidades con respuestas de alta velocidad.",
      keyFeatures: [
        "Comunicación bidireccional de baja latencia con el hardware DigitalPersona",
        "Renderizado de la huella dactilar capturada en tiempo real en Canvas",
        "Control de eventos de hardware: dedo colocado, dedo retirado, calidad de muestra insuficiente",
        "Compatibilidad con cualquier navegador moderno sin extensiones invasivas"
      ],
      tags: ["JavaScript ES6+", "DigitalPersona SDK", "WebSockets", "HTML5 Canvas", "Hardware Integration"],
      metric: "100% web sin plugins NPAPI",
      githubUrl: "https://github.com/JoseLucioPC/iubi",
      liveUrl: "https://oswaldpale.github.io/",
      colorScheme: "emerald",
      accentGlow: "rgba(16, 185, 129, 0.35)",
      previewVisual: "fingerprint"
    },
    {
      id: "petroil-dashboard",
      title: "Petroil Enterprise Operations Suite",
      category: "enterprise",
      badge: "Corporativo",
      shortDesc: "Plataforma centralizada de monitoreo operativo, telemetría de tanques y métricas en tiempo real para estaciones de servicio de combustible.",
      fullDesc: "Diseño y arquitectura frontend de una suite de gestión operacional utilizada en Grupo Petroil. Centraliza la lectura de volúmenes de combustible, alarmas de fugas o variaciones de inventario, tickets de venta y facturación en un panel interactivo y reactivo de fácil consulta para operadores y gerencia.",
      keyFeatures: [
        "Visualización reactiva de tanques y niveles de combustible con animaciones fluidas",
        "Panel de control modular con métricas financieras y operacionales en tiempo real",
        "Filtrado multi-estación instantáneo y exportación de informes analíticos",
        "Diseño optimizado para pantallas táctiles de estación y tablets ejecutivas"
      ],
      tags: ["Angular / TypeScript", "Modern CSS", "Chart.js", "REST APIs", "State Management"],
      metric: "+50 estaciones integradas",
      githubUrl: "https://github.com/JoseLucioPC",
      liveUrl: null,
      colorScheme: "violet",
      accentGlow: "rgba(139, 92, 246, 0.35)",
      previewVisual: "dashboard"
    },
    {
      id: "aether-ui",
      title: "Aether UI — Design System & Components",
      category: "frontend",
      badge: "Diseño Web",
      shortDesc: "Sistema de diseño modular de alto impacto visual con Dark Mode nativo, micro-animaciones fluidas y accesibilidad WCAG 2.1 AA.",
      fullDesc: "Colección de componentes web reutilizables construidos con CSS puro y JavaScript modular. Desarrollado con tokens de diseño adaptables mediante CSS Custom Properties, efecto de cristal esmerilado (glassmorphism), tipografía fluida y animaciones por aceleración de hardware.",
      keyFeatures: [
        "Tokens de color, espaciado, sombras y tipografía completamente configurables",
        "Componentes interactivos: modales, dropdowns, tooltips, toasts y formularios validados",
        "Cero sobrecarga de runtime: optimizado para 60 FPS estables en dispositivos móviles",
        "Navegación 100% accesible por teclado y compatible con lectores de pantalla"
      ],
      tags: ["Vanilla CSS", "JavaScript ES6+", "HTML5 Semántico", "Glassmorphism", "UX/UI Design"],
      metric: "+30 componentes modulares",
      githubUrl: "https://github.com/JoseLucioPC",
      liveUrl: "https://joseluciopc.github.io/",
      colorScheme: "cyan",
      accentGlow: "rgba(6, 182, 212, 0.35)",
      previewVisual: "palette"
    },
    {
      id: "fleetfuel",
      title: "FleetFuel — Control & Liquidación de Flotas",
      category: "enterprise",
      badge: "Logística",
      shortDesc: "Sistema web de auditoría de fletes, trazabilidad de rutas y control kilométrico para pipas y transporte de hidrocarburos.",
      fullDesc: "Solución de software web diseñada para automatizar el cálculo de rendimientos, consumo de combustible y validación de fletes en tiempo récord. Reemplaza hojas de cálculo tradicionales por flujos digitales estructurados con validaciones automáticas.",
      keyFeatures: [
        "Algoritmos de detección de discrepancias en rendimientos de combustible",
        "Generación automática de hojas de liquidación para operadores de tractocamión",
        "Historial de mantenimiento preventivo y alertas de vencimiento de pólizas",
        "Reducción sustancial del tiempo de procesamiento administrativo"
      ],
      tags: ["JavaScript / TypeScript", "CSS Grid & Flexbox", "Web Workers", "Data Tables", "PDF Engine"],
      metric: "-40% tiempo de liquidación",
      githubUrl: "https://github.com/JoseLucioPC",
      liveUrl: null,
      colorScheme: "orange",
      accentGlow: "rgba(249, 115, 22, 0.35)",
      previewVisual: "truck"
    },
    {
      id: "biopass",
      title: "BioPass — Asistencia & Accesos Web",
      category: "hardware",
      badge: "Seguridad",
      shortDesc: "Panel de control de acceso y registro de checadas de personal con verificación biométrica en milisegundos y soporte offline.",
      fullDesc: "Sistema distribuido de asistencia laboral que permite autenticar al colaborador mediante su huella dactilar en terminales web livianas. Cuenta con sincronización en segundo plano con IndexedDB en caso de cortes de red y envío de alertas a supervisores.",
      keyFeatures: [
        "Verificación de huella en menos de 300 ms con feedback sonoro y visual",
        "Almacenamiento temporal en IndexedDB con reconciliación automática al recuperar conexión",
        "Reportes de puntualidad, retardos e incidencias laborales en vivo",
        "Panel gerencial con notificaciones push para aprobaciones de permisos"
      ],
      tags: ["JavaScript", "DigitalPersona Web SDK", "IndexedDB", "WebSockets", "CSS Animations"],
      metric: "< 300ms tiempo por checada",
      githubUrl: "https://github.com/JoseLucioPC/iubi",
      liveUrl: null,
      colorScheme: "emerald",
      accentGlow: "rgba(16, 185, 129, 0.35)",
      previewVisual: "security"
    },
    {
      id: "yarn-docs",
      title: "Yarn Package Manager & Dev Tools",
      category: "opensource",
      badge: "Comunidad",
      shortDesc: "Mantenimiento, optimización y mejoras en la documentación y flujos de usuario para la comunidad de desarrolladores Yarn.",
      fullDesc: "Colaboración en el ecosistema open source de herramientas para desarrolladores web, aportando correcciones, mejoras de documentación y optimizaciones de diseño y maquetación para facilitar la experiencia de los desarrolladores frontend.",
      keyFeatures: [
        "Optimización de tiempos de carga en páginas de documentación estática",
        "Revisión de componentes interactivos de búsqueda y navegación en guías de CLI",
        "Participación en la comunidad global de herramientas open source de JavaScript"
      ],
      tags: ["Open Source", "JavaScript", "Static Site Gen", "Markdown", "Git Workflow"],
      metric: "Ecosistema global",
      githubUrl: "https://github.com/JoseLucioPC/website",
      liveUrl: "https://classic.yarnpkg.com",
      colorScheme: "blue",
      accentGlow: "rgba(59, 130, 246, 0.35)",
      previewVisual: "code"
    }
  ],

  skills: [
    {
      category: "Frontend & UI Core",
      icon: "bi-code-slash",
      color: "cyan",
      items: [
        { name: "HTML5 Semántico", level: "Avanzado", percent: 95 },
        { name: "CSS3 / Modern CSS (Flexbox, Grid, Custom Props)", level: "Avanzado", percent: 95 },
        { name: "JavaScript Moderno (ES6+, DOM, Async/Await)", level: "Avanzado", percent: 92 },
        { name: "TypeScript", level: "Intermedio-Avanzado", percent: 85 },
        { name: "Frameworks (Angular, React basics)", level: "Avanzado", percent: 88 },
        { name: "Responsive & Adaptive Design", level: "Avanzado", percent: 95 }
      ]
    },
    {
      category: "Hardware & Integraciones Web",
      icon: "bi-cpu",
      color: "emerald",
      items: [
        { name: "DigitalPersona Biometric SDK", level: "Especialista", percent: 92 },
        { name: "WebSockets & Realtime Feeds", level: "Avanzado", percent: 88 },
        { name: "HTML5 Canvas & Image Manipulation", level: "Intermedio", percent: 80 },
        { name: "Web APIs (Storage, Workers, Geolocation)", level: "Avanzado", percent: 87 }
      ]
    },
    {
      category: "Sistemas & Backend Integration",
      icon: "bi-database-check",
      color: "violet",
      items: [
        { name: "Consumo y Diseño de REST APIs", level: "Avanzado", percent: 90 },
        { name: "Bases de Datos & SQL Queries", level: "Intermedio", percent: 80 },
        { name: "Arquitectura de Datos para UI", level: "Avanzado", percent: 88 },
        { name: "Seguridad & Tokens JWT", level: "Intermedio-Avanzado", percent: 82 }
      ]
    },
    {
      category: "Herramientas, UX & Calidad",
      icon: "bi-tools",
      color: "amber",
      items: [
        { name: "Git / GitHub & GitHub Pages", level: "Avanzado", percent: 90 },
        { name: "Diseño UI / Prototipado (Figma)", level: "Intermedio-Avanzado", percent: 82 },
        { name: "Accesibilidad Web (a11y / WCAG)", level: "Avanzado", percent: 86 },
        { name: "Web Performance & Core Web Vitals", level: "Avanzado", percent: 88 }
      ]
    }
  ],

  experience: [
    {
      period: "Actualidad",
      role: "Desarrollador Web",
      company: "Grupo Petroil",
      location: "Mazatlán, Sinaloa",
      description: "Desarrollo y modernización de interfaces web corporativas, portales de gestión de combustible y estaciones de servicio. Integración de flujos de datos en tiempo real y optimización de la experiencia de usuario.",
      highlights: [
        "Desarrollo de módulos interactivos de telemetría para monitoreo de activos y volumen.",
        "Implementación de buenas prácticas de arquitectura frontend, reduciendo tiempos de carga y fricción de uso.",
        "Integración continua de servicios web con plataformas administrativas."
      ]
    },
    {
      period: "Proyectos & Open Source",
      role: "Creador & Desarrollador Principal",
      company: "Iubi Project",
      location: "Comunidad / GitHub",
      description: "Investigación y desarrollo de la librería e interfaz Iubi para conectar escáneres biométricos DigitalPersona al ecosistema web sin depender de tecnologías obsoletas.",
      highlights: [
        "Diseño de pasarela de comunicación en JavaScript puro.",
        "Manejo de buffers de imágenes dactilares y renderizado ultra-rápido en Canvas.",
        "Documentación y ejemplos prácticos para la comunidad de desarrolladores."
      ]
    }
  ]
};
