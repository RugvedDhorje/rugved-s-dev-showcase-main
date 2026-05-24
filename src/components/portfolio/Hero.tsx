import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBlobs } from "./AnimatedBlobs";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen flex items-center pt-28 pb-20"
    >
      <AnimatedBlobs />

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for Software Developer roles
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I'm <span className="gradient-text">Rugved Dhorje</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg sm:text-xl font-medium text-foreground/80"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Building scalable SaaS platforms and interactive web experiences
            with React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-elegant"
            >
              <a href="#projects" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
