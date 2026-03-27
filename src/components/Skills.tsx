import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Skill {
  name: string;
  abbr: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    abbr: "JS",
    description:
      "Core language for building interactive, high-performance web applications with modern ES6+ patterns and asynchronous programming.",
  },
  {
    name: "React.js",
    abbr: "Re",
    description:
      "Component-driven UI library for building scalable single-page applications with hooks, context, and declarative rendering.",
  },
  {
    name: "Node.js",
    abbr: "No",
    description:
      "Server-side JavaScript runtime enabling fast, event-driven backend services, CLI tools, and API development.",
  },
  {
    name: "Express.js",
    abbr: "Ex",
    description:
      "Minimalist Node.js framework for building robust RESTful APIs with middleware-based request handling architecture.",
  },
  {
    name: "MongoDB",
    abbr: "Mg",
    description:
      "NoSQL document database designed for flexible schema modeling, aggregation pipelines, and high-throughput data operations.",
  },
  {
    name: "Python",
    abbr: "Py",
    description:
      "Versatile language used for scripting, automation, data processing, machine learning, and backend service development.",
  },
  {
    name: "Bootstrap",
    abbr: "Bs",
    description:
      "Responsive CSS framework providing pre-built components, utility classes, and a mobile-first 12-column grid system.",
  },
  {
    name: "Tailwind CSS",
    abbr: "Tw",
    description:
      "Utility-first CSS framework enabling rapid, consistent UI development with design-token integration and zero unused CSS.",
  },
];

const SkillCard = ({ skill, isActive }: { skill: Skill; isActive: boolean }) => (
  <div
    className={`skill-card flex-shrink-0 flex flex-col gap-4 transition-all duration-300 ${
      isActive ? "skill-card-active" : ""
    }`}
  >
    {/* Icon circle */}
    <div className="skill-icon-circle">
      <span className="font-heading text-[15px] text-primary/70">{skill.abbr}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="font-heading text-card-title text-primary">{skill.name}</h3>
      <p className="text-muted-foreground text-body-sm leading-relaxed">{skill.description}</p>
    </div>
  </div>
);

const Skills = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section id="skills" className="section-secondary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto">
        {/* Header with controls */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-section text-primary mb-3">Skills</h2>
            <p className="text-muted-foreground text-body-lg max-w-[480px]">
              Technologies and tools I work with to build production-grade applications.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="carousel-btn"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="carousel-btn"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div className="max-w-container mx-auto">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} isActive={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
