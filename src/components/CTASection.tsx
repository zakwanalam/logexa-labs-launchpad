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

      <div className="container relative z-10 mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Your Next{" "}
            <span className="text-primary neon-text-primary">Digital Product</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Ready to bring your vision to life? Let's talk about your project and explore how we can help.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Button variant="hero" size="lg" className="text-base px-10 py-6" onClick={() => navigate("/booking")}>
            Start Your Project <ArrowRight size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
