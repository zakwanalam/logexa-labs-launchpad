import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/6 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-6 text-center pt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary tracking-wider uppercase opacity-0 animate-fade-up">
          Software Development Agency
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Engineering Powerful{" "}
          <span className="text-primary neon-text-primary">Digital Products</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Logexa Labs builds scalable software, AI-powered systems, and high-performance digital platforms for modern businesses.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Start a Project <ArrowRight size={18} />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            View Our Work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
