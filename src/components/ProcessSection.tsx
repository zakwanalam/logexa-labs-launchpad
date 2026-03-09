import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = ["Discovery", "Strategy", "Development", "Launch", "Scale"];

const ProcessSection = () => {
  return (
    <section id="process" className="py-28 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Development Process</h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step} delay={i * 0.12} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-14 h-14 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.15, boxShadow: "0 0 30px hsl(73 92% 48% / 0.4)" }}
                  animate={{ boxShadow: ["0 0 15px hsl(73 92% 48% / 0.15)", "0 0 25px hsl(73 92% 48% / 0.3)", "0 0 15px hsl(73 92% 48% / 0.15)"] }}
                  transition={{ boxShadow: { duration: 3, repeat: Infinity, delay: i * 0.5 }, scale: { duration: 0.2 } }}
                >
                  <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                </motion.div>
                <span className="text-sm font-medium text-foreground">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block w-16 lg:w-24 h-px mx-4 mt-[-20px]"
                  style={{ background: "linear-gradient(to right, hsl(73 92% 48% / 0.4), hsl(73 92% 48% / 0.1))" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
