import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";
import {
  Code2,
  Server,
  Wrench,
  Layers,
  Zap,
  Globe,
  Github as GithubIcon,
  Figma as FigmaIcon,
  Terminal,
  Cpu,
  Layout,
  Database,
  Search,
  Command,
} from "lucide-react";

const getTechIcon = (name: string) => {
  const iconProps = { className: "w-4 h-4" };
  switch (name.toLowerCase()) {
    case "react.js":
    case "react":
      return <Cpu {...iconProps} />;
    case "next.js":
      return <Layers {...iconProps} />;
    case "typescript":
      return <Code2 {...iconProps} />;
    case "tailwind css":
    case "tailwind":
      return <Layout {...iconProps} />;
    case "redux":
      return <Zap {...iconProps} />;
    case "framer motion":
      return <Command {...iconProps} />;
    case "node.js":
      return <Server {...iconProps} />;
    case "express":
      return <Database {...iconProps} />;
    case "rest apis":
      return <Globe {...iconProps} />;
    case "git":
      return <Terminal {...iconProps} />;
    case "github":
      return <GithubIcon {...iconProps} />;
    case "postman":
      return <Search {...iconProps} />;
    case "vite":
      return <Zap {...iconProps} />;
    case "figma":
      return <FigmaIcon {...iconProps} />;
    default:
      return <Code2 {...iconProps} />;
  }
};

const AbstractPattern = ({ index }: { index: number }) => {
  const primaryColor = "hsl(var(--primary))";

  if (index === 0) {
    // Frontend
    return (
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-48 opacity-60 dark:opacity-50 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <path
          d="M0 200 L200 200 L200 0 L150 50 L150 200"
          fill="url(#grad-primary)"
          opacity="0.3"
        />
        <rect
          x="160"
          y="80"
          width="40"
          height="120"
          fill="url(#grad-primary)"
          opacity="0.4"
        />
        <line
          x1="0"
          y1="200"
          x2="200"
          y2="0"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <line
          x1="40"
          y1="200"
          x2="200"
          y2="40"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <path
          d="M180 120 L200 120 L200 200 L180 200 Z"
          fill="url(#grad-primary)"
        />
      </svg>
    );
  }
  if (index === 1) {
    // Backend
    return (
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 dark:opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <path
          d="M0 180 Q 100 100 200 180 L 200 200 L 0 200 Z"
          fill="hsl(var(--primary))"
          opacity="0.2"
        />
        <circle
          cx="150"
          cy="150"
          r="80"
          stroke="hsl(var(--primary))"
          fill="none"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <circle
          cx="150"
          cy="150"
          r="120"
          stroke="hsl(var(--primary))"
          fill="none"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <path
          d="M120 200 Q 160 120 200 160 L 200 200 Z"
          fill="hsl(var(--primary))"
          opacity="0.4"
        />
        <line
          x1="100"
          y1="200"
          x2="200"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.2"
        />
      </svg>
    );
  }
  return (
    // Tools
    <svg
      className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 dark:opacity-10 pointer-events-none"
      viewBox="0 0 200 200"
    >
      <circle
        cx="200"
        cy="200"
        r="120"
        stroke="hsl(var(--primary))"
        fill="none"
        strokeWidth="1"
        opacity="0.2"
      />
      <circle
        cx="200"
        cy="200"
        r="80"
        stroke="hsl(var(--primary))"
        fill="none"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="200"
        cy="200"
        r="40"
        stroke="hsl(var(--primary))"
        fill="none"
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="200"
        y1="200"
        x2="80"
        y2="80"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
      <path
        d="M160 200 A 40 40 0 0 1 200 160 L 200 200 Z"
        fill="hsl(var(--primary))"
        opacity="0.5"
      />
    </svg>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Toolkit"
          title="The tech I trust."
          description="A minimalist approach to high-performance development."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative h-[380px] bg-white/70 dark:bg-white/[0.03] backdrop-blur-md rounded-[2rem] p-8 overflow-hidden border border-black/[0.08] dark:border-white/10 shadow-xl shadow-black/[0.03] dark:shadow-black/40 transition-all duration-500 hover:shadow-primary/20 hover:bg-white/90 dark:hover:bg-white/[0.06]"
            >
              {/* Text Content */}
              <div className="relative z-20 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {group.description}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  {group.items.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-background/30 dark:bg-white/[0.03] border border-border/50 dark:border-white/5 hover:border-primary/30 transition-colors group/item"
                    >
                      <div className="text-muted-foreground group-hover/item:text-primary transition-colors">
                        {getTechIcon(s)}
                      </div>
                      <span className="text-[12px] font-medium text-gray-600 dark:text-gray-300">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abstract Pattern */}
              <AbstractPattern index={i} />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
