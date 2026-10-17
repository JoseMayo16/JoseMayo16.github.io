// Todo el contenido del portafolio vive aqui. Edita este archivo, no el HTML.
// Los campos vacios ("") no se muestran en la pagina.

window.SITE = {
  name: "Juan José",
  githubUser: "JoseMayo16", // tu usuario de GitHub, sin @
  photo: "img/me.jpg",      // cuadrada, minimo 400x400
  available: true,          // false cambia el estado a "ocupado"

  contact: {
    email: "jnjsmayo@gmail.com",
    whatsapp: "573016612888", // solo numeros con indicativo
    linkedin: "https://www.linkedin.com/in/juan-josé-mayo-m-1682252b2", // URL completa
  },

  // Datos en vivo de Jobs Pulse para la seccion "Intel". Si no cargan, la seccion se oculta.
  intelUrl: "https://josemayo16.github.io/jobs-pulse/data/summary.json",
  intelDashboard: "https://josemayo16.github.io/jobs-pulse/",
  // Tecnologias que se resaltan como "mi stack" en la seccion Intel.
  myStack: ["PHP", "Laravel", "Vue", "Python", "JavaScript", "TypeScript", "Node.js", "MySQL", "PostgreSQL", "Tailwind"],
  loadout: ["Laravel", "Vue", "Python", "TypeScript", "MySQL", "Linux"],

  // Proyectos como casos: problema, que se construyo y resultado.
  projects: [
    {
      title: "InvoiceDesk",
      image: "img/invoice-desk.jpg",
      tags:  ["Laravel 13", "Vue 3", "TypeScript", "Stripe", "Tailwind"],
      repo:  "https://github.com/JoseMayo16/invoice-desk",
      demo:  "",
      es: {
        problem: "Un freelancer factura en Excel, manda los PDF a mano y no sabe con certeza quién le debe.",
        build:   "API en Laravel 13 y app en Vue 3 con TypeScript: facturas con PDF, envío por correo en cola y pago con tarjeta por Stripe Checkout.",
        result:  "Cada empresa ve solo sus datos, un pago no se registra dos veces aunque Stripe reenvíe el aviso, y 55 tests lo respaldan.",
      },
      en: {
        problem: "A freelancer invoices from a spreadsheet, emails PDFs by hand and is never quite sure who still owes them.",
        build:   "Laravel 13 API and Vue 3 + TypeScript app: PDF invoices, queued email delivery and card payments through Stripe Checkout.",
        result:  "Each company only sees its own data, a payment is never recorded twice even if Stripe resends the webhook, and 55 tests back it up.",
      },
    },
    {
      title: "Jobs Pulse",
      image: "img/jobs-pulse.jpg",
      tags:  ["Python", "SQLite", "GitHub Actions", "JavaScript"],
      repo:  "https://github.com/JoseMayo16/jobs-pulse",
      demo:  "https://josemayo16.github.io/jobs-pulse/",
      es: {
        problem: "Saber qué tecnologías piden de verdad las empresas sin revisar portales de empleo a mano.",
        build:   "Pipeline en Python que cada día recolecta ofertas remotas de 3 portales y 24 meses de Hacker News, detecta las tecnologías y publica un dashboard.",
        result:  "Corre solo en GitHub Actions, sin servidor y sin costo. Sus datos alimentan la sección Intel de esta página.",
      },
      en: {
        problem: "Knowing which technologies companies actually ask for, without checking job boards by hand.",
        build:   "Python pipeline that collects remote jobs from 3 boards plus 24 months of Hacker News every day, detects the technologies and publishes a dashboard.",
        result:  "Runs itself on GitHub Actions with no server and no cost. Its data feeds the Intel section of this page.",
      },
    },
    {
      title: "Data Cleaner",
      image: "img/data-cleaner.jpg",
      tags:  ["Python", "Pyodide", "WebAssembly", "JavaScript"],
      repo:  "https://github.com/JoseMayo16/data-cleaner",
      demo:  "https://josemayo16.github.io/data-cleaner/",
      es: {
        problem: "Archivos de Excel y CSV con duplicados, nombres mal escritos, fechas mezcladas y teléfonos en mil formatos.",
        build:   "Motor en Python que corre dentro del navegador con WebAssembly: detecta los problemas, los corrige y registra cada cambio.",
        result:  "El archivo nunca sale del computador del usuario, así que sirve para datos de clientes o confidenciales.",
      },
      en: {
        problem: "Excel and CSV files full of duplicates, misspelled names, mixed date formats and phones written a dozen ways.",
        build:   "A Python engine that runs inside the browser with WebAssembly: it finds the problems, fixes them and logs every change.",
        result:  "The file never leaves the user's computer, so it works for client or confidential data.",
      },
    },
  ],

  text: {
    es: {
      "meta.title": "Juan José | Desarrollador full stack",
      "meta.description": "Desarrollador full stack en Medellín. Aplicaciones web, APIs y automatización con Laravel, Vue y Python.",
      "nav.about": "perfil",
      "nav.intel": "intel",
      "nav.work": "proyectos",
      "nav.help": "servicios",
      "nav.contact": "contacto",
      "status.on": "Disponible para proyectos",
      "status.off": "Agenda llena por ahora",

      "hero.tag": "player_01 · desarrollador full stack",
      "hero.lead": "Hago aplicaciones web, APIs y automatizaciones con Laravel, Vue y Python. Llevo 3 años haciéndolo para clientes reales, desde pequeñas empresas hasta la Universidad de Antioquia.",
      "hero.cta": "Cuéntame tu proyecto",
      "hero.work": "Ver proyectos",

      "card.class": "Clase",
      "card.classv": "Full stack",
      "card.xp": "Experiencia",
      "card.xpv": "3 años con clientes + 2 de estudio",
      "card.base": "Base",
      "card.basev": "Medellín, CO · UTC-5",
      "card.lang": "Idiomas",
      "card.langv": "Español nativo · Inglés B2 cert.",
      "card.loadout": "Equipo",
      "card.side": "Misiones extra",
      "card.sidev": "Ciberseguridad · Gaming",

      "about.kicker": "perfil",
      "about.title": "Sobre mí",
      "about.p1": "Llevo 3 años programando de forma profesional, después de 2 años de estudios. He hecho páginas web para pequeñas empresas, y páginas y automatizaciones para organizaciones grandes como la Universidad de Antioquia.",
      "about.p2": "Me gusta la ciberseguridad y eso se nota en cómo construyo: la validación, la autenticación y el aislamiento de datos van desde el principio, no al final. Fuera del trabajo, juego.",
      "about.log": "Historial",
      "about.items": [
        { t: "Universidad de Antioquia (UdeA)", d: "Páginas web y automatizaciones." },
        { t: "Pequeñas empresas", d: "Páginas web para presentar y vender su negocio." },
        { t: "Proyectos propios", d: "InvoiceDesk, Jobs Pulse y Data Cleaner, con código abierto." },
      ],

      "intel.kicker": "intel en vivo",
      "intel.title": "Lo que pide hoy el mercado remoto",
      "intel.lead": "Datos reales de Jobs Pulse, mi pipeline que revisa ofertas de empleo remoto cada día. Lo que está en verde, lo uso.",
      "intel.mine": "mi stack",
      "intel.meta": "{date} · {total} ofertas · últimos {days} días",
      "intel.link": "Ver el dashboard completo",

      "work.kicker": "proyectos",
      "work.title": "Casos",
      "work.case": "Caso",
      "work.problem": "Problema",
      "work.build": "Lo que hice",
      "work.result": "Resultado",
      "work.code": "Código",
      "work.demo": "Probar demo",

      "help.kicker": "servicios",
      "help.title": "En qué te puedo ayudar",
      "help.items": [
        { k: "web", t: "Aplicaciones web", d: "Paneles, inventarios, reservas, herramientas internas." },
        { k: "api", t: "APIs y backends", d: "Validación, autenticación y una base de datos bien pensada." },
        { k: "bot", t: "Automatización", d: "Scripts que recolectan datos, generan reportes o hacen lo repetitivo." },
        { k: "www", t: "Sitios y landings", d: "Rápidos, adaptados a celular y fáciles de mantener." },
      ],
      "help.flow": "Cómo trabajamos",
      "help.steps": [
        { t: "Conversamos", d: "Pregunto hasta que el alcance quede claro." },
        { t: "Propuesta", d: "Por escrito: qué, cuándo y cuánto." },
        { t: "Construcción", d: "Avances cada semana en un enlace." },
        { t: "Entrega", d: "Código en tu repositorio, documentado y con soporte." },
      ],

      "contact.kicker": "contacto",
      "contact.title": "¿Construimos algo?",
      "contact.lead": "Escríbeme qué necesitas en un par de líneas. Te respondo con preguntas o una primera propuesta.",
      "contact.email": "Correo",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",

      "footer.made": "Hecho a mano, sin plantillas.",
      "egg.title": "Logro desbloqueado",
      "egg.text": "Encontraste el código Konami. Si sabes cuál es, nos vamos a entender bien.",
    },

    en: {
      "meta.title": "Juan José | Full stack developer",
      "meta.description": "Full stack developer based in Medellín, Colombia. Web apps, APIs and automation with Laravel, Vue and Python.",
      "nav.about": "profile",
      "nav.intel": "intel",
      "nav.work": "work",
      "nav.help": "services",
      "nav.contact": "contact",
      "status.on": "Available for projects",
      "status.off": "Fully booked for now",

      "hero.tag": "player_01 · full stack developer",
      "hero.lead": "I build web apps, APIs and automations with Laravel, Vue and Python. I've been doing it for real clients for 3 years, from small businesses to Universidad de Antioquia.",
      "hero.cta": "Tell me about your project",
      "hero.work": "See my work",

      "card.class": "Class",
      "card.classv": "Full stack",
      "card.xp": "Experience",
      "card.xpv": "3 years with clients + 2 of studies",
      "card.base": "Base",
      "card.basev": "Medellín, CO · UTC-5",
      "card.lang": "Languages",
      "card.langv": "Spanish native · English B2 cert.",
      "card.loadout": "Loadout",
      "card.side": "Side quests",
      "card.sidev": "Cybersecurity · Gaming",

      "about.kicker": "profile",
      "about.title": "About me",
      "about.p1": "I've been programming professionally for 3 years, after 2 years of formal studies. I've built websites for small businesses, and websites and automations for large organizations such as Universidad de Antioquia.",
      "about.p2": "I'm into cybersecurity, and it shows in how I build: validation, authentication and data isolation are there from day one, not bolted on at the end. Off the clock, I play games.",
      "about.log": "Track record",
      "about.items": [
        { t: "Universidad de Antioquia (UdeA)", d: "Websites and automations." },
        { t: "Small businesses", d: "Websites to present and sell their business." },
        { t: "Own projects", d: "InvoiceDesk, Jobs Pulse and Data Cleaner, all open source." },
      ],

      "intel.kicker": "live intel",
      "intel.title": "What the remote market asks for today",
      "intel.lead": "Real data from Jobs Pulse, my pipeline that scans remote job posts every day. Anything in green, I work with.",
      "intel.mine": "my stack",
      "intel.meta": "{date} · {total} jobs · last {days} days",
      "intel.link": "Open the full dashboard",

      "work.kicker": "work",
      "work.title": "Case files",
      "work.case": "Case",
      "work.problem": "Problem",
      "work.build": "What I built",
      "work.result": "Result",
      "work.code": "Code",
      "work.demo": "Try the demo",

      "help.kicker": "services",
      "help.title": "How I can help",
      "help.items": [
        { k: "web", t: "Web apps", d: "Dashboards, inventory, booking, internal tools." },
        { k: "api", t: "APIs and backends", d: "Validation, authentication and a well-designed database." },
        { k: "bot", t: "Automation", d: "Scripts that collect data, build reports or handle the repetitive work." },
        { k: "www", t: "Sites and landings", d: "Fast, mobile-friendly and easy to maintain." },
      ],
      "help.flow": "How we work",
      "help.steps": [
        { t: "We talk", d: "I ask until the scope is clear." },
        { t: "Proposal", d: "In writing: what, when and how much." },
        { t: "Build", d: "Weekly progress on a link." },
        { t: "Delivery", d: "Code in your repo, documented and supported." },
      ],

      "contact.kicker": "contact",
      "contact.title": "Shall we build something?",
      "contact.lead": "Tell me what you need in a couple of lines. I'll reply with questions or a first proposal.",
      "contact.email": "Email",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",

      "footer.made": "Handmade, no templates.",
      "egg.title": "Achievement unlocked",
      "egg.text": "You found the Konami code. If you know what that is, we'll get along just fine.",
    },
  },
};
