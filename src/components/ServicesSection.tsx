import { ArrowRight, Bot, Globe, LayoutTemplate, ShoppingCart, Layers3, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Websites That Convert",
    description:
      "Modern business websites designed to build trust, explain your offer clearly, and turn more visitors into leads.",
    bullets: ["Homepage strategy", "Mobile-first design", "Lead capture optimization"],
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages & Funnels",
    description:
      "High-converting pages for paid ads, offers, launches, and campaigns that need stronger conversion performance.",
    bullets: ["Offer-focused copy", "CTA improvements", "Campaign-ready pages"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate lead capture, follow-up, reminders, admin tasks, and internal workflows so your business runs faster.",
    bullets: ["Lead routing", "Follow-up automation", "Workflow integrations"],
  },
  {
    icon: Layers3,
    title: "SaaS Product Development",
    description:
      "We build modern SaaS platforms, dashboards, portals, and web apps designed for usability, growth, and scale.",
    bullets: ["User dashboards", "Admin panels", "Scalable product architecture"],
  },
  {
    icon: Wrench,
    title: "Custom Development",
    description:
      "Need something beyond a standard website? We build tailored systems, custom features, and integrations around your workflow.",
    bullets: ["Internal tools", "Custom integrations", "Business-specific workflows"],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Growth Systems",
    description:
      "Improve product pages, checkout flow, and post-click experience so your store converts more traffic into sales.",
    bullets: ["Checkout improvements", "Retention flows", "Conversion-focused UX"],
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">What We Help With</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">Services Built Around Business Outcomes</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We focus on the work that matters most to growing businesses: better websites, stronger funnels,
            faster follow-up, scalable products, and less manual busywork.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <motion.div
                className="glass-card p-8 h-full group transition-all duration-500"
                whileHover={{ y: -8, boxShadow: "0 0 40px hsl(73 92% 48% / 0.15)", borderColor: "hsl(73 92% 48% / 0.3)" }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <div className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-sm text-foreground/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25} className="mt-12 text-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => navigate("/booking")}>
            Book a Free Consultation <ArrowRight size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
