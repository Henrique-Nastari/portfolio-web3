// =============================================================
// certifications.ts — Certificações e badges profissionais
// =============================================================

export type CertCategory = "infosec" | "cloud" | "development" | "data" | "web3";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;             // "YYYY" ou "MM/YYYY"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;   // Link de verificação
  badgeImage?: string;      // /public/assets/certifications/cert.webp
  category: CertCategory;
}

export const certifications: Certification[] = [
  {
    id: "ceh",
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    category: "infosec",
    credentialUrl: "https://aspen.eccouncil.org/verify",
  },
  {
    id: "aws-saa",
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    category: "cloud",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  // Adicione suas certificações reais aqui...
];
