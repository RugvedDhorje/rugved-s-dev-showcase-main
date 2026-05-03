import { Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Rugved Dhorje. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contactLinks.email}`} aria-label="Email" className="hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={contactLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
