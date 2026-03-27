const Education = () => {
  return (
    <section id="education" className="section-secondary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-section text-primary mb-3">Education</h2>
          <p className="text-muted-foreground text-body-lg">
            Academic background and qualifications.
          </p>
        </div>

        <div className="timeline-card">
          <div className="flex items-center gap-2 mb-1">
            <span className="timeline-badge">Undergraduate Degree</span>
            <span className="text-muted-foreground text-body-sm ml-auto">Graduated</span>
          </div>
          <h3 className="font-heading text-card-title text-primary timeline-role">
            B.Tech — Computer Science and Engineering
          </h3>
          <p className="text-primary/60 text-body-sm mt-1">
            College of Engineering and Management Punnapra
          </p>
          <p className="text-muted-foreground text-body-sm leading-relaxed mt-3">
            Specialised in full-stack development, data structures, and scalable application
            architecture. Developed strong foundations in algorithms, systems design, and modern web
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
