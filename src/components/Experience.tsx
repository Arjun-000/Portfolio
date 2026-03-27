import { Briefcase } from "lucide-react";

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

       

        {/* Experience 2 */}
        <div className="timeline-card">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="px-2 py-0.5 text-[11px] rounded-full text-muted-foreground"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Full-Time
            </span>
            <span className="text-muted-foreground text-body-sm ml-auto">
              2025 – Present
            </span>
          </div>

          <h3 className="font-heading text-card-title text-primary timeline-role">
            Tech Support Engineer
          </h3>

          <p className="text-primary/60 text-body-sm mt-1">
            Brtotype (Packapeer Accademy Limited)
          </p>

          <p className="text-muted-foreground text-body-sm leading-relaxed mt-3">
            Delivered hands-on technical assistance to students, resolving queries related to programming, software tools, and academy platforms. Designed, conducted, and evaluated technical assessments testing core skills in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and related concepts. Monitored student progress, provided feedback on test performance, and recommended personalized learning paths to improve technical proficiency.
          </p>
        </div>

         {/* Experience 1 */}
        <div className="timeline-card mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="px-2 py-0.5 text-[11px] rounded-full text-muted-foreground"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Internship
            </span>
            <span className="text-muted-foreground text-body-sm ml-auto">
              2024
            </span>
          </div>

          <h3 className="font-heading text-card-title text-primary timeline-role">
            MERN Stack Developer Intern
          </h3>

          <p className="text-primary/60 text-body-sm mt-1">
            Luminar Technolabs
          </p>

          <p className="text-muted-foreground text-body-sm leading-relaxed mt-3">
            Developed modular React components, integrated RESTful APIs,
            improved frontend performance, and collaborated in an agile
            workflow environment. Focused on component-driven architecture and
            clean code practices.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
