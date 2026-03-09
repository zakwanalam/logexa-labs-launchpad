import { motion } from "framer-motion";
import projectFootfinesse from "@/assets/project-footfinesse.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    image: projectFootfinesse,
    title: "FootFinesse",
    category: "Ecommerce Platform",
    description: "A premium sneaker marketplace with AI-powered recommendations and seamless checkout.",
  },
  {
    image: projectRealestate,
    title: "F3 Real Estate",
    category: "Property Listing Website",
    description: "Modern property listing platform with interactive maps and virtual tour integration.",
  },
  {
    image: projectDashboard,
    title: "Custom Business Dashboard",
    category: "Analytics Platform",
    description: "Real-time business intelligence dashboard with advanced data visualization.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.15}>
              <motion.div
                className="glass-card overflow-hidden group cursor-pointer h-full"
                whileHover={{ y: -6, boxShadow: "0 0 30px hsl(73 92% 48% / 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
