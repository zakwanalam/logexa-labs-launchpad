import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg font-bold">
            <span className="text-primary">Logexa</span> Labs
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Logexa Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
