export interface ContactInfo {
  name: string;
  title: string;
  summary: string;
  phone: string;
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
}

export interface Project {
  title:string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
}

export interface Skills {
  [key: string]: string[];
}