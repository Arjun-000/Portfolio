import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    badge: "Full-time",
    period: "Sep 2025 – Apr 2026",
    title: "Tech Support Engineer",
    company: "Brototype",
    bullets: [
      "Assisted students in debugging full-stack MERN applications.",
      "Guided learners on REST APIs, authentication, and CRUD operations.",
      "Evaluated backend logic, API design, and database integration.",
      "Strengthened expertise in JavaScript fundamentals, OOP, and DSA.",
    ],
  },
  {
    badge: "Course",
    period: "Aug 2024 – Mar 2025",
    title: "ME(A)RN Stack Development",
    company: "Full-Stack Training Program",
    bullets: [
      "Designed data-driven full-stack apps with strong focus on backend logic and DB management (MongoDB, MySQL).",
      "Hands-on with JavaScript, TypeScript, SQL, authentication, state management, and deployment.",
      "Practiced agile collaboration and code optimization.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-primary py-20 md:py-[120px] px-4 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-8 md:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-3">Work Experience</h2>
            <p className="text-muted-foreground text-base sm:text-lg">Professional roles, internships and training.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {roles.map((r, i) => (
            <ScrollReveal key={r.title} delay={0.05 * (i + 1)}>
              <div className="timeline-card">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="timeline-badge">{r.badge}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm sm:ml-auto">{r.period}</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-primary timeline-role">
                  {r.title}
                </h3>
                <p className="text-primary/60 text-sm mt-1">{r.company}</p>
                <ul className="text-muted-foreground text-sm leading-relaxed mt-3 list-disc pl-5 space-y-1">
                  {r.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
