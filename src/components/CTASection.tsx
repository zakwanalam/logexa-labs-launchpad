import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-28 relative">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Let's Build Your Next{" "}
          <span className="text-primary neon-text-primary">Digital Product</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Ready to bring your vision to life? Let's talk about your project and explore how we can help.
        </p>
        <Button variant="hero" size="lg" className="text-base px-10 py-6">
          Start a Project <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
