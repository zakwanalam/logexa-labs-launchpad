import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary tracking-wider uppercase"
        >
          Software Development Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mx-auto"
        >
          Engineering Powerful{" "}
          <span className="text-primary neon-text-primary">Digital Products</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Logexa Labs builds scalable software, AI-powered systems, and high-performance digital platforms for modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Start a Project <ArrowRight size={18} />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            View Our Work
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
