import AnimatedSection from "./AnimatedSection";

const trustPoints = [
  "Clear communication and practical recommendations",
  "Built for small businesses that need results, not fluff",
  "Strong focus on conversion, usability, and speed",
  "Web, funnel, and automation thinking under one roof",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Why Logexa Labs</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8">Built for Businesses That Want Better Systems</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            Logexa Labs helps businesses improve how they show up online and how they operate behind the scenes.
            That means clearer websites, stronger conversion paths, and automation that removes repetitive manual work.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
          {trustPoints.map((point, index) => (
            <AnimatedSection key={point} delay={0.2 + index * 0.08}>
              <div className="glass-card p-5 h-full">
                <div className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {[
            "Better websites build trust faster and make your offer easier to understand.",
            "Stronger funnels reduce wasted traffic and improve the quality of enquiries.",
            "Automation helps your business respond faster and operate with less chaos.",
          ].map((item, index) => (
            <AnimatedSection key={item} delay={0.35 + index * 0.08}>
              <div className="glass-card p-5 h-full">
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
