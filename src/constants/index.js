import {
  AF,
  angular,
  bitbucket,
  bootstrap,
  contact,
  css,
  download,
  express,
  firebase,
  framework,
  git,
  github,
  html,
  javascript,
  jenkins,
  jsf,
  linkedin,
  mysql,
  net,
  nodejs,
  PA,
  react,
  sass,
  scrum,
  sonarqube,
  spring,
  sqlserver,
  tailwindcss,
  twitter,
  typescript,
  visual,
  visualC,
  web
} from "../assets/icons";
import { cpr, ilao, solredes, synergias } from "../assets/images";

export const skills = [
  {
    imageUrl: scrum,
    name: "Scrum",
    type: "Team",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: spring,
    name: "Spring Boot",
    type: "Backend",
  },
  {
    imageUrl: net,
    name: ".NET Core",
    type: "Backend",
  },
  {
    imageUrl: framework,
    name: ".NET Framework",
    type: "Backend",
  },
  {
    imageUrl: jsf,
    name: "JSF",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: bitbucket,
    name: "Bitbucket",
    type: "Version Control",
  },
  {
    imageUrl: visual,
    name: "Visual Studio",
    type: "Frontend",
  },
  {
    imageUrl: visualC,
    name: "VS Code",
    type: "Frontend",
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "Automation",
  },
  {
    imageUrl: sonarqube,
    name: "SonarQube",
    type: "Automation",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Data Base",
  },
  {
    imageUrl: sqlserver,
    name: "SQL Server",
    type: "Data Base",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Data Base",
  },
  {
    imageUrl: AF,
    name: "Azure Functions",
    type: "Automation",
  },
  {
    imageUrl: PA,
    name: "Power Automate",
    type: "Automation",
  },
];

export const experiences = [
  {
    title: "Desarrollador Backend Python",
    company_name: "Grupo Ilao",
    icon: ilao,
    iconBg: "#ffecdefa",
    date: "Oct 2024 - Actualmente",
    points: [
      "Desarrollo y mantenimiento de funcionalidades en Python (Django).",
      "Gestión de migraciones de base de datos con el ORM de Django.",
      "Realización de pruebas para garantizar la calidad del código.",
      "Uso de Sentry para monitoreo de errores.",
      "Implementación de CI/CD con GitHub Actions.",
      "Manejo de entornos con Docker y Dev Containers.",
      "Participación en planificación ágil bajo Scrum.",
      "Colaboración continua con el mismo líder desde CPR y Synergias, fortaleciendo confianza y aprendizaje.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company_name: "Synergias",
    icon: synergias,
    iconBg: "#ddffeb",
    date: "Jul 2023 - Oct 2024",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando .NET y React.",
      "Implementación y optimización de API REST y SOAP.",
      "Creación y mantenimiento de consultas y procedimientos en SQL Server.",
      "Resolución de errores y mejora continua del aplicativo.",
      "Colaboración en un equipo multifuncional bajo la metodología Scrum.",
      "Implementación de autenticación con JWT e integración de SSO con Auth0.",
      "Desarrollo de Azure Functions para procesamiento de datos.",
      "Extracción y análisis de información en documentos mediante modelos de IA de Azure.",
    ],
  },
  {
    title: "Subdirector de Desarrollo",
    company_name: "CPR Servicios y Consultoría SAS",
    icon: cpr,
    iconBg: "#dddcff",
    date: "Sep 2021 - Jun 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando Node.js y Angular.",
      "Implementación de nuevos módulos y consumo de diversos servicios.",
      "Diseño y estructuración de datos a partir de integraciones con múltiples fuentes.",
      "Optimización y mantenimiento del aplicativo para mejorar su rendimiento.",
      "Creación y gestión de consultas en MySQL.",
      "Atención y resolución de requerimientos de los usuarios.",
      "Trabajo en un equipo de desarrollo pequeño bajo la metodología Scrum.",
    ],
  },
  {
    title: "Desarrollador Web",
    company_name: "Solredes SAS",
    icon: solredes,
    iconBg: "#f5e0ff",
    date: "Ago 2020 - Sep 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web con Spring Boot, Angular, React, Flutter y JSF.",
      "Inicié como desarrollador frontend, pero asumí múltiples tareas a lo largo del tiempo.",
      "Creación de aplicativos desde cero utilizando Angular y Spring Boot.",
      "Implementación de módulos en diversos proyectos.",
      "Optimización y mejora de funcionalidades existentes.",
      "Creación y gestión de consultas en bases de datos MySQL.",
      "Primer experiencia laboral, donde desarrollé una gran pasión por la programación.",
    ],
  },
];

