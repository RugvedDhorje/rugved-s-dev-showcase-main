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
      "Multi-tenant HR platform with role based dashboards, payroll, and attendance modules serving thousands of users.",
    tech: ["React.js", "TypeScript", "Tailwind"],
    image: "/HRMS.webp",
    // github: "#",
    // live: "#",
  },
  {
    title: "Expense Management System",
    description:
      "End-to-end expense reporting with approval workflows, analytics, and policy driven controls.",
    tech: ["React.js", "Typescript", "Tailwind"],
    image: "/expense management.webp",
    // github: "#",
    // live: "#",
  },
  {
    title: "Government Admin Analytics",
    description:
      "High-density analytics dashboard with charts, filters, and role-based access for govt. administrators.",
    tech: ["React.js", "Tailwindcss", "javascript"],
    image: "/governemnt dasgboard.webp",
    // github: "#",
    // live: "#",
  },
  {
    title: "Minimal India Marketing Site",
    description:
      "Performance-optimized marketing website with smooth animations and a polished, minimal aesthetic.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/minimal india.png",
    github: "#",
    live: "https://minimal-india-final.vercel.app/",
  },
  {
    title: "Recruitment Management System",
    description:
      "ATS for managing pipelines, interview scheduling, and collaborative hiring across teams.",
    tech: ["React.js", "TypeScript", "REST APIs"],
    image: "/recruitment management.webp",
    // github: "#",
    // live: "#",
  },
  {
    title: "Queue Management System",
    description:
      "Real-time token and queue dashboard for service centers, optimized for low-latency updates.",
    tech: ["React.js", "Typescript", "Tailwind"],
    image: "/Queue.webp",
    // github: "#",
    // live: "#",
  },
  {
    title: "Asset Management",
    description:
      "SaaS platform for tracking assets, subscriptions, and equipment lifecycle with role-based dashboards and operational workflows.",
    tech: ["React.js", "TypeScript", "Tailwind"],
    image: "/asset-management.webp",
  },
  {
    title: "End-to-End Lead Management & Billing",
    description:
      "SaaS platform for lead capture, pipeline tracking, and conversion—with integrated billing, invoicing, and payment workflows across the full sales lifecycle.",
    tech: ["React.js", "TypeScript", "Tailwind"],
    image: "/billing-software.webp",
  },
  {
    title: "Vendor Management Platform",
    description:
      "Multi-role vendor marketplace for discovering, booking, and managing vendors and services for expos and business events.",
    tech: ["React.js", "Node.js", "MongoDB"],
    image: "/vendor-platform.webp",
    github:"https://github.com/RugvedDhorje/MyVendex-Phase2-main",
    live:"https://my-vendex-phase2-main.vercel.app/"
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
    company: "Imperative Business Ventures LTD",
    period: "Sept 2025 — Present",
    bullets: [
      "Led frontend development and owned UI architecture for 4+ SaaS enterprise platforms including HRMS, Expense Management, Recruitment, and Queue Management systems.",
      "Developed role-based dashboards and workflow systems with reporting and analytics modules using React.js and Next.js.",
      "Integrated REST APIs and built scalable, component-based user interfaces ensuring seamless data flow across applications.",
      "Implemented responsive web design with cross-browser compatibility and optimized performance using modern frontend techniques.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "MyVendex",
    period: "June 2024 — June 2025",
    bullets: [
      "Developed a vendor management platform using the MERN stack, implementing role-based authentication and workflow systems for admin, vendor, and user roles.",
      "Built responsive UI components using TailwindCSS and Framer Motion, and integrated REST APIs to enable seamless data handling and user interactions.",
    ],
  },
];

export const contactLinks = {
  email: "rdhorje67@gmail.com",
  linkedin: "https://www.linkedin.com/in/rugveddhorje/",
  github: "https://github.com/RugvedDhorje",
};
