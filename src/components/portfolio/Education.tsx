import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading 
          eyebrow="Academic" 
          title="Education" 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="group relative bg-white/40 dark:bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/20 dark:border-white/5 shadow-2xl shadow-black/[0.02] dark:shadow-black/20 transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/[0.06]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <GraduationCap className="h-7 w-7" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    Electronics & Telecommunication
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">
                    Pune Vidyarthi Griha’s College of Engineering, Pune
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground/80">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      SPPU University
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      CGPA: 8.66
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
