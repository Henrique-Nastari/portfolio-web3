// =============================================================
// post.ts — Tipos para posts do blog
// =============================================================

export type PostCategory = "infosec" | "fullstack" | "datascience";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: PostCategory;
  tags: string[];
  readingTime?: string;
  published: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
}
