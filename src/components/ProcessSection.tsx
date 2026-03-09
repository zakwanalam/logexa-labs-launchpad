const steps = ["Discovery", "Planning", "Development", "Launch", "Scale"];

const ProcessSection = () => {
  return (
    <section id="process" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Development Process</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center mb-3 shadow-[0_0_20px_hsl(263_70%_66%/0.25)]">
                  <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-16 lg:w-24 h-px bg-gradient-to-r from-primary/40 to-primary/10 mx-4 mt-[-20px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
