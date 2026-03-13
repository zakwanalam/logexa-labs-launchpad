import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vitcare1 from "@/assets/Vitcare/Screenshot_14-3-2026_3252_vitcare.vercel.app.jpeg";
import vitcare2 from "@/assets/Vitcare/Screenshot_14-3-2026_3319_vitcare.vercel.app.jpeg";
import vitcare3 from "@/assets/Vitcare/Screenshot_14-3-2026_3358_vitcare.vercel.app.jpeg";
import vitcare4 from "@/assets/Vitcare/Screenshot_14-3-2026_3426_vitcare.vercel.app.jpeg";
import vitcare5 from "@/assets/Vitcare/Screenshot_14-3-2026_3548_vitcare.vercel.app.jpeg";
import vitcare6 from "@/assets/Vitcare/screenshot-1773439515807.png";
import f3Image1 from "@/assets/F3/f3main.jpeg";
import f3Image2 from "@/assets/F3/Screenshot 2026-03-12 201637.png";
import f3Image3 from "@/assets/F3/Screenshot 2026-03-12 201735.png";
import f3Image4 from "@/assets/F3/Screenshot 2026-03-12 202218.png";
import f3Image5 from "@/assets/F3/Screenshot 2026-03-12 202328.png";
import f3Image6 from "@/assets/F3/Screenshot_12-3-2026_202028_f3.properties.jpeg";
import f3Image7 from "@/assets/F3/Screenshot_12-3-2026_202132_f3.properties.jpeg";
import f3Image8 from "@/assets/F3/Screenshot_12-3-2026_202157_f3.properties.jpeg";
import f3Image9 from "@/assets/F3/Screenshot_12-3-2026_20216_f3.properties.jpeg";
import f3Image10 from "@/assets/F3/Screenshot_12-3-2026_203220_admin.f3.properties.jpeg";
import f3Image11 from "@/assets/F3/Screenshot_12-3-2026_203248_admin.f3.properties.jpeg";
import f3Image12 from "@/assets/F3/Screenshot_13-3-2026_201326_f3.properties.jpeg";
import f3Image13 from "@/assets/F3/Screenshot_13-3-2026_201417_f3.properties.jpeg";
import f3Image14 from "@/assets/F3/Screenshot_13-3-2026_201452_f3.properties.jpeg";
import bravoGym6 from "@/assets/Bravo Gym/Screenshot_14-3-2026_22436_fitness-53um.vercel.app copy.jpeg"
import bravoGym2 from "@/assets/Bravo Gym/Screenshot_14-3-2026_22452_fitness-53um.vercel.app.jpeg";
import bravoGym1 from "@/assets/Bravo Gym/Screenshot_14-3-2026_2248_fitness-53um.vercel.app.jpeg";
import bravoGym4 from "@/assets/Bravo Gym/Screenshot_14-3-2026_22535_fitness-53um.vercel.app.jpeg";
import bravoGym5 from "@/assets/Bravo Gym/Screenshot_14-3-2026_23055_fitness-53um.vercel.app.jpeg";
import bravoGym3 from "@/assets/Bravo Gym/Screenshot 2026-03-14 023014.png";
import AnimatedSection from "./AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    image: vitcare1,
    gallery: [vitcare1, vitcare2, vitcare3, vitcare4, vitcare5, vitcare6],
    title: "VitCare - Clinic",
    category: "Clinic Management System",
    description: "A premium clinic management system with  seamless appointment booking.",
  },
  {
    image: f3Image1,
    gallery: [
      f3Image1, f3Image2, f3Image3, f3Image4, f3Image5,
      f3Image6, f3Image7, f3Image8, f3Image9, f3Image10,
      f3Image11, f3Image12, f3Image13, f3Image14
    ],
    title: "F3 Real Estate",
    category: "Real Estate Ecosystem",
    description: "A comprehensive real estate platform featuring property management, advanced search capabilities, and an intuitive admin dashboard.",
  },
  {
    image: bravoGym1,
    gallery: [bravoGym1, bravoGym6, bravoGym2, bravoGym4, bravoGym3, , bravoGym5,],
    title: "Bravo Gym Website",
    category: "Website",
    description: "A modern website for Bravo Gym with advanced features.",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                className="glass-card overflow-hidden group cursor-pointer h-full relative"
                whileHover={{ y: -6, boxShadow: "0 0 30px hsl(73 92% 48% / 0.1)" }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                      View Gallery
                    </div>
                  </div>
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

      {/* Gallery Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl  bg-background/95 backdrop-blur-md border-primary/20 p-0 overflow-hidden">
          {selectedProject && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              {/* Image Carousel */}
              <div className="w-full md:w-2/3 bg-black/20 flex items-center justify-center p-4">
                <Carousel className="w-full max-w-3xl px-8">
                  <CarouselContent>
                    {selectedProject.gallery.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-[16/10] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                          <img src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-full object-contain" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 -translate-x-1/2 border-white/10 hover:bg-white/10" />
                  <CarouselNext className="right-0 translate-x-1/2 border-white/10 hover:bg-white/10" />
                </Carousel>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10">
                <DialogHeader>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">{selectedProject.category}</p>
                  <DialogTitle className="font-display text-3xl font-bold mb-4">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-muted-foreground leading-relaxed text-base italic">
                  "{selectedProject.description}"
                </DialogDescription>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Custom Design</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Optimized Performance</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>SEO Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
