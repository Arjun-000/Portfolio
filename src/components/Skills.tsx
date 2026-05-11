import { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Skill {
  name: string;
  description: string;
  logo: string;
  alt: string;
  invert?: boolean;
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    description: "Modern ES6+, async patterns, and performance-focused frontend logic.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
  },
  {
    name: "TypeScript",
    description: "Strongly-typed application code for safer refactors and APIs.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript logo",
  },
  {
    name: "React.js",
    description: "Component-driven UIs with hooks, routing and state management.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React.js logo",
  },
  {
    name: "Node.js",
    description: "Event-driven backend services and REST API development.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js logo",
  },
  {
    name: "Express.js",
    description: "RESTful API architecture using middleware patterns and MVC.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express.js logo",
    invert: true,
  },
  {
    name: "MongoDB",
    description: "Schema design, aggregation pipelines and Mongoose modelling.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB logo",
  },
  {
    name: "MySQL",
    description: "Relational schema design, joins and optimized SQL queries.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL logo",
  },
  {
    name: "HTML5",
    description: "Semantic markup, accessibility, and SEO-friendly structure.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5 logo",
  },
  {
    name: "CSS3",
    description: "Modern layouts with Flexbox, Grid and fluid responsive design.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3 logo",
  },
  {
    name: "Bootstrap",
    description: "Responsive UI system with grid and utility classes.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    alt: "Bootstrap logo",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling with consistent design tokens.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind CSS logo",
  },
  {
    name: "Java",
    description: "OOP fundamentals and core problem-solving foundation.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java logo",
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="skill-card flex flex-col gap-4">
    <div className="skill-icon-circle">
      <img
        src={skill.logo}
        alt={skill.alt}
        className={`w-6 h-6 ${skill.invert ? "invert" : ""}`}
        loading="lazy"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-primary text-base font-semibold">{skill.name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
    </div>
  </div>
);

const Skills = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const directionRef = useRef(1);
  const speed = 0.5;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const step = () => {
      if (!isDraggingRef.current) {
        el.scrollLeft += speed * directionRef.current;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
        if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth - el.clientWidth;
      }
      autoScrollRef.current = requestAnimationFrame(step);
    };

    autoScrollRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(autoScrollRef.current);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };
    const onMouseUp = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const walk = (e.pageX - el.offsetLeft) - startXRef.current;
      directionRef.current = walk > 0 ? -1 : 1;
      isDraggingRef.current = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeftRef.current - (x - startXRef.current) * 1.5;
    };
    const onMouseLeave = () => { isDraggingRef.current = false; };

    const onTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      el.scrollLeft = scrollLeftRef.current - (x - startXRef.current) * 1.5;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const walk = (e.changedTouches[0].pageX - el.offsetLeft) - startXRef.current;
      directionRef.current = walk > 0 ? -1 : 1;
      isDraggingRef.current = false;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove);
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const scroll = useCallback((dir: number) => { directionRef.current = dir; }, []);

  return (
    <section id="skills" className="section-secondary py-[120px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-3">Skills</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Technologies and tools I work with to build production-grade applications.
              </p>
            </div>
            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll(-1)} className="carousel-btn"><ChevronLeft size={16} /></button>
              <button onClick={() => scroll(1)} className="carousel-btn"><ChevronRight size={16} /></button>
            </div>
          </div>
        </ScrollReveal>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
