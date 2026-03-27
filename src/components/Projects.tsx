import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectSection {
  heading: string;
  text: string;
}

interface Project {
  image: string;
  alt: string;
  title: string;
  description: string;
  sections: ProjectSection[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    image: "/images/organ-donation.jpg",
    alt: "Organ Donation Management System",
    title: "Organ Donation Management System",
    description: "A centralized, workflow-driven platform optimizing donor-recipient coordination across hospitals.",
    sections: [
      { heading: "What", text: "A full-stack healthcare coordination system managing donors, recipients, hospital approvals, and organ allocation lifecycle." },
      { heading: "Why", text: "Organ matching is time-sensitive and error-prone when handled manually. This system reduces friction, centralizes data, and improves response efficiency." },
      { heading: "How", text: "Built with React (component-driven architecture), Express REST APIs, MongoDB schema modeling, and role-based access logic." },
    ],
    links: [
      { label: "View Live Deployment", url: "https://your-live-link.com" },
      { label: "GitHub Repository", url: "https://github.com/yourusername/organ-donation" },
    ],
  },
  {
    image: "/images/3d-viewer.jpg",
    alt: "3D Model Viewer Platform",
    title: "3D Model Viewer Platform",
    description: "Interactive browser-based GLB rendering engine with cloud-backed storage.",
    sections: [
      { heading: "What", text: "A full-stack 3D asset management and rendering application enabling upload, metadata storage, and live visualization." },
      { heading: "Why", text: "To eliminate dependency on desktop visualization tools and bring 3D inspection workflows directly to the web." },
      { heading: "How", text: "Implemented using React with Three.js rendering pipeline, optimized GLTF loaders, backend file handling, and MongoDB Atlas cloud persistence." },
    ],
    links: [
      { label: "View Live Deployment", url: "https://your-live-link.com" },
      { label: "GitHub Repository", url: "https://github.com/yourusername/3d-model-viewer" },
    ],
  },
  {
    image: "/images/chat-app.jpg",
    alt: "Real-Time Chat Application",
    title: "Real-Time Communication System",
    description: "Event-driven real-time messaging system using WebSocket architecture.",
    sections: [
      { heading: "What", text: "A lightweight messaging system enabling instant client-server bidirectional communication." },
      { heading: "Why", text: "To deeply understand real-time event loops, socket architecture, and state synchronization." },
      { heading: "How", text: "Built with Node.js and Socket.IO, implementing event broadcasting, room-based segmentation, and efficient state updates." },
    ],
    links: [
      { label: "View Live Deployment", url: "https://your-live-link.com" },
      { label: "GitHub Repository", url: "https://github.com/yourusername/chat-app" },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card p-card-p flex flex-col gap-5 cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        width={1280}
        height={800}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="font-heading text-card-title text-primary">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

      <button
        className="flex items-center gap-2 text-muted-foreground text-sm mt-auto pt-2"
        onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
      >
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        {expanded ? "Collapse" : "Read More"}
      </button>

      {expanded && (
        <div className="flex flex-col gap-4 pt-4 border-t border-primary/[0.08] animate-fade-in-up">
          {project.sections.map((s) => (
            <div key={s.heading}>
              <h4 className="font-heading text-sm font-semibold text-primary mb-1">{s.heading}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
          <div className="flex gap-4 pt-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors"
              >
                {link.label.includes("GitHub") ? <Github size={14} /> : <ExternalLink size={14} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-secondary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-section text-primary mb-4">Selected Projects</h2>
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
