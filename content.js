// Todo el contenido del portafolio vive aqui. Edita este archivo, no el HTML.
// Los campos vacios ("") no se muestran en la pagina.

window.SITE = {
  name: "Juan José Mayo",
  githubUser: "JoseMayo16", // tu usuario de GitHub, sin @
  photo: "img/me.jpg",      // cuadrada, minimo 400x400
  available: true,          // false cambia el estado a "agenda llena"

  contact: {
    email: "jnjsmayo@gmail.com",
    whatsapp: "573016612888", // solo numeros con indicativo
    linkedin: "https://www.linkedin.com/in/juan-josé-mayo-m-1682252b2", // URL completa
  },

  // Datos en vivo de Jobs Pulse. Si no cargan, la seccion se oculta.
  intelUrl: "https://josemayo16.github.io/jobs-pulse/data/summary.json",
  intelDashboard: "https://josemayo16.github.io/jobs-pulse/",
  // Tecnologias que se resaltan como "las uso" en los datos en vivo.
  myStack: ["PHP", "Laravel", "Vue", "Python", "JavaScript", "TypeScript", "Node.js", "MySQL", "PostgreSQL", "Tailwind", "Docker"],

  // Ficha de la portada: [clave de texto, valor]. Los valores que no dependen del idioma van tal cual.
  spec: [
    ["spec.xp", "spec.xpv"],
    ["spec.stack", "n8n · Airtable · Laravel · Vue · Python"],
    ["spec.edu", "spec.eduv"],
    ["spec.lang", "spec.langv"],
    ["spec.zone", "Medellín · UTC-5"],
  ],

  // Casos: problema, que se construyo y resultado.
  projects: [
    {
      title: "Fillout → n8n → Airtable",
      image: "img/automation.svg",
      tags:  ["n8n", "Fillout", "Airtable", "APIs"],
      kind:  "client", // client | own
      repo:  "",
      demo:  "",
      es: {
        summary: "Formularios conectados a Airtable sin copiar datos a mano.",
        problem: "Las respuestas de los formularios había que pasarlas a mano a Airtable: llegaban con duplicados, datos mal escritos y registros que debían actualizarse en vez de crearse de nuevo.",
        build:   "Flujos en n8n que reciben cada respuesta de Fillout, filtran y limpian los datos, buscan si el registro ya existe y lo crean o lo actualizan en Airtable.",
        result:  "Los datos llegan limpios, sin duplicados y al registro correcto, sin que nadie tenga que copiarlos a mano.",
      },
      en: {
        summary: "Forms connected to Airtable with no manual copy-paste.",
        problem: "Form responses had to be copied into Airtable by hand: they arrived with duplicates, messy data and records that needed updating instead of being created again.",
        build:   "n8n workflows that receive every Fillout submission, filter and clean the data, check whether the record already exists, and create or update it in Airtable.",
        result:  "Data lands clean, deduplicated and in the right record, with nobody copying it by hand.",
      },
    },
    {
      title: "InvoiceDesk",
      image: "img/invoice-desk.jpg",
      tags:  ["Laravel 13", "Vue 3", "TypeScript", "Stripe"],
      kind:  "own",
      repo:  "https://github.com/JoseMayo16/invoice-desk",
      demo:  "",
      es: {
        summary: "Facturación con PDF, envío por correo y pagos con tarjeta.",
        problem: "Un freelancer factura en Excel, manda los PDF a mano y no sabe con certeza quién le debe.",
        build:   "API en Laravel 13 y app en Vue 3 con TypeScript: facturas con PDF, envío por correo en cola y pago con tarjeta por Stripe Checkout.",
        result:  "Cada empresa ve solo sus datos, un pago no se registra dos veces aunque Stripe reenvíe el aviso, y 55 tests lo respaldan.",
      },
      en: {
        summary: "Invoicing with PDF, email delivery and card payments.",
        problem: "A freelancer invoices from a spreadsheet, emails PDFs by hand and is never quite sure who still owes them.",
        build:   "Laravel 13 API and Vue 3 + TypeScript app: PDF invoices, queued email delivery and card payments through Stripe Checkout.",
        result:  "Each company only sees its own data, a payment is never recorded twice even if Stripe resends the webhook, and 55 tests back it up.",
      },
    },
    {
      title: "Jobs Pulse",
      image: "img/jobs-pulse.jpg",
      tags:  ["Python", "SQLite", "GitHub Actions"],
      kind:  "own",
      repo:  "https://github.com/JoseMayo16/jobs-pulse",
      demo:  "https://josemayo16.github.io/jobs-pulse/",
      es: {
        summary: "Qué tecnologías piden las ofertas remotas, actualizado cada día.",
        problem: "Saber qué tecnologías piden de verdad las empresas sin revisar portales de empleo a mano.",
        build:   "Pipeline en Python que cada día recolecta ofertas remotas de 3 portales y 24 meses de Hacker News, detecta las tecnologías y publica un dashboard.",
        result:  "Corre solo en GitHub Actions, sin servidor y sin costo. Sus datos alimentan la sección \"Mercado en vivo\" de esta página.",
      },
      en: {
        summary: "Which technologies remote jobs ask for, updated daily.",
        problem: "Knowing which technologies companies actually ask for, without checking job boards by hand.",
        build:   "Python pipeline that collects remote jobs from 3 boards plus 24 months of Hacker News every day, detects the technologies and publishes a dashboard.",
        result:  "Runs itself on GitHub Actions with no server and no cost. Its data feeds the \"Live market\" section of this page.",
      },
    },
    {
      title: "Data Cleaner",
      image: "img/data-cleaner.jpg",
      tags:  ["Python", "Pyodide", "WebAssembly"],
      kind:  "own",
      repo:  "https://github.com/JoseMayo16/data-cleaner",
      demo:  "https://josemayo16.github.io/data-cleaner/",
      es: {
        summary: "Limpia archivos de Excel y CSV sin que salgan del computador.",
        problem: "Archivos de Excel y CSV con duplicados, nombres mal escritos, fechas mezcladas y teléfonos en mil formatos.",
        build:   "Motor en Python que corre dentro del navegador con WebAssembly: detecta los problemas, los corrige y registra cada cambio.",
        result:  "El archivo nunca sale del computador del usuario, así que sirve para datos de clientes o confidenciales.",
      },
      en: {
        summary: "Cleans Excel and CSV files without them leaving your computer.",
        problem: "Excel and CSV files full of duplicates, misspelled names, mixed date formats and phones written a dozen ways.",
        build:   "A Python engine that runs inside the browser with WebAssembly: it finds the problems, fixes them and logs every change.",
        result:  "The file never leaves the user's computer, so it works for client or confidential data.",
      },
    },
  ],

  text: {
    es: {
      "meta.title": "Juan José Mayo | Desarrollador full stack y de automatización",
      "meta.description": "Desarrollador full stack y de automatización en Medellín. Flujos en n8n, integraciones con APIs y aplicaciones web con Laravel y Vue.",
      "nav.intro": "Inicio",
      "nav.work": "Casos",
      "nav.market": "Mercado en vivo",
      "nav.experience": "Experiencia",
      "nav.services": "Servicios",
      "nav.contact": "Contacto",
      "theme.toggle": "Cambiar tema",
      "status.on": "Disponible",
      "status.off": "Agenda llena",
      "role": "Full stack y automatización",

      "hero.title": "Desarrollador full stack y de automatización",
      "hero.lead": "Conecto las herramientas de tu equipo y construyo las aplicaciones que les faltan. Casi 3 años en la Universidad de Antioquia y en Pase Seguro, con flujos en n8n, integraciones con APIs y aplicaciones en Laravel y Vue.",
      "hero.cta": "Escríbeme",
      "hero.work": "Ver casos",

      "spec.xp": "experiencia",
      "spec.xpv": "casi 3 años",
      "spec.stack": "stack",
      "spec.edu": "formación",
      "spec.eduv": "Tecnólogo en Desarrollo de Software, SENA",
      "spec.lang": "idiomas",
      "spec.langv": "español nativo · inglés conversacional",
      "spec.zone": "zona",

      "work.title": "Casos",
      "work.lead": "Un trabajo real con cliente y tres proyectos propios con código abierto.",
      "work.kind.client": "Trabajo con cliente",
      "work.kind.own": "Proyecto propio",
      "work.problem": "Problema",
      "work.build": "Solución",
      "work.result": "Resultado",
      "work.code": "Código",
      "work.demo": "Demo en vivo",
      "work.private": "Código privado del cliente",

      "market.title": "Mercado en vivo",
      "market.headline": "{skill} aparece en el {share} de las ofertas remotas",
      "market.lead": "Datos de Jobs Pulse (caso 03), actualizados cada día. Las barras en verde son tecnologías que uso.",
      "market.mine": "uso",
      "market.meta": "{total} ofertas · últimos {days} días · actualizado {date}",
      "market.link": "Ver el dashboard completo",

      "exp.title": "Experiencia",
      "exp.items": [
        { when: "ene 2026 – jun 2026", org: "Pase Seguro S.A.S", role: "Desarrollador Full-Stack", d: "Soluciones web y procesos internos, automatizaciones e integraciones entre herramientas, frontend y backend, soporte de sistemas internos." },
        { when: "oct 2023 – dic 2025", org: "Universidad de Antioquia", role: "Desarrollador Full-Stack y Automatización", d: "Aplicaciones web con WordPress y FlutterFlow, bases de datos SQL, y automatizaciones con n8n, Monday y Airtable." },
        { when: "2022 – 2024", org: "SENA", role: "Tecnólogo en Análisis y Desarrollo de Software", d: "Formación en desarrollo de software, APIs REST, SQL, Git y Scrum." },
      ],
      "exp.note": "Me interesa la ciberseguridad, así que la validación, la autenticación y el aislamiento de datos van en el diseño desde el principio. Fuera del trabajo, videojuegos.",

      "services.title": "Servicios",
      "services.items": [
        { t: "Automatización e integraciones", d: "Flujos en n8n, formularios conectados a Airtable o Monday, sincronización entre apps.", s: "n8n · Airtable · Monday · APIs" },
        { t: "Aplicaciones web", d: "Paneles, inventarios, reservas, herramientas internas.", s: "Laravel · Vue · MySQL" },
        { t: "APIs y backends", d: "Validación, autenticación y una base de datos bien pensada.", s: "Laravel · Python · PostgreSQL" },
        { t: "Sitios y landings", d: "Rápidos, adaptados a celular y fáciles de mantener.", s: "HTML · WordPress" },
      ],
      "process.title": "Cómo trabajo",
      "process.steps": [
        { t: "Conversamos", d: "Pregunto hasta que el alcance quede claro." },
        { t: "Propuesta", d: "Por escrito: qué, cuándo y cuánto." },
        { t: "Construcción", d: "Avances cada semana en un enlace." },
        { t: "Entrega", d: "Código en tu repositorio, documentado y con soporte." },
      ],

      "contact.title": "Contacto",
      "contact.lead": "Escríbeme qué necesitas en un par de líneas. Te respondo con preguntas o una primera propuesta.",
      "contact.email": "Correo",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.copy": "Copiar",
      "contact.copied": "Copiado",

      "footer.made": "Hecho a mano con HTML, CSS y JavaScript.",
    },

    en: {
      "meta.title": "Juan José Mayo | Full stack and automation developer",
      "meta.description": "Full stack and automation developer in Medellín, Colombia. n8n workflows, API integrations and web apps with Laravel and Vue.",
      "nav.intro": "Home",
      "nav.work": "Work",
      "nav.market": "Live market",
      "nav.experience": "Experience",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "theme.toggle": "Toggle theme",
      "status.on": "Available",
      "status.off": "Fully booked",
      "role": "Full stack and automation",

      "hero.title": "Full stack and automation developer",
      "hero.lead": "I connect your team's tools and build the apps they're missing. Almost 3 years at Universidad de Antioquia and Pase Seguro, with n8n workflows, API integrations and Laravel and Vue apps.",
      "hero.cta": "Email me",
      "hero.work": "See the work",

      "spec.xp": "experience",
      "spec.xpv": "almost 3 years",
      "spec.stack": "stack",
      "spec.edu": "education",
      "spec.eduv": "Software Development Technologist, SENA",
      "spec.lang": "languages",
      "spec.langv": "Spanish native · English conversational",
      "spec.zone": "zone",

      "work.title": "Work",
      "work.lead": "One real client engagement and three open-source projects of my own.",
      "work.kind.client": "Client work",
      "work.kind.own": "Own project",
      "work.problem": "Problem",
      "work.build": "Solution",
      "work.result": "Result",
      "work.code": "Code",
      "work.demo": "Live demo",
      "work.private": "Client code is private",

      "market.title": "Live market",
      "market.headline": "{skill} shows up in {share} of remote job posts",
      "market.lead": "Data from Jobs Pulse (case 03), updated every day. Green bars are technologies I use.",
      "market.mine": "I use it",
      "market.meta": "{total} jobs · last {days} days · updated {date}",
      "market.link": "Open the full dashboard",

      "exp.title": "Experience",
      "exp.items": [
        { when: "Jan 2026 – Jun 2026", org: "Pase Seguro S.A.S", role: "Full-Stack Developer", d: "Web solutions and internal processes, automations and integrations between tools, frontend and backend, internal systems support." },
        { when: "Oct 2023 – Dec 2025", org: "Universidad de Antioquia", role: "Full-Stack and Automation Developer", d: "Web apps with WordPress and FlutterFlow, SQL databases, and automations with n8n, Monday and Airtable." },
        { when: "2022 – 2024", org: "SENA", role: "Software Analysis and Development Technologist", d: "Software development, REST APIs, SQL, Git and Scrum." },
      ],
      "exp.note": "I'm into cybersecurity, so validation, authentication and data isolation are part of the design from day one. Off the clock, video games.",

      "services.title": "Services",
      "services.items": [
        { t: "Automation and integrations", d: "n8n workflows, forms connected to Airtable or Monday, syncing data between apps.", s: "n8n · Airtable · Monday · APIs" },
        { t: "Web apps", d: "Dashboards, inventory, booking, internal tools.", s: "Laravel · Vue · MySQL" },
        { t: "APIs and backends", d: "Validation, authentication and a well-designed database.", s: "Laravel · Python · PostgreSQL" },
        { t: "Sites and landing pages", d: "Fast, mobile-friendly and easy to maintain.", s: "HTML · WordPress" },
      ],
      "process.title": "How I work",
      "process.steps": [
        { t: "We talk", d: "I ask until the scope is clear." },
        { t: "Proposal", d: "In writing: what, when and how much." },
        { t: "Build", d: "Weekly progress on a link." },
        { t: "Delivery", d: "Code in your repo, documented and supported." },
      ],

      "contact.title": "Contact",
      "contact.lead": "Tell me what you need in a couple of lines. I'll reply with questions or a first proposal.",
      "contact.email": "Email",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.copy": "Copy",
      "contact.copied": "Copied",

      "footer.made": "Handmade with HTML, CSS and JavaScript.",
    },
  },
};
