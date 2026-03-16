const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-bold">
              <span className="text-primary">Logexa</span> Labs
            </div>
            <p className="text-sm text-muted-foreground mt-2">Websites and AI automation for small businesses that want more leads and less chaos.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
            <a href="#automation" className="hover:text-foreground transition-colors">Automation</a>
            <a href="#packages" className="hover:text-foreground transition-colors">Packages</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#cta" className="text-primary hover:text-primary/80 transition-colors">Book a Free Consultation</a>
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
