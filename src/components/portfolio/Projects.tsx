import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Learn and Grow"
          description="With Built In Parental Controls And Monitoring"
        />

        <div className="mt-20 relative px-4">
          {/* Curved Line */}
          <svg
            className="absolute top-10 left-0 w-full h-40 text-black/5 dark:text-white/5 pointer-events-none hidden md:block"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-50 100 Q 720 -50 1490 100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="grid gap-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {projects.map((p, i) => {
              const rotation = (i % 2 === 0 ? -2 : 2) * (1 + (i % 3) * 0.5);
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.21, 0.45, 0.32, 0.9],
                  }}
                  whileHover={{
                    y: -10,
                    rotate: rotation * 0.5,
                    scale: 1.02,
                    zIndex: 20,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-white/80 dark:bg-white/[0.03] backdrop-blur-md p-4 pb-8 rounded-xl shadow-xl shadow-black/[0.04] dark:shadow-black/40 border-[1px] border-black/[0.05] dark:border-white/10 transition-all duration-500 hover:shadow-primary/20 hover:bg-white/100 dark:hover:bg-white/[0.06]"
                >
                  {/* The Hanging Clip */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-4 h-10 bg-[#00D26A] rounded-sm flex items-start justify-center pt-1.5 z-10 shadow-sm transition-transform group-hover:scale-110">
                    <div className="w-1.5 h-1.5 bg-white dark:bg-background rounded-full shadow-inner" />
                  </div>

                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted dark:bg-muted/50">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                        <Github className="w-8 h-8 text-muted-foreground/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors" />

                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-1">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-muted-foreground leading-relaxed line-clamp-2 font-medium">
                      {p.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-gray-50 dark:bg-muted hover:bg-gray-100 dark:hover:bg-muted/80 text-gray-600 dark:text-muted-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-gray-50 dark:bg-muted hover:bg-gray-100 dark:hover:bg-muted/80 text-gray-600 dark:text-muted-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {p.tech.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-muted text-gray-600 dark:text-muted-foreground uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
