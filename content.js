// Todo el contenido del portafolio vive aqui. Edita este archivo, no el HTML.
// Los campos vacios ("") no se muestran en la pagina.

window.SITE = {
  name: "Juan José",
  githubUser: "JoseMayo16", // tu usuario de GitHub, sin @
  available: true,          // false oculta el aviso "Disponible para proyectos"

  contact: {
    email: "",    // ej. "nombre@correo.com"
    whatsapp: "", // solo numeros con indicativo, ej. "573001234567"
    linkedin: "", // URL completa, ej. "https://www.linkedin.com/in/tu-perfil"
  },

  // Mientras esta lista este vacia, la seccion Proyectos no aparece.
  // Copia la plantilla, quita los // y llena los datos.
  projects: [
    {
      title:   { es: "InvoiceDesk", en: "InvoiceDesk" },
      summary: {
        es: "App de facturación para freelancers y estudios: clientes, facturas con PDF, envío por correo y pago con tarjeta vía Stripe. API en Laravel 13 y app en Vue 3 con TypeScript, con datos aislados por empresa y 55 tests.",
        en: "Invoicing app for freelancers and studios: clients, PDF invoices, email delivery and card payments through Stripe. Laravel 13 API and Vue 3 + TypeScript app, with per-company data isolation and 55 tests.",
      },
      tags:    ["Laravel", "Vue 3", "TypeScript", "Stripe", "Tailwind"],
      repo:    "https://github.com/JoseMayo16/invoice-desk",
      demo:    "",
      image:   "img/invoice-desk.jpg",
    },
    {
      title:   { es: "Jobs Pulse", en: "Jobs Pulse" },
      summary: {
        es: "Pipeline en Python que cada día recolecta ofertas remotas de 3 portales y 24 meses de Hacker News, detecta las tecnologías que piden y publica un dashboard con tendencias. Corre solo con GitHub Actions.",
        en: "Python pipeline that collects remote jobs from 3 boards plus 24 months of Hacker News every day, detects the technologies they ask for and publishes a trends dashboard. Runs itself on GitHub Actions.",
      },
      tags:    ["Python", "SQLite", "GitHub Actions", "JavaScript"],
      repo:    "https://github.com/JoseMayo16/jobs-pulse",
      demo:    "https://josemayo16.github.io/jobs-pulse/",
      image:   "img/jobs-pulse.jpg",
    },
    {
      title:   { es: "Data Cleaner", en: "Data Cleaner" },
      summary: {
        es: "Limpia archivos CSV y Excel desordenados en el navegador: duplicados, variantes de escritura, correos, teléfonos, fechas y números, con registro de cada cambio. El motor es Python corriendo en WebAssembly: el archivo nunca sale del computador.",
        en: "Cleans messy CSV and Excel files in the browser: duplicates, spelling variants, emails, phones, dates and numbers, with a log of every change. The engine is Python running in WebAssembly, so the file never leaves the computer.",
      },
      tags:    ["Python", "Pyodide", "WebAssembly", "JavaScript"],
      repo:    "https://github.com/JoseMayo16/data-cleaner",
      demo:    "https://josemayo16.github.io/data-cleaner/",
      image:   "img/data-cleaner.jpg",
    },
    // {
    //   title:   { es: "Gestor de tareas", en: "Task manager" },
    //   summary: { es: "API REST en Laravel con interfaz en Vue...", en: "Laravel REST API with a Vue frontend..." },
    //   tags:    ["Laravel", "Vue", "SQLite"],
    //   repo:    "https://github.com/JoseMayo16/task-manager",
    //   demo:    "",                   // opcional
    //   image:   "img/task-manager.png", // opcional, 16:10 se ve mejor
    // },
  ],

  stack: [
    { group: "backend",  items: ["PHP", "Laravel", "Python", "Node.js"] },
    { group: "frontend", items: ["JavaScript", "Vue", "HTML", "CSS"] },
    { group: "data",     items: ["MySQL", "PostgreSQL", "SQLite"] },
    { group: "tools",    items: ["Git", "REST", "Linux"] },
  ],

  text: {
    es: {
      "meta.title": "Juan José | Desarrollador web full stack",
      "meta.description": "Desarrollador web full stack en Medellín. Aplicaciones a medida, APIs y automatización con Laravel, Vue y Python.",
      "nav.services": "Servicios",
      "nav.projects": "Proyectos",
      "nav.stack": "Stack",
      "nav.process": "Proceso",
      "nav.contact": "Contacto",
      "theme.toggle": "Cambiar tema",
      "status": "Disponible para proyectos freelance",
      "hero.eyebrow": "Desarrollador web full stack · Medellín, Colombia",
      "hero.title": "Construyo software que <em>resuelve</em> problemas concretos.",
      "hero.lead": "Trabajo con Laravel, Vue y Python para negocios y equipos que necesitan algo hecho a la medida: desde una API hasta un panel administrativo completo.",
      "hero.cta": "Hablemos de tu proyecto",
      "hero.github": "Ver mi GitHub",
      "term.cmd": "nuevo-proyecto --cliente \"tu negocio\"",
      "term.1": "requisitos claros y por escrito",
      "term.2": "API en Laravel con validación",
      "term.3": "interfaz en Vue",
      "term.4": "desplegado y documentado",
      "services.kicker": "Servicios",
      "services.title": "En qué te puedo ayudar",
      "services": [
        { t: "Aplicaciones web a medida", d: "Paneles administrativos, inventarios, reservas o sistemas de gestión interna. Backend en Laravel, interfaz en Vue." },
        { t: "APIs y backends", d: "APIs REST con validación, autenticación y una base de datos bien modelada, listas para conectar con tu web o app." },
        { t: "Automatización y scraping", d: "Scripts en Python que recolectan datos de sitios web, generan reportes o se encargan de tareas repetitivas." },
        { t: "Sitios y landing pages", d: "Páginas rápidas, adaptadas a celular y fáciles de mantener para presentar tu negocio o producto." },
      ],
      "projects.kicker": "Proyectos",
      "projects.title": "Trabajo reciente",
      "projects.code": "Código",
      "projects.demo": "Ver demo",
      "stack.kicker": "Stack",
      "stack.title": "Herramientas con las que trabajo",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "stack.data": "Bases de datos",
      "stack.tools": "Herramientas",
      "process.kicker": "Proceso",
      "process.title": "Cómo trabajamos",
      "process": [
        { t: "Conversamos", d: "Me cuentas qué necesitas. Hago preguntas hasta que el alcance quede claro para los dos." },
        { t: "Propuesta", d: "Recibes por escrito qué se entrega, en cuánto tiempo y a qué precio." },
        { t: "Construcción", d: "Ves avances cada semana en un enlace que puedes revisar cuando quieras." },
        { t: "Entrega", d: "El código queda en tu repositorio, con instrucciones de uso y un periodo de soporte acordado." },
      ],
      "contact.kicker": "Contacto",
      "contact.title": "¿Tienes un proyecto en mente?",
      "contact.lead": "Escríbeme con una descripción corta de lo que necesitas y te respondo con preguntas o una primera propuesta.",
      "contact.email": "Correo",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "footer.made": "Hecho a mano con HTML, CSS y JavaScript.",
    },

    en: {
      "meta.title": "Juan José | Full stack web developer",
      "meta.description": "Full stack web developer based in Medellín, Colombia. Custom web apps, APIs and automation with Laravel, Vue and Python.",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.stack": "Stack",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "theme.toggle": "Toggle theme",
      "status": "Available for freelance work",
      "hero.eyebrow": "Full stack web developer · Medellín, Colombia",
      "hero.title": "I build software that <em>solves</em> real problems.",
      "hero.lead": "I work with Laravel, Vue and Python for businesses and teams that need something built for them: from a single API to a full admin dashboard.",
      "hero.cta": "Let's talk about your project",
      "hero.github": "See my GitHub",
      "term.cmd": "new-project --client \"your business\"",
      "term.1": "clear, written requirements",
      "term.2": "Laravel API with validation",
      "term.3": "Vue frontend",
      "term.4": "deployed and documented",
      "services.kicker": "Services",
      "services.title": "How I can help",
      "services": [
        { t: "Custom web applications", d: "Admin dashboards, inventory, booking or internal management systems. Laravel backend, Vue frontend." },
        { t: "APIs and backends", d: "REST APIs with validation, authentication and a well-modeled database, ready to plug into your site or app." },
        { t: "Automation and scraping", d: "Python scripts that collect data from websites, generate reports or take care of repetitive tasks." },
        { t: "Websites and landing pages", d: "Fast, mobile-friendly pages that are easy to maintain, built to present your business or product." },
      ],
      "projects.kicker": "Projects",
      "projects.title": "Recent work",
      "projects.code": "Code",
      "projects.demo": "Live demo",
      "stack.kicker": "Stack",
      "stack.title": "Tools I work with",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "stack.data": "Databases",
      "stack.tools": "Tools",
      "process.kicker": "Process",
      "process.title": "How we work together",
      "process": [
        { t: "We talk", d: "You tell me what you need. I ask questions until the scope is clear to both of us." },
        { t: "Proposal", d: "You get in writing what will be delivered, how long it takes and what it costs." },
        { t: "Build", d: "You see progress every week on a link you can check anytime." },
        { t: "Delivery", d: "The code lives in your repository, with usage instructions and an agreed support period." },
      ],
      "contact.kicker": "Contact",
      "contact.title": "Have a project in mind?",
      "contact.lead": "Send me a short description of what you need and I will reply with questions or a first proposal.",
      "contact.email": "Email",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "footer.made": "Handmade with HTML, CSS and JavaScript.",
    },
  },
};
