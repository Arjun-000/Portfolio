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

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="skill-card flex-shrink-0 flex flex-col gap-4 min-w-[260px] p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
      <span className="text-sm text-white/70">{skill.abbr}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  </div>
);

const Skills = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number>(0);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const directionRef = useRef(1); // 1 = right, -1 = left

  const speed = 0.5;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const step = () => {
      if (!isDraggingRef.current) {
        el.scrollLeft += speed * directionRef.current;

        // Infinite loop
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }

        if (el.scrollLeft <= 0) {
          el.scrollLeft = el.scrollWidth - el.clientWidth;
        }
      }

      autoScrollRef.current = requestAnimationFrame(step);
    };

    autoScrollRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(autoScrollRef.current);
  }, []);

  /* ---------------- DRAG SUPPORT ---------------- */
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

      const endX = e.pageX - el.offsetLeft;
      const walk = endX - startXRef.current;

      // Change direction based on drag
      directionRef.current = walk > 0 ? -1 : 1;

      isDraggingRef.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    const onMouseLeave = () => {
      isDraggingRef.current = false;
    };

    /* Touch Support */
    const onTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;

      const endX = e.changedTouches[0].pageX - el.offsetLeft;
      const walk = endX - startXRef.current;
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

  /* ---------------- MANUAL BUTTON SCROLL ---------------- */
  const scroll = (dir: number) => {
    directionRef.current = dir;
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl text-white font-semibold mb-3">Skills</h2>
          <p className="text-white/60 max-w-md">
            Technologies and tools I work with to build production-grade applications.
          </p>
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll(-1)}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
