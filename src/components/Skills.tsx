import { useRef, useState, useEffect } from "react";

interface Skill {
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    description:
      "Core language for building interactive, high-performance web applications with modern ES6+ patterns.",
  },
  {
    name: "React.js",
    description:
      "Component-driven UI library for building scalable single-page applications with declarative rendering.",
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript runtime enabling fast, event-driven backend services and API development.",
  },
  {
    name: "Express.js",
    description:
      "Minimalist Node.js framework for building robust RESTful APIs with middleware-based architecture.",
  },
  {
    name: "MongoDB",
    description:
      "NoSQL document database designed for flexible schema modeling and high-throughput data operations.",
  },
  {
    name: "Python",
    description:
      "Versatile language used for scripting, automation, data processing, and backend service development.",
  },
  {
    name: "Bootstrap",
    description:
      "Responsive CSS framework providing pre-built components and a mobile-first grid system.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework enabling rapid, consistent UI development with design-token integration.",
  },
];

const Skills = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId: number;
    let speed = 0.5;

    const autoScroll = () => {
      if (!isDragging && track) {
        track.scrollLeft += speed;
        // Loop back
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };
    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft || 0));
    setScrollLeft(trackRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section id="skills" className="section-primary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-section text-primary mb-3">Skills</h2>
          <p className="text-muted-foreground text-body-lg">
            Technologies and tools I work with daily.
          </p>
        </div>
      </div>

      {/* Carousel track — full width, no max-width constraint */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto cursor-grab select-none px-6 md:px-section-x"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: isDragging ? "auto" : "smooth",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Duplicate for seamless loop */}
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="glass-card flex-shrink-0 p-card-p flex flex-col gap-3"
            style={{
              width: "220px",
              minHeight: "160px",
              pointerEvents: isDragging ? "none" : "auto",
            }}
          >
            <h3 className="font-heading text-card-title text-primary">{skill.name}</h3>
            <p className="text-muted-foreground text-body-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
