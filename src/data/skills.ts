// =============================================================
// skills.ts — Skills organizadas por pilar
// Edite com suas tecnologias e níveis reais!
// =============================================================

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  level: SkillLevel;        // Para animação da barra
  percent: number;          // 0–100
  icon?: string;            // Simple Icons slug (ex: "python")
}

export interface Pillar {
  id: string;
  label: string;
  color: string;            // Tailwind color class (ex: "text-green-400")
  description: string;
  skills: Skill[];
}

export const skillPillars: Pillar[] = [
  {
    id: "infosec",
    label: "Segurança da Informação",
    color: "text-green-400",
    description: "Pentest, análise de vulnerabilidades, forense digital e defesa de redes.",
    skills: [
      { name: "Penetration Testing", level: "expert",       percent: 90 },
      { name: "Network Security",    level: "expert",       percent: 88 },
      { name: "OWASP / Web AppSec",  level: "advanced",     percent: 85 },
      { name: "Digital Forensics",   level: "advanced",     percent: 80 },
      { name: "CTF / Red Team",      level: "advanced",     percent: 78 },
      { name: "SIEM / Threat Intel", level: "intermediate", percent: 70 },
    ],
  },
  {
    id: "fullstack",
    label: "Desenvolvimento Fullstack",
    color: "text-cyan-400",
    description: "Do banco de dados à interface — APIs robustas e UIs modernas.",
    skills: [
      { name: "TypeScript / Node.js", level: "expert",      percent: 92 },
      { name: "React / Next.js",      level: "expert",      percent: 90 },
      { name: "PostgreSQL / Redis",   level: "advanced",    percent: 82 },
      { name: "Docker / Kubernetes",  level: "advanced",    percent: 78 },
      { name: "REST / GraphQL APIs",  level: "advanced",    percent: 85 },
      { name: "Web3 / Solidity",      level: "intermediate",percent: 65 },
    ],
  },
  {
    id: "datascience",
    label: "Ciência de Dados",
    color: "text-amber-400",
    description: "Machine Learning, análise estatística e visualização de dados.",
    skills: [
      { name: "Python / Pandas",      level: "expert",      percent: 90 },
      { name: "Machine Learning",     level: "advanced",    percent: 83 },
      { name: "Deep Learning / NLP",  level: "advanced",    percent: 78 },
      { name: "SQL / BigQuery",       level: "advanced",    percent: 82 },
      { name: "Data Visualization",   level: "advanced",    percent: 80 },
      { name: "MLOps / Pipelines",    level: "intermediate",percent: 68 },
    ],
  },
];
