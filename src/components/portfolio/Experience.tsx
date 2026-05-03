import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Journey"
          title="Career Path"
          description="A timeline of my professional growth and technical ownership."
        />

        <div className="mt-20 relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10"
                  />
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="relative group bg-white/40 dark:bg-white/[0.02] backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-white/20 dark:border-white/5 shadow-xl transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/[0.05] hover:shadow-2xl text-left">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center border border-primary/20 transition-transform group-hover:scale-110">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-primary/80">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 items-start group/bullet">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 flex-shrink-0 transition-transform group-hover/bullet:scale-125" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
