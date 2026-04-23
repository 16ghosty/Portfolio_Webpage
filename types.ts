export interface ContactInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  summary: string;
  isIntern?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  domain: 'ai' | 'data' | 'backend' | 'robotics' | 'mechanical';
  videoSrc?: string;
}

export interface Skills {
  [key: string]: string[];
}