export const studies = [
  {
    name: "Ingeniería Telemática",
    date: "Actualmente",
    content: "Universidad Distrital Bogotá D.C",
    url: "https://docsdeveloper.s3.amazonaws.com/ing_tel.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/ing_tel.jpg",
  },
  {
    name: "Tecnólogo en Sistematización de Datos",
    date: "2021",
    content: "Universidad Distrital Bogotá D.C",
    url: "https://docsdeveloper.s3.amazonaws.com/diploma_tecno.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/diploma.jpg",
  },
  {
    name: "Bases de Datos con SQL",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/sql.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/sql.jpg",
  },
  {
    name: "Curso Profesional de Git y GitHub",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/git-github.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/git-github.jpg",
  },
  {
    name: "Buenas Prácticas y Código Limpio en C#",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/CodigoLimpioC%23.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/CodigoLimpioC.jpg",
  },
  {
    name: "Introducción a AWS: Fundamentos de Cloud Computing",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/aws-fundamentos.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/aws-fundamentos.jpg",
  },
  {
    name: "Python",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/python.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/python.jpg",
  },
  {
    name: "State Machines en React.js",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/state-machines.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/state-machines.jpg",
  },
  {
    name: "Prueba Técnica: E-commerce Profesional con React.js",
    date: "2024",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/laboratorio-react.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/laboratorio-react.jpg",
  },
  {
    name: "Node.js: Autenticación, Microservicios y Redis",
    date: "2023",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/node.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/node.jpg",
  },
  {
    name: "React.js",
    date: "2023",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/react.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/react.jpg",
  },
  {
    name: "Autenticación con Angular",
    date: "2023",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/angular-autenticacion.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/angular.jpg",
  },
  {
    name: "Curso Profesional de Scrum",
    date: "2023",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/scrum.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/scrum.jpg",
  },
  {
    name: "Introducción a la Nube",
    date: "2023",
    content: "Platzi",
    url: "https://docsdeveloper.s3.amazonaws.com/intro-nube.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/intro-nube.jpg",
  },
  {
    name: "Controles y seguridad informática",
    date: "2020",
    content: "SENA",
    url: "https://docsdeveloper.s3.amazonaws.com/seguridad_sena.pdf",
    img: "https://docsdeveloper.s3.amazonaws.com/certificados/seguridad_sena.jpg",
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://twitter.com/JuanCar21619604",
  },
  {
    label: "Whatsapp",
    iconUrl: contact,
    link: "https://api.whatsapp.com/send?phone=+573013971483&text=Hello,%20from%20your%20blog!.",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/juancarlosgomezs/",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/JuanCGomezS",
  },
];

export const projects = [
  {
    iconUrl: "https://docsdeveloper.s3.us-east-1.amazonaws.com/Proyectos/demo_chatgpt.png",
    theme: "btn-back-blue",
    name: "Demo ChatGPT WebGPU",
    description:
      "Este proyecto es un prototipo de ChatGPT que se ejecuta completamente en el cliente, utilizando tecnologías avanzadas como WebLLM, WebGPU y Web Workers. El objetivo es demostrar cómo es posible compilar y ejecutar un modelo de lenguaje como ChatGPT directamente en el navegador sin necesidad de servidores externos.",
    tecnology: "JS, Html, CSS",
    github: "https://github.com/JuanCGomezS/ChatGPT",
    githubIcon: github,
    website: "https://juancgomezs.github.io/ChatGPT",
    websiteIcon: web,
  },
  {
    iconUrl:
      "https://docsdeveloper.s3.amazonaws.com/Proyectos/project-angular-net.png",
    theme: "btn-back-green",
    name: "Sales Management",
    description:
      "Esta Aplicación Web se creó para llevar control sobre los productos y ventas en una Tienda. Uno de sus usos es saber con certeza las unidades de un productos y el total de ventas realizadas en diferentes rangos de fechas.",
    tecnology:
      ".NET Core 6, Angular 16, SQL Server, Bootstrap y Angular Material",
    github: "https://github.com/JuanCGomezS/technical-test-net",
    githubIcon: github,
  },
  {
    iconUrl:
      "https://docsdeveloper.s3.amazonaws.com/Proyectos/project-vs-dark.png",
    theme: "btn-back-green",
    name: "Extensión Visual Studio Code",
    description:
      "Este proyecto es un tema personalizado para Visual Studio Code. Se ha creado desde cero y se ha diseñado para que resulte agradable a la vista y fácil de usar.",
    tecnology:
      "yo code - vsce (to create the extension), Azure - VS Marketplace (to publish the extension)",
    github: "https://github.com/JuanCGomezS/extension-vs",
    githubIcon: github,
    download:
      "https://marketplace.visualstudio.com/items?itemName=JCcolors.jc-extension",
    downloadIcon: download,
  },
  {
    iconUrl:
      "https://docsdeveloper.s3.amazonaws.com/Proyectos/MediaRecorder.png",
    theme: "btn-back-blue",
    name: "Capturador de pantalla",
    description:
      "En este proyecto he realizado un capturador de pantalla básico y gratuito.",
    tecnology: "JS",
    github: "https://github.com/JuanCGomezS/MediaRecorder",
    githubIcon: github,
    website: "https://juancgomezs.github.io/MediaRecorder/",
    websiteIcon: web,
  },
  {
    iconUrl:
      "https://docsdeveloper.s3.amazonaws.com/Proyectos/project-portfolio-dark.png",
    theme: "btn-back-blue",
    name: "Portafolio Profesional (Astro)",
    description:
      "Este portafolio desarrollado con Astro, es un lugar donde puedes saber más sobre mí, mi trabajo y mis habilidades como desarrollador.",
    tecnology: "Astro, React y tailwind",
    github: "https://github.com/JuanCGomezS/juancgomezs.github.io",
    githubIcon: github,
    website: "https://juancgomezs.github.io/",
    websiteIcon: web,
  },
];
