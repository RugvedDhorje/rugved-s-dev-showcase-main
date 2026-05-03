import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between rounded-full px-4 transition-all",
          scrolled ? "glass shadow-elegant py-2" : "py-3"
        )}
      >
        <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-accent text-primary-foreground shadow-glow">
            R
          </span>
          <span className="hidden sm:inline">Rugved Dhorje</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 relative">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              onMouseEnter={() => setHoveredLink(l.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              <span className="relative z-10">{l.label}</span>
              {hoveredLink === l.href && (
                <motion.div
                  layoutId="nav-pill"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full z-0"
                />
              )}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-gradient-accent text-primary-foreground hover:opacity-90"
          >
            <a href="#contact">Hire me</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="container md:hidden mt-2">
          <div className="glass rounded-2xl p-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm hover:bg-accent/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
};
