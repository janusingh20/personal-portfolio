import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Reveal from "@/components/Reveal";

export const Hero = () => {
  // Typewriter setup
  const roles = [
    "Full-Stack Engineer",
    "AI/ML Developer",
    "Tech Enthusiast",
    "Mobile App Developer",
    "STEM Instructor",
    "Computer Science Student"
  ];

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <ParticlesBackground />

      <div className="container mx-auto px-4 text-center z-10 relative">
        <Reveal repeat={false} y={8}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hello, I'm Janu Singh</span>
            <span className="block text-xl md:text-2xl text-primary mt-2 h-8">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={100} repeat={false} y={10}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Building the future with AI/ML, full-stack development, and cloud technology.
            Turning complex challenges into intelligent, scalable solutions.
          </p>
        </Reveal>

        <Reveal delayMs={180} repeat={false} y={12}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-glow transition-smooth px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 hover:bg-primary/10 px-8 py-3 text-lg transition-smooth"
            >
              Get In Touch
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={240} repeat={false} y={12}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/janusingh20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-smooth group"
            >
              <Github className="h-6 w-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
            <a
              href="https://linkedin.com/in/janusingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-smooth group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
            <a
              href="mailto:janusingh831@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-smooth group"
            >
              <Mail className="h-6 w-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full hover:bg-primary/10"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};
