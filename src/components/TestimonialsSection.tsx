import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Conversion Website",
    price: "Starting from Rs. 75,000",
    description: "For businesses that need a sharper online presence and a clearer path to enquiries.",
    points: ["Strategy-led homepage", "Mobile-first design", "Lead capture setup"],
  },
  {
    name: "Landing Page Sprint",
    price: "Starting from Rs. 35,000",
    description: "For offers, campaigns, and paid traffic that need a better conversion-focused page.",
    points: ["Offer-focused messaging", "CTA optimization", "Fast launch turnaround"],
  },
  {
    name: "Website + Automation",
    price: "Starting from Rs. 150,000",
    description: "For teams that need better websites plus faster follow-up and less manual admin.",
    points: ["Website + workflow setup", "Lead routing automation", "Booking / follow-up flows"],
  },
];

const TestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="packages" className="py-28 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Popular Services</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">Clear options make it easier to choose the right fit</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you need a website, landing page, SaaS product, custom development, or automation support, these service categories help you understand where to start.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={index * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">{pkg.name}</p>
                <h3 className="font-display text-2xl font-bold mb-3">{pkg.price}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>
                <div className="space-y-3 mb-8">
                  {pkg.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-foreground/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button variant="heroOutline" className="w-full" onClick={() => navigate("/booking")}>
                    Book a Free Consultation <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
