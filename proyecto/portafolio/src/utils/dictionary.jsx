export const content = {
  EN: {
    header: {
      cvButton: "Download resumé"
    },
    navigation: {
      aboutMe: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      ideals: "Ideals",
      contact: "Contact"
    },
    banner: {
      titleOne: "Hi, I'm",
      titleTwo: "web developer",
      subtitleOne: "Lover of",
      subtitleTwo: "programming, animations and motorcycles",
      aboutMe: "Enthusiastic about creating animations using technologies such as CSS and GSAP, in addition to possessing strong skills in building responsive websites, applying UI/UX best practices to ensure usability and accessibility."
    },
    projects: [
      {
        gallery: ["4tw-1", "4tw-2", "4tw-3", "4tw-4", "4tw-5"],
        title: "4thewords.com",
        subtitle: "Reboot CR",
        description: "Commercial web application that combines writing and gamification to motivate writers to be more productive. This is an online game designed to make writing more fun and challenging",
        technologies: [
          { name: "Vue", logo: "vue" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Python", logo: "python" },
          { name: "kubernetes", logo: "kubernets" }
        ],
        links: [
          {
            text: "Visit the site",
            icon: "fas fa-external-link-alt",
            url: "https://4thewords.com"
          }
        ]
      },
      {
        gallery: ["lts-1", "lts-2", "lts-3", "lts-4", "lts-5"],
        title: "Latino Transit Solutions",
        subtitle: "University project",
        description: "Package shipment management platform where you can register transports, routes, route approval, send the package with a transport associated with a route and track the package",
        technologies: [
          { name: "React", logo: "react" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Nodejs", logo: "nodejs" },
          { name: "TypeScript", logo: "typescript" }
        ],
        links: [
          {
            text: "Visit Github",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/LatinoTransitSolutions"
          }
        ]
      },
      {
        gallery: ["dsv-1", "dsv-2", "dsv-3", "dsv-4", "dsv-5"],
        title: "Design System for Vue",
        subtitle: "Personal project",
        description: "Component library dedicated to the Vue framework. This library ranges from components for forms such as buttons, inputs, dropdowns, to more advanced components such as charts, image uploader, calendar",
        technologies: [
          { name: "Vue", logo: "vue" },
          { name: "JavaScript", logo: "javascript" },
          { name: "CSS", logo: "css" },
          { name: "GSAP", logo: "gsap" }
        ],
        links: [
          {
            text: "Visit Github",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/vue-framework"
          }
        ]
      }
    ],
    skills: {
      title: "Skills",
      subtitle: "Some technologies and tools that I master as a frontend developer and a little bit of backend",
      indication: "Grab and swipe left"
    },
    ideals: {
      title: "Ideals",
      content: [
        {
          title: "Mission",
          text: <p className="text-balance">Contribute my knowledge and skills to contribute to the growth of the company, so that the company can leave big footprints with small steps that my person can take with the contribution to projects, improvements and maintenance of its products.</p>
        },
        {
          title: "Vision",
          text: <p className="text-balance">Achieve position in one of the main technology companies in the world, where I can demonstrate my skills in web development. I want to excel and continue learning, with the purpose of advancing within the company and becoming an outstanding person.</p>
        },
        {
          title: "Values",
          text: (
            <p className="text-balance">
              I stand out for my <span className="text-primary300 font-bold">solidarity</span> in helping others with programming problems, and my <span className="text-primary300 font-bold">respect</span> for the ideas of my colleagues. I practice <span className="text-primary300 font-bold">honesty</span> while always maintaining ethics in my work, and I express my <span className="text-primary300 font-bold">gratitude</span> by appreciating the learning opportunities I receive.
            </p>
          )
        }
      ]
    },
    experience: {
      title: "Experience",
      content: [
        { time: "Jan 2021 - Present", title: "Fullstack web developer", subtitle: "Reboot CR - 4thewords.com", text: "Software development company, owner of the web application called 4thewords, where my responsibilities include maintaining the application to resolve technical debt, creating new features from widgets to full screens, fixing bugs in both old and new features, and more. My duties span from frontend to backend, with some involvement in DevOps." },
        { time: "Sep 2018 - Dec 2018", title: "Fullstack web developer", subtitle: "Cubik - LimOn", text: "Fictitious company created for project 1 course, which designed and developed a web application for hotel and tourist site registration, where clients could make reservations to these places. A requirements session was conducted, which had to be converted into a formal document with all use cases and other details, thus recreating a very realistic work environment." }
      ]
    },
    education: {
      title: "Education",
      content: [
        { time: "Jan 2021 - Present", title: "Bachelor’s degree in software engineering", subtitle: "Cenfotec university" },
        { time: "Jun 2024 - Present", title: "Intensive english course ", subtitle: "Fundatec - TEC" },
        { time: "May 2018 - Oct 2019", title: "Degree in software engineering", subtitle: "Cenfotec university" }
      ]
    },
    contact: {
      title: "Contact me",
      subtitle: "Feel free to contact me by submitting the form below and I will get back to you as soon as possible",
      email: "Email",
      subject: "Subject",
      message: "Message",
      button: "Submit"
    },
    footer: {
      slogan: "Clear vision, clear coding"
    }
  },
  ES: {
    header: {
      cvButton: "Descargar CV"
    },
    navigation: {
      aboutMe: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      ideals: "Ideales",
      contact: "Contacto"
    },
    banner: {
      titleOne: "Hola, soy",
      titleTwo: "desarrollador web",
      subtitleOne: "Amante de",
      subtitleTwo: "la programación, animaciones y las motocicletas",
      aboutMe: "Apasionado por la creación de animaciones utilizando tecnologías como CSS y GSAP, además de contar con fuertes habilidades en la construcción de sitios web responsivos, aplicando buenas prácticas de UI/UX para garantizar la usabilidad y la accesibilidad."
    },
    projects: [
      {
        gallery: ["4tw-1", "4tw-2", "4tw-3", "4tw-4", "4tw-5"],
        title: "4thewords.com",
        subtitle: "Reboot CR",
        description: "Aplicación comercial en la web que combina la escritura y gamificación para motivar a los escritores a ser más productivos. Se trata de un juego en línea diseñado para hacer que escribir sea más divertido y desafiante",
        technologies: [
          { name: "Vue", logo: "vue" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Python", logo: "python" },
          { name: "kubernetes", logo: "kubernets" }
        ],
        links: [
          {
            text: "Visitar el sitio",
            icon: "fas fa-external-link-alt",
            url: "https://4thewords.com"
          }
        ]
      },
      {
        gallery: ["lts-1", "lts-2", "lts-3", "lts-4", "lts-5"],
        title: "Latino Transit Solutions",
        subtitle: "Proyecto universitario",
        description: "Plataforma de gestión de envíos de paquetes donde se pueden hacer registro de los transportes, rutas, aprobación de rutas, envío del paquete con un transporte asociado a una ruta y rastreo del paquete",
        technologies: [
          { name: "React", logo: "react" },
          { name: "Tailwind", logo: "tailwind" },
          { name: "Nodejs", logo: "nodejs" },
          { name: "TypeScript", logo: "typescript" }
        ],
        links: [
          {
            text: "Visitar Github",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/LatinoTransitSolutions"
          }
        ]
      },
      {
        gallery: ["dsv-1", "dsv-2", "dsv-3", "dsv-4", "dsv-5"],
        title: "Design System para Vue",
        subtitle: "Proyecto personal",
        description: "Librería de componentes dedicado al framework de Vue. Esta librería abarca desde componentes para formularios como botones, inputs, dropdowns, hasta componentes más avanzados como charts, image uploader, calendar",
        technologies: [
          { name: "Vue", logo: "vue" },
          { name: "JavaScript", logo: "javascript" },
          { name: "CSS", logo: "css" },
          { name: "GSAP", logo: "gsap" }
        ],
        links: [
          {
            text: "Visitar Github",
            icon: "fab fa-github",
            url: "https://github.com/haroldcdb/vue-framework"
          }
        ]
      }
    ],
    skills: {
      title: "Habilidades",
      subtitle: "Algunas tecnologías y herramientas que domino como desarrollador frontend y un poco de backend",
      indication: "Clic y desliza a la izquierda"
    },
    ideals: {
      title: "Ideales",
      content: [
        {
          title: "Misión",
          text: <p className="text-balance">Aportar mis conocimientos y habilidades para contribuir con el crecimiento de la empresa, de manera la empresa logre dejar grandes huellas con pequeños pasos que mi persona pueda dar con el aporte en proyectos, mejoras y mantenimiento de sus productos.</p>
        },
        {
          title: "Visión",
          text: <p className="text-balance">Lograr posicionarme en una de las principales empresas de tecnología del mundo, donde pueda demostrar mis habilidades en desarrollo web. Deseo sobresalir y seguir aprendiendo, con el propósito de avanzar dentro de la empresa y llegar a ser una persona destacada.</p>
        },
        {
          title: "Valores",
          text: (
            <p className="text-balance">
              Me destaco por mi <span className="text-primary300 font-bold">solidaridad</span> al ayudar a otros con problemas de programación, y mi <span className="text-primary300 font-bold">respeto</span> hacia las ideas de mis colegas. Practico la <span className="text-primary300 font-bold">honestidad</span> manteniendo siempre la ética en mi trabajo, y expreso mi <span className="text-primary300 font-bold">gratitud</span> apreciando las oportunidades de aprendizaje que recibo.
            </p>
          )
        }
      ]
    },
    experience: {
      title: "Experiencia",
      content: [
        { time: "Ene 2021 - Actualidad", title: "Desarrollador web fullstack", subtitle: "Reboot CR - 4thewords.com", text: "Empresa de desarrollo de software, dueña de la aplicación web llamada 4thewords, donde mis funciones son: dar mantenimiento a la aplicación para resolver deuda técnica, creación de nuevas funcionalidades desde widgets hasta pantallas completas, reparación de bugs de antiguas y nuevas funcionalidades que se crearon y más. Mis funciones abarcan desde el frontend hasta el backend, y un poco de DevOps." },
        { time: "Sep 2018 - Dic 2018", title: "Desarrollador web fullstack", subtitle: "Cubik - LimOn", text: "Empresa ficticia creada para el curso de proyecto 1, la cual diseñó y desarrolló una aplicación web de registro de hoteles y lugares turísticos, donde clientes podían hacer sus reservas a dichos lugares. Se recibió una sesión de requerimientos, los cuales debieron pasarse a un documento formal con todos sus casos de uso y demás detalles, recreando así un ambiente laboral bastante real." }
      ]
    },
    education: {
      title: "Educación",
      content: [
        { time: "Ene 2021 - Actualidad", title: "Bachillerato en ingeniería del software", subtitle: "Universidad Cenfotec" },
        { time: "Jun 2024 - Actualidad", title: "Curso de inglés intensivo", subtitle: "Fundatec - TEC" },
        { time: "May 2018 - Oct 2019", title: "Técnico en ingeniería del software", subtitle: "Universidad Cenfotec" }
      ]
    },
    contact: {
      title: "Contáctame",
      subtitle: "No dude en ponerse en contacto conmigo enviando el formulario a continuación y me comunicaré con usted lo antes posible",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      button: "Enviar"
    },
    footer: {
      slogan: "Visión clara, código claro"
    }
  }
}
