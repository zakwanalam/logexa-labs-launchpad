import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is Logexa Labs best for?",
    answer: "We are best suited for small businesses, service providers, local brands, clinics, consultants, agencies, and growing teams that need better websites, clearer funnels, or automation support.",
  },
  {
    question: "What happens in the free audit?",
    answer: "We review your current website, offer, booking flow, or workflow setup and identify the biggest opportunities to improve conversion, clarity, and efficiency. You leave with practical next steps, not vague advice.",
  },
  {
    question: "Do you only build websites?",
    answer: "No. We also build landing pages, funnels, ecommerce improvements, and AI automation systems for lead capture, follow-up, reminders, and internal workflows.",
  },
  {
    question: "Can you improve an existing website instead of rebuilding it?",
    answer: "Yes. Sometimes the best move is a strategic refresh, stronger messaging, better CTAs, and a cleaner conversion path instead of a full rebuild.",
  },
  {
    question: "How long do projects usually take?",
    answer: "Smaller landing pages and focused website projects can move quickly, while more complex systems and automation builds take longer depending on scope. We define the timeline clearly after the consultation.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">Questions Clients Usually Ask Before Reaching Out</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Good pages reduce hesitation. Here are the answers people usually need before they book.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;

