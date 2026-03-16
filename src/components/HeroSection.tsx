import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroBackground from "./HeroBackground";

const trustItems = [
  "Websites that convert",
  "AI automation that saves time",
  "Built for small businesses",
];

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
          Websites & AI Automation for Small Businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-6xl mx-auto"
        >
          Get More Leads With Better{" "}
          <span className="text-primary neon-text-primary">Websites & Automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Logexa Labs helps small businesses grow with conversion-focused websites, landing pages,
          and AI-powered automation systems that reduce manual work and turn more visitors into enquiries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => navigate("/booking")}>
            Book a Free Consultation <ArrowRight size={18} />
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            See Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground"
        >
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-full border border-border/60 bg-background/30 px-4 py-2 backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
