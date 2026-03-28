import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  return (
    <section id="experience" className="section-primary py-[120px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">Work Experience</h2>
            <p className="text-muted-foreground text-lg">Professional roles and internships.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="timeline-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="timeline-badge">Internship</span>
              <span className="text-muted-foreground text-sm ml-auto">2024</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-primary timeline-role">
              MERN Stack Developer Intern
            </h3>
            <p className="text-primary/60 text-sm mt-1">Luminar Technolabs</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              Worked on scalable frontend components using React, integrated REST APIs,
              and collaborated on full-stack application architecture.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
