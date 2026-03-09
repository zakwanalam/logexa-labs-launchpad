const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">About Us</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8">Who We Are</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Logexa Labs is a modern digital engineering agency focused on building high-quality software solutions for businesses of all sizes. We combine technical expertise with creative problem-solving to deliver products that are not only functional but truly exceptional.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From startups looking to launch their first product to enterprises seeking to modernize their tech stack — we partner with ambitious teams to turn ideas into scalable, revenue-generating software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
