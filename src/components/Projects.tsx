import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Shield, Box, MessageSquare } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
  icon: "external-link" | "github";
}

interface ProjectSection {
  heading: string;
  text: string;
}

interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
}

const projects: Project[] = [
  {
    icon: <Shield size={38} />,
    title: "Organ Donation Management System",
    description: "Centralized workflow-driven platform optimizing donor-recipient coordination across hospitals.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    links: [
      { label: "Live Demo", icon: "external-link", url: "https://your-live-link.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/yourusername/organ-donation" },
    ],
    sections: [
      { heading: "What", text: "A full-stack healthcare coordination system managing donors, recipients, hospital approvals, and organ allocation lifecycle." },
      { heading: "Why", text: "Organ matching is time-sensitive and error-prone when handled manually. This system reduces friction, centralizes data, and improves response efficiency." },
      { heading: "How", text: "Built with React (component-driven architecture), Express REST APIs, MongoDB schema modeling, and role-based access logic." },
    ],
  },
  {
    icon: <Box size={38} />,
    title: "3D Model Viewer Platform",
    description: "Interactive browser-based GLB rendering engine with cloud-backed storage and live asset management.",
    tags: ["Three.js", "React", "GLTF", "MongoDB Atlas"],
    links: [
      { label: "Live Demo", icon: "external-link", url: "https://your-live-link.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/yourusername/3d-model-viewer" },
    ],
    sections: [
      { heading: "What", text: "A full-stack 3D asset management and rendering application enabling upload, metadata storage, and live visualization." },
      { heading: "Why", text: "To eliminate dependency on desktop visualization tools and bring 3D inspection workflows directly to the web." },
      { heading: "How", text: "Implemented using React with Three.js rendering pipeline, optimized GLTF loaders, backend file handling, and MongoDB Atlas cloud persistence." },
    ],
  },
  {
    icon: <MessageSquare size={38} />,
    title: "Real-Time Communication System",
    description: "Event-driven messaging system using WebSocket architecture with room-based segmentation.",
    tags: ["Socket.IO", "Node.js", "WebSockets"],
    links: [
      { label: "Live Demo", icon: "external-link", url: "https://your-live-link.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/yourusername/chat-app" },
    ],
    sections: [
      { heading: "What", text: "A lightweight messaging system enabling instant client-server bidirectional communication." },
      { heading: "Why", text: "To deeply understand real-time event loops, socket architecture, and state synchronization." },
      { heading: "How", text: "Built with Node.js and Socket.IO, implementing event broadcasting, room-based segmentation, and efficient state updates." },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="glass-card overflow-hidden flex flex-col cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Thumbnail */}
      <div
        className="h-[120px] flex items-center justify-center"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="flex items-center justify-center text-primary/40"
          style={{
            width: 38,
            height: 38,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
          }}
        >
          {project.icon}
        </div>
      </div>

      <div className="p-card-p flex flex-col gap-3 flex-1">
        <h3 className="font-heading text-card-title text-primary hover-underline">{project.title}</h3>
        <p className="text-muted-foreground text-body-sm leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded-full text-muted-foreground"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-body-sm text-primary/50 hover:text-primary hover-underline transition-colors"
            >
              {link.icon === "github" ? <Github size={12} /> : <ExternalLink size={12} />}
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="flex items-center gap-2 text-muted-foreground text-body-sm mt-auto pt-2"
          onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Collapse" : "Read More"}
        </button>

        {expanded && (
          <div className="flex flex-col gap-3 pt-3 border-t border-primary/[0.08] animate-fade-in-up">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h4 className="font-heading text-body-sm font-semibold text-primary mb-1">{s.heading}</h4>
                <p className="text-muted-foreground text-body-sm leading-relaxed">{s.text}</p>
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
    <section id="projects" className="section-secondary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-section text-primary mb-3">Selected Projects</h2>
          <p className="text-muted-foreground text-body-lg max-w-[600px]">
            Engineered with scalability, performance, and clean architecture in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gap">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
