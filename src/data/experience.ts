// =============================================================
// experience.ts — Histórico de experiência profissional
// =============================================================

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;           // Ex: "Jan 2022 – Presente"
  location: string;
  type: "fulltime" | "freelance" | "internship" | "contract";
  description: string;
  highlights: string[];     // Conquistas/responsabilidades chave
  tech: string[];           // Stack utilizada
  category: "infosec" | "fullstack" | "datascience" | "mixed";
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Security Engineer Sênior",
    company: "Empresa Exemplo",
    companyUrl: "https://empresa.com",
    period: "Jan 2024 – Presente",
    location: "Remoto, Brasil",
    type: "fulltime",
    description: "Liderança de Red Team e arquitetura de segurança para produtos SaaS.",
    highlights: [
      "Reduzi superfície de ataque em 40% via hardening de infraestrutura",
      "Implementei pipeline automatizado de pentest (CI/CD Security)",
      "Treinei 15 desenvolvedores em práticas de Secure Coding",
    ],
    tech: ["Burp Suite", "Metasploit", "Python", "AWS", "Docker"],
    category: "infosec",
  },
  // Adicione mais experiências aqui...
];
