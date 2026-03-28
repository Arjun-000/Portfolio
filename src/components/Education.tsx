import ScrollReveal from "./ScrollReveal";

const Education = () => {
  return (
    <section id="education" className="section-secondary py-[120px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">Education</h2>
            <p className="text-muted-foreground text-lg">Academic background and qualifications.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="timeline-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="timeline-badge">Undergraduate Degree</span>
              <span className="text-muted-foreground text-sm ml-auto">2024</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-primary timeline-role">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-primary/60 text-sm mt-1">College of Engineering and Management Punnapra</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              Focused on software engineering principles, data structures,
              and full-stack web development.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
