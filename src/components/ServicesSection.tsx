import { Code2, Brain, Globe, Cloud } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions built from the ground up to solve your unique business challenges.",
  },
  {
    icon: Brain,
    title: "AI Solutions & Automation",
    description: "Intelligent systems that automate workflows, analyze data, and drive smarter business decisions.",
  },
  {
    icon: Globe,
    title: "Web & SaaS Development",
    description: "High-performance web applications and SaaS platforms designed for scale and user delight.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Engineering",
    description: "Robust cloud architectures that ensure reliability, security, and seamless scalability.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover-glow hover:glow-border-primary transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
