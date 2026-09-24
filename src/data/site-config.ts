// =============================================================
// site-config.ts — Configuração global do portfólio
// Edite este arquivo com suas informações pessoais!
// =============================================================

export const siteConfig = {
  // --- Identidade ---
  name: "Henrique",
  fullName: "Henrique [Sobrenome]",
  title: "InfoSec Engineer · Fullstack Developer · Data Scientist",
  bio: "Especialista multidisciplinar com foco em segurança da informação, desenvolvimento fullstack e ciência de dados. Apaixonado por sistemas seguros, código limpo e dados que geram valor.",
  location: "Brasil",
  email: "seu@email.com",
  pgpKeyId: "0xSEU_KEY_ID",             // Diferencial InfoSec
  pgpKeyUrl: "https://keybase.io/henrique",

  // --- URLs ---
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://seu-dominio.vercel.app",
  ogImage: "/og-image.png",

  // --- Links sociais ---
  links: {
    github:   "https://github.com/henrique",
    linkedin: "https://linkedin.com/in/henrique",
    twitter:  "https://twitter.com/henrique",
    keybase:  "https://keybase.io/henrique",
  },
} as const;

export type SiteConfig = typeof siteConfig;
