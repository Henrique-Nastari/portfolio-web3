// next.config.ts
// IMPORTANTE: output: 'export' é obrigatório para hospedar no IPFS via Fleek.
// Com isso, o Next.js gera HTML/CSS/JS estático puro na pasta /out.
// Sem servidor Node.js rodando — perfeito para IPFS.

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Gera arquivos estáticos em /out
  trailingSlash: true,     // /projetos → /projetos/index.html (compatível com IPFS)
  images: {
    unoptimized: true,     // Desabilita otimização server-side (sem servidor no IPFS)
  },
  // Headers de segurança (CSP, etc.) — aplicados pelo Cloudflare/Fleek no edge
  // Nota: headers() do Next.js não funcionam em static export.
  // Configure via _headers file ou Cloudflare Transform Rules.
};

export default nextConfig;
