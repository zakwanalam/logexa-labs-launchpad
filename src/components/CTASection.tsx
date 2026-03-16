import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[150px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Want to Know What’s
            <span className="text-primary neon-text-primary"> Hurting Your Conversions?</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Book a free consultation and we’ll review your current situation — whether that’s a website, product idea,
            funnel, workflow, or automation need — and show you the clearest next step.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm text-muted-foreground">
            <span className="px-4 py-2 rounded-full border border-border/60 bg-background/40">Best for small businesses</span>
            <span className="px-4 py-2 rounded-full border border-border/60 bg-background/40">Website + automation review</span>
            <span className="px-4 py-2 rounded-full border border-border/60 bg-background/40">Practical next steps</span>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Button variant="hero" size="lg" className="text-base px-10 py-6" onClick={() => navigate("/booking")}>
            Book Free Audit <ArrowRight size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
