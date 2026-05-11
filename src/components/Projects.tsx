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
    icon: <Shield size={38} />,
    title: "Organ Donation Management System",
    description: "Full-stack MERN system for donor-recipient workflows with JWT auth.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Bootstrap"],
    links: [
      { label: "GitHub", icon: "github", url: "https://github.com/Arjun-000" },
    ],
    sections: [
      { heading: "What", text: "A full-stack web application for donor registration, recipient management, and availability tracking with secure authentication." },
      { heading: "Why", text: "Built to model real-world database relationships, role-based access, and end-to-end MERN application architecture." },
      { heading: "How", text: "Implemented RESTful APIs in Express, MongoDB schemas, JWT-protected routes, MVC backend structure, and a responsive React + Bootstrap UI." },
    ],
  },
  {
    icon: <Box size={38} />,
    title: "Desti — Travel CRUD App",
    description: "React + JSON Server CRUD app with reusable components and dynamic routing.",
    tags: ["React", "JSON Server", "Bootstrap", "REST API"],
    links: [
      { label: "GitHub", icon: "github", url: "https://github.com/Arjun-000" },
    ],
    sections: [
      { heading: "What", text: "A CRUD-based travel destinations application with full create, read, update and delete flows." },
      { heading: "Why", text: "Built to practice clean component architecture, routing patterns, and REST API integration in React." },
      { heading: "How", text: "Used React Router for dynamic routing, React-Bootstrap for responsive UI, and JSON Server as a mock REST backend with hooks for state." },
    ],
  },
  {
    icon: <MessageSquare size={38} />,
    title: "Real-Time Chat Application",
    description: "Socket.IO powered chat system with instant bi-directional messaging.",
    tags: ["Socket.IO", "Node.js", "Express", "WebSockets"],
    links: [
      { label: "GitHub", icon: "github", url: "https://github.com/Arjun-000" },
    ],
    sections: [
      { heading: "What", text: "A lightweight chat application enabling real-time messaging between connected users." },
      { heading: "Why", text: "Created to explore WebSocket architecture and event-driven backend programming." },
      { heading: "How", text: "Built with Node.js, Express, and Socket.IO using room-based channels and event emitters." },
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
    <section id="projects" className="section-secondary py-20 md:py-[120px] px-4 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-8 md:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-3">Selected Projects</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[600px]">
              Engineered with scalability, performance, and clean architecture in mind.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
