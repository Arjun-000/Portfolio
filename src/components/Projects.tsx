import { useState, useCallback } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Shield, Box, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string; icon: "external-link" | "github" }[];
  sections: { heading: string; text: string }[];
}

const projects: Project[] = [
  {
    icon: <Box size={38} />,
    title: "3D Model Viewer Application",
    description: "Interactive GLB model viewer built with React and Three.js.",
    tags: ["Three.js", "React", "GLTF", "MongoDB Atlas"],
    links: [
      { label: "Live Demo", icon: "external-link", url: "https://your-live-link.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/your-repo" },
    ],
    sections: [
      { heading: "What", text: "A full-stack web application allowing users to upload and render 3D GLB models directly in the browser." },
      { heading: "Why", text: "Built to understand real-time rendering, WebGL pipelines, and performance optimization in modern web applications." },
      { heading: "How", text: "Developed using React, Three.js, Node.js, and MongoDB Atlas for metadata storage and deployment scalability." },
    ],
  },
  {
    icon: <Shield size={38} />,
    title: "Organ Donation Management System",
    description: "Full-stack system for managing donor-recipient workflows.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    links: [
      { label: "Live Demo", icon: "external-link", url: "https://your-live-link.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/your-repo" },
    ],
    sections: [
      { heading: "What", text: "A centralized system for tracking organ donors, recipients, and hospital approvals." },
      { heading: "Why", text: "Designed to simulate real-world database relationships and workflow automation." },
      { heading: "How", text: "Built using MERN stack with secure routing and structured backend APIs." },
    ],
  },
  {
    icon: <MessageSquare size={38} />,
    title: "Real-Time Chat Application",
    description: "Socket.IO powered chat system with instant messaging.",
    tags: ["Socket.IO", "Node.js", "WebSockets"],
    links: [
      { label: "Live Demo", icon: "external-link", url: "https://your-live-link.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/your-repo" },
    ],
    sections: [
      { heading: "What", text: "Lightweight chat application enabling real-time communication between users." },
      { heading: "Why", text: "Created to explore WebSocket architecture and event-driven programming." },
      { heading: "How", text: "Implemented using Node.js, Express, and Socket.IO without heavy authentication layers." },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card overflow-hidden flex flex-col cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <div
        className="h-[120px] flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center justify-center text-primary/40 skill-icon-circle" style={{ width: 38, height: 38 }}>
          {project.icon}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-heading text-lg font-semibold text-primary hover-underline">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded-full text-muted-foreground"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-sm text-primary/50 hover:text-primary hover-underline transition-colors"
            >
              {link.icon === "github" ? <Github size={12} /> : <ExternalLink size={12} />}
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="flex items-center gap-2 text-muted-foreground text-sm mt-auto pt-2"
          onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Collapse" : "Read More"}
        </button>

        {expanded && (
          <div className="flex flex-col gap-3 pt-3 border-t border-primary/[0.08] animate-fade-in-up">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h4 className="font-heading text-sm font-semibold text-primary mb-1">{s.heading}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-secondary py-[120px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">Selected Projects</h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Engineered with scalability, performance, and clean architecture in mind.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
