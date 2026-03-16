import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { title: "Consult", description: "We review your goals, offer, workflow, and current setup to identify the best next move." },
  { title: "Build", description: "We design the pages, systems, and automations your business actually needs." },
  { title: "Launch", description: "We deploy, test, and make sure the experience is ready to convert." },
  { title: "Optimize", description: "We refine the flow based on clarity, speed, and conversion opportunities." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-28 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">A Simple Process That Keeps Projects Moving</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No bloated process, no unnecessary complexity. Just clear steps from audit to launch so you know what happens next.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.12}>
              <motion.div
                className="glass-card p-8 h-full"
                whileHover={{ y: -6, boxShadow: "0 0 30px hsl(73 92% 48% / 0.12)" }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center mb-5">
                  <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
