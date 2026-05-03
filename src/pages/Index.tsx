import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorSpotlight } from "@/components/portfolio/CursorSpotlight";
import { AnimatedBlobs } from "@/components/portfolio/AnimatedBlobs";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden md:cursor-none transition-colors duration-500">
        <AnimatedBlobs variant="fixed" />
        <CursorSpotlight />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
