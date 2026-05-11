const logotext = "M";

const meta = {
  title: "Marcelo Antonietto",
  description:
    "I’m Marcelo Antonietto — Senior Product Designer & UX Engineer based in São Paulo, Brazil",
};

const introdata = {
  title: "Hi, I’m Marcelo Antonietto Senior Product Designer & UX Engineer based in São Paulo",
  animated: {
    first: "Senior Product Designer & UX Engineer based in São Paulo, Brazil",
   
  },
  description:
    "From research to real product — not just screens, \nbut working solutions through vibe coding",
  your_img_url: require("./assets/images/me.png"),
};

const dataabout = {
  title: {
    en: "Overview",
    pt: "Visão geral",
  },
  aboutme: {
    en: "Senior Product Designer and UX Engineer focused on building and scaling digital products across mobile and web — from problem definition and discovery to interface systems and delivery.\n\nI work at the intersection of product, design, and engineering, combining strategic thinking with hands-on execution to structure complex flows, align stakeholders, and turn ideas into scalable experiences.\n\nMy workflow integrates AI-assisted exploration and vibe coding to prototype closer to production, accelerate iteration cycles, and reduce the gap between design and implementation.\n\nI’m particularly interested in systems thinking, product strategy, and designing experiences that balance user needs, business goals, and technical constraints.",
    pt: "Senior Product Designer e UX Engineer focado em construir e escalar produtos digitais para mobile e web — da definição do problema e discovery até sistemas de interface e entrega.\n\nAtuo na interseção entre produto, design e engenharia, combinando pensamento estratégico com execução prática para estruturar fluxos complexos, alinhar stakeholders e transformar ideias em experiências escaláveis.\n\nMeu workflow integra exploração assistida por IA e vibe coding para prototipar mais próximo da produção, acelerar ciclos de iteração e reduzir a distância entre design e implementação.\n\nTenho grande interesse por systems thinking, estratégia de produto e criação de experiências que equilibram necessidades do usuário, objetivos de negócio e restrições técnicas.",
  },
};

const worktimeline = [
  {
    jobtitle: "Grupo SC",
    where: {
      en: "Staff Product Designer",
      pt: "Staff Product Designer",
    },
    date: {
      en: "10/2025 - 05/2026",
      pt: "10/2025 - 05/2026",
    },
  },
  {
    jobtitle: "Networkme",
    where: {
      en: "Global Senior Product Designer",
      pt: "Global Senior Product Designer",
    },
    date: {
      en: "08/2025 - 12/2025",
      pt: "08/2025 - 12/2025",
    },
  },
  {
    jobtitle: "Motorola Mobility",
    where: {
      en: "Global Senior Product Designer",
      pt: "Global Senior Product Designer",
    },
    date: {
      en: "06/2022 - 07/2025",
      pt: "06/2022 - 07/2025",
    },
  },
];

const skills = [
  {
    name: {
      en: "Product Thinking",
      pt: "Product Thinking",
    },
    value: 95,
  },
  {
    name: {
      en: "UX Research & Discovery",
      pt: "UX Research & Discovery",
    },
    value: 95,
  },
  {
    name: {
      en: "Interaction Design",
      pt: "Interaction Design",
    },
    value: 95,
  },
  {
    name: {
      en: "UI Design & Craft",
      pt: "UI Design & Craft",
    },
    value: 95,
  },
  {
    name: {
      en: "Prototyping",
      pt: "Prototipação",
    },
    value: 95,
  },
  {
    name: {
      en: "Design Systems",
      pt: "Design Systems",
    },
    value: 95,
  },
  {
    name: {
      en: "Usability Testing",
      pt: "Testes de Usabilidade",
    },
    value: 95,
  },
  {
    name: {
      en: "AI Workflows & Vibe Coding",
      pt: "Fluxos com IA & Vibe Coding",
    },
    value: 95,
  },
  {
    name: {
      en: "Product Metrics",
      pt: "Métricas de Produto",
    },
    value: 90,
  },
  {
    name: {
      en: "HTML / CSS / JS",
      pt: "HTML / CSS / JS",
    },
    value: 75,
  },
  {
    name: {
      en: "React/Front-End Collaboration",
      pt: "React/Colaboração Front-End",
    },
    value: 75,
  },
];

const services = [
  {
    title: "Rocketseat Development Academy (2025-2026)",
    description: {
      en: "Full-Stack developer journey",
      pt: "Formação em desenvolvimento Full Stack",
    },
  },
  {
    title: "ESPM (2022-2024)",
    description: {
      en: "Master's degree, Strategic UX Design Management",
      pt: "Pós-graduação em Gestão Estratégica de UX Design",
    },
  },
  {
    title: "FIAM-FAAM (2011-2016)",
    description: {
      en: "Bachelor's degree, Industrial and Product Design",
      pt: "Bacharelado em Design Industrial e de Produto",
    },
  },
];

