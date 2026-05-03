import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "React.js & Next.js",
  "SaaS applications",
  "Role-based dashboards",
  "Performance optimization",
  "TypeScript",
  "Design systems",
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Title and Metrics */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
              >
                Philosophy
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]"
              >
                Frontend that <span className="text-muted-foreground">scales</span> with the product.
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Experience", value: "1+" },
                { label: "SaaS Products", value: "5+" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-4xl font-bold tracking-tighter text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio and Tech */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative bg-white/40 dark:bg-white/[0.02] backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/20 dark:border-white/5 shadow-2xl shadow-black/[0.02] dark:shadow-black/20"
            >
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  I'm a frontend developer specialized in building scalable enterprise 
                  applications. I bridge the gap between complex backend logic and 
                  intuitive user interfaces, focusing on <span className="font-semibold text-primary">performance</span> and <span className="font-semibold text-primary">maintainability</span>.
                </p>
                <p className="text-base text-muted-foreground">
                  With a track record of owning end-to-end frontend for HR and 
                  analytics platforms, I thrive in environments that require 
                  pixel-perfect execution and clean, modular architecture.
                </p>
              </div>

              <div className="mt-12">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                  Core Competencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h, i) => (
                    <motion.span
                      key={h}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium text-primary/90 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
