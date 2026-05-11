import ScrollReveal from "./ScrollReveal";

const items = [
  {
    badge: "Undergraduate",
    period: "2020 – 2024",
    title: "B.Tech in Computer Science and Engineering",
    place: "College of Engineering and Management Punnapra, Alappuzha",
    desc: "Focused on software engineering principles, data structures, algorithms, and full-stack web development.",
  },
  {
    badge: "Higher Secondary",
    period: "2018 – 2020",
    title: "Higher Secondary (Computer Science)",
    place: "TD Higher Secondary School, Alappuzha",
    desc: "Completed plus-two with focus on computer science and mathematics.",
  },
  {
    badge: "Schooling",
    period: "Until 2018",
    title: "High School",
    place: "Leo XIII English Medium Central School, Alappuzha",
    desc: "Foundational schooling with early interest in computing and problem solving.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-secondary py-20 md:py-[120px] px-4 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-8 md:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-3">Education</h2>
            <p className="text-muted-foreground text-base sm:text-lg">Academic background and qualifications.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {items.map((it, i) => (
            <ScrollReveal key={it.title} delay={0.05 * (i + 1)}>
              <div className="timeline-card">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="timeline-badge">{it.badge}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm sm:ml-auto">{it.period}</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-primary timeline-role">
                  {it.title}
                </h3>
                <p className="text-primary/60 text-sm mt-1">{it.place}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">{it.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
