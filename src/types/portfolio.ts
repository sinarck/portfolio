export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  link?: string;
  date?: Date;
};

export type PortfolioData = {
  name: string;
  headline: string;
  summary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
  location?: string;
  email?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
};

