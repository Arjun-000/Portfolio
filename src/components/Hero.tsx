const Hero = () => {
  return (
    <section className="section-primary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col gap-9 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-hero text-primary max-w-[720px]">
            Frontend Engineer Crafting High-Performance Digital Products
          </h1>
          <p className="text-body-lg text-foreground max-w-[620px]">
            I design and build scalable, production-grade web applications using React, Node.js, and modern frontend architecture. My focus is performance, maintainability, and delivering measurable user impact.
          </p>
          <p className="text-body-lg text-muted-foreground">
            Currently specializing in MERN stack, 3D web experiences, and real-time systems.
          </p>
          <a
            href="#projects"
            className="btn-pill inline-flex items-center justify-center px-8 py-4 border border-primary/20 text-primary font-medium text-body-lg w-fit"
          >
            Explore Selected Work
          </a>
        </div>
        <div className="animate-fade-in-delay flex-shrink-0">
          <img
            src="/images/arjun-profile.jpg"
            alt="Arjun R — Frontend Engineer"
            width={460}
            height={560}
            className="w-[320px] md:w-[460px] h-[400px] md:h-[560px] object-cover rounded-lg"
            style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
