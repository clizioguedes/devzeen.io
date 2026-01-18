import { Project, Experience, Skill, SocialLink, Client } from "./types";

export const siteConfig = {
  url: "https://devzeen.io",
  author: {
    email: "clizioguedes@devzeen.io",
    avatar: "https://avatars.githubusercontent.com/u/8258057?s=400&u=5aa24d91db3997bc4ca0cf9f2ed2cd26930984b9&v=4",
  },
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/clizioguedes",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/clizioguedes/",
    icon: "linkedin",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Freelancer / Projetos Próprios",
    position: "Desenvolvedor Full Stack",
    period: "2021 - Presente",
    description:
      "Desenvolvimento de sistemas completos para clientes como GRL Ogtrans, Encontro Pronta Entrega, Câmara Municipal de Cerro Corá e Jero Confecções. Especializado em soluções web escaláveis com React, Next.js e Node.js.",
    current: true,
  },
  {
    id: "2",
    company: "Projetos de Impacto",
    position: "Full Stack Developer",
    period: "2020 - 2023",
    description:
      "Criação de aplicações inovadoras incluindo sistemas administrativos para indústria têxtil, apps de gestão esportiva e plataformas de storage corporativo. Foco em performance, UX e arquitetura robusta.",
    current: false,
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "SISFACO",
    description: "Sistema de Administração para fábricas de confecções.",
    longDescription:
      "Produto SaaS completo de gestão industrial desenvolvido para automatizar e otimizar processos de fábricas de confecção. Inclui controle de produção, estoque, vendas, financeiro e relatórios gerenciais. Arquitetura escalável com Angular e Firebase.",
    technologies: ["Angular", "Firebase", "TypeScript"],
    category: ["Angular", "Firebase"],
    githubUrl: "https://github.com/clizioguedes",
    featured: true,
    borderColor: "border-t-red-500",
  },
  {
    id: "2",
    title: "Parciais FC",
    description: "App para escalação e acompanhamento de parciais e ligas do Cartola FC.",
    longDescription:
      "Aplicação mobile nativa para fãs do Cartola FC. Produto independente que permite criar escalações estratégicas, acompanhar parciais em tempo real, comparar desempenho com outros cartoleiros e receber notificações de valorização. Interface intuitiva e responsiva com React Native.",
    technologies: ["React Native", "TypeScript"],
    category: ["React Native", "Mobile"],
    githubUrl: "https://github.com/clizioguedes",
    featured: true,
    borderColor: "border-t-green-500",
  },
  {
    id: "3",
    title: "My Drive",
    description: "Sistema de storage voltado para empresas.",
    longDescription:
      "Plataforma de armazenamento em nuvem corporativa desenvolvida como produto próprio. Foco em segurança e colaboração com recursos de compartilhamento de arquivos com permissões granulares, versionamento, busca avançada, integração com ferramentas de produtividade e backup automático.",
    technologies: ["Next.js", "TypeScript", "Node.js", "AWS S3", "PostgreSQL", "Tailwind"],
    category: ["Next.js", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/clizioguedes",
    featured: true,
    borderColor: "border-t-blue-500",
  },
];

export const clients: Client[] = [
  {
    id: "1",
    name: "GRLOG",
    logo: "https://www.grlogtrans.com.br/img/logo_png_v2.png",
    website: "https://www.grlogtrans.com.br",
    description: "Empresa de logística e transportes",
  },
  {
    id: "2",
    name: "Encontro Pronta Entrega",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptQUs9NLONgkUSSEJ2TPAk4ARtTMVZ_Jj5Q&s",
    description: "Revenda de roupas e calçados no atacado",
  },
  {
    id: "3",
    name: "Grupo 4R",
    logo: "/logos/jero-confeccoes.jpeg",
    description: "Fábrica de confecções e vestuário",
  },
  {
    id: "4",
    name: "Câmara Municipal de Cerro Corá",
    logo: "https://storage.googleapis.com/t-gov-sistema-multisites.firebasestorage.app/cerrocora.rn.leg.br%2Fconfig%2Flogo-1767708345817-logo.png",
    description: "Portal institucional governamental",
  },
];

export const navLinks = [
  { href: "hero" },
  { href: "projects" },
  { href: "about" },
  { href: "clients" },
  { href: "contact" },
];
