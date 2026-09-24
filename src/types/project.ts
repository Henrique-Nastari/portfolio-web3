// =============================================================
// project.ts — Tipos para projetos do portfólio
// =============================================================

export type ProjectCategory = "infosec" | "fullstack" | "datascience" | "web3";
export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  category: ProjectCategory;
  tags: string[];
  thumbnail?: string;
  github?: string;
  live?: string;
  featured: boolean;
  status: ProjectStatus;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  readingTime?: string;
}
