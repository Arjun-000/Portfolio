const experiences = [
  {
    label: "Full-Time",
    role: "Tech Support Engineer",
    org: "Brtotype (Packapeer Accademy Limited)",
    duration: "2025 – Present",
    description:
      "Delivered hands-on technical assistance to students, resolving queries related to programming, software tools, and academy platforms. Designed, conducted, and evaluated technical assessments testing core skills in DSA, OOP, and related concepts. Monitored student progress and recommended personalized learning paths.",
  },
  {
    label: "Internship",
    role: "MERN Stack Developer Intern",
    org: "Luminar Technolabs",
    duration: "2024",
    description:
      "Developed modular React components, integrated RESTful APIs, improved frontend performance, and collaborated in an agile workflow environment. Focused on component-driven architecture and clean code practices.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-primary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-section text-primary mb-3">Work Experience</h2>
          <p className="text-muted-foreground text-body-lg">
            Professional roles and internships.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div key={exp.role} className="timeline-card">
              <div className="flex items-center gap-2 mb-1">
                <span className="timeline-badge">{exp.label}</span>
                <span className="text-muted-foreground text-body-sm ml-auto">{exp.duration}</span>
              </div>
              <h3 className="font-heading text-card-title text-primary timeline-role">{exp.role}</h3>
              <p className="text-primary/60 text-body-sm mt-1">{exp.org}</p>
              <p className="text-muted-foreground text-body-sm leading-relaxed mt-3">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
