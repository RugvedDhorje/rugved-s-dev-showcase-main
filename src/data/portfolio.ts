import { Code2, Server, Wrench, type LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
  description: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    description:
      "Building performant, accessible, and beautiful user interfaces.",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description:
      "Designing robust, scalable, and secure server-side architectures.",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Optimizing developer workflows and ensuring code quality.",
    items: ["Git", "GitHub", "Postman", "Vite", "VsCode"],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "HRMS SaaS Platform",
    description:
      "Multi-tenant HR platform with role-based dashboards, payroll, and attendance modules serving thousands of users.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Redux"],
    image: "/HRMS.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Expense Management System",
    description:
      "End-to-end expense reporting with approval workflows, analytics, and policy-driven controls.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    image: "/expense management.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Recruitment Management System",
    description:
      "ATS for managing pipelines, interview scheduling, and collaborative hiring across teams.",
    tech: ["Next.js", "TypeScript", "REST APIs"],
    image: "/recruitment management.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Queue Management System",
    description:
      "Real-time token and queue dashboard for service centers, optimized for low-latency updates.",
    tech: ["React", "WebSockets", "Tailwind"],
    image: "/Queue.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Government Admin Analytics",
    description:
      "High-density analytics dashboard with charts, filters, and role-based access for govt. administrators.",
    tech: ["React", "Recharts", "Redux"],
    image: "/governemnt dasgboard.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Minimal India Marketing Site",
    description:
      "Performance-optimized marketing website with smooth animations and a polished, minimal aesthetic.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/minimal india.png",
    github: "#",
    live: "#",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "SaaS Product Team",
    period: "2023 — Present",
    bullets: [
      "Owned the frontend for a multi-tenant HRMS platform, shipping features end-to-end across React + Next.js.",
      "Designed reusable component systems and role-based dashboards used by 5+ enterprise modules.",
      "Improved bundle size and runtime performance by 40% through code-splitting and memoization.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Product & Consulting",
    period: "2022 — 2023",
    bullets: [
      "Built dashboards, marketing sites, and internal tools with React, Redux, and Tailwind.",
      "Collaborated closely with design and backend teams to ship pixel-perfect, accessible UIs.",
    ],
  },
];

export const contactLinks = {
  email: "rugved.dhorje@example.com",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
};
