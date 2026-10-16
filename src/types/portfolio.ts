export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  socialLinks: SocialLinks;
  resumeUrl: string;
  statusBadge?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  graduationYear: string;
  location: string;
  description: string;
  highlights?: string[];
}
