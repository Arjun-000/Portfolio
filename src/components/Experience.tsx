import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-primary py-section-y px-6 md:px-section-x">
      <div className="max-w-container mx-auto flex flex-col gap-24">
        {/* Professional Experience */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Briefcase size={24} className="text-primary" />
            <h2 className="font-heading text-3xl md:text-section text-primary">Professional Experience</h2>
          </div>
          <div className="glass-card p-card-p hover:translate-y-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="font-heading text-card-title text-primary">MERN Stack Developer Intern</h3>
              <span className="text-muted-foreground text-sm">2024</span>
            </div>
            <p className="text-primary/80 font-medium mb-3">Luminar Technolabs</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Developed modular React components, integrated RESTful APIs, improved frontend performance, and collaborated in an agile workflow environment.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap size={24} className="text-primary" />
            <h2 className="font-heading text-3xl md:text-section text-primary">Education</h2>
          </div>
          <div className="glass-card p-card-p hover:translate-y-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="font-heading text-card-title text-primary">B.Tech — Computer Science and Engineering</h3>
              <span className="text-muted-foreground text-sm">Graduated</span>
            </div>
            <p className="text-primary/80 font-medium mb-3">College of Engineering and Management Punnapra</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Specialized in full-stack development, data structures, and scalable application architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