const dataportfolio = [
  {
    img: "https://cdn-images-1.medium.com/v2/resize:fit:2600/1*qbDle128fS2VI5EeXRrBrg.avif",
    description: {
      en: "iCamp — When the problem isn't discovery, it's trust.",
      pt: " iCamp — Quando o problema não é encontrar, é confiar.",
    },
    link: {
      en: "/productdesign-development/case-studies/Icamp - Case study (ENG).pdf",
      pt: "/productdesign-development/case-studies/Icamp - Case study (PT).pdf",
    },
  },

  {
    img: "https://cdn-images-1.medium.com/max/1000/1*_PdzaYVhnHb-SOPmZy0O5w.png",
    description: {
      en: "Nintendo Switch — The challenge wasn’t helping. It was preserving discovery.",
      pt: "Nintendo Switch — O desafio não era ajudar. Era preservar a descoberta.",
    },
    link: {
      en: "/productdesign-development/case-studies/Nintendo Switch App - Case study (ENG).pdf",
      pt: "/productdesign-development/case-studies/Nintendo Switch App - Case study (PT).pdf",
    },
  },

  {
    img: "https://media.licdn.com/dms/image/v2/D4D05AQEupd1IGyeliA/videocover-high/videocover-high/0/1726164023605?e=2147483647&v=beta&t=pBcxTfg1wGhl2Kv0LInRu_-zAGSqGlmYqmK8WoR1IFo",
    description: {
      en: "Farmácias App — Transforming the purchase journey into conversion.",
      pt: "Farmácias App — Transformando a jornada de compra em conversão.",
    },
    link: {
      en: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
      pt: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
    },
  },

  {
    img: "https://cdn-images-1.medium.com/max/1600/1*JHbrt9U3FrhqwEosXy706w.png",
    description: {
      en: "Redesigning Conecta: leading the web and mobile UX for Networkme’s new experience.",
      pt: "Redesigning Conecta: liderando a UX web e mobile da nova experiência da Networkme.",
    },
    link: {
      en: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
      pt: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
    },
  },

  {
    img: "https://img.utdstc.com/icon/562/e6f/562e6f438044485b5aa7c7731d15360dd0d67a2553f76d30f8395122d653f334:200",
    description: {
      en: "Moto Secure through the lens of design: evolving from version 4.0 to 5.0.",
      pt: "Moto Secure sob a ótica do design: evolução da versão 4.0 para 5.0.",
    },
link: {
  en: "/productdesign-development/case-studies/case.pdf",
  pt: "/productdesign-development/case-studies/case.pdf"
}
  },

  {
    img: "https://cdn-images-1.medium.com/max/1600/1*szuhGda6HWmdv9zSeQ6C9Q.png",
    description: {
      en: "Building Hello UI: creating, managing, and scaling Motorola’s design system.",
      pt: "Building Hello UI: criação, gestão e escala do design system da Motorola.",
    },
    link: {
      en: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
      pt: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
    },
  },

  {
    img: "https://p1-ofp.static.pub//fes/cms/2023/09/28/rndhahba7lfyygv8djkjnuqcqzpq25162673.png",
    description: {
      en: "Motorola ThinkPhone — Red Key Experience: a UX case study of a hardware-driven feature.",
      pt: "Motorola ThinkPhone — Red Key Experience: estudo de UX de uma funcionalidade orientada por hardware.",
    },
    link: {
      en: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
      pt: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
    },
  },

  {
    img: "https://cdn-images-1.medium.com/max/1600/1*Gw6fF25c9tPbpFb1GjRkMw.png",
    description: {
      en: "Bamunos — discovery: how I identified user needs to shape the platform.",
      pt: "Bamunos — discovery: como identifiquei necessidades dos usuários para orientar a plataforma.",
    },
    link: {
      en: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
      pt: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
    },
  },

  {
    img: "https://cdn-images-1.medium.com/max/800/1*Fk5z5TIEduymaZ3GDcUfEQ.jpeg",
    description: {
      en: "Singu App — heuristic evaluation: identifying usability issues to improve the experience.",
      pt: "Singu App — avaliação heurística: identificando problemas de usabilidade para evoluir a experiência.",
    },
    link: {
      en: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
      pt: "https://medium.com/@marceloaf.ux/protected-work-available-upon-request-a4f83f242d06",
    },
  },
  
];

const contactConfig = {
  YOUR_EMAIL: "marceloaf.ux@gmail.com",
  YOUR_FONE: "(+55) 11 99696-2160",
  YOUR_SERVICE_ID: "service_r6kzppk",
  YOUR_TEMPLATE_ID: "template_b3kvqzp",
  YOUR_USER_ID: "UNzRrf83UkENzW28c",
};

const socialprofils = {
  github: "https://github.com/marcelouxengineer",
  linkedin: "https://www.linkedin.com/in/marcelo-antonietto-4996ba38b/",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};