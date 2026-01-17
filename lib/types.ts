export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  category: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  borderColor?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}
