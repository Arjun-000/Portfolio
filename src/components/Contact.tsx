import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    platform: "GitHub",
    url: "https://github.com/your-username",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    label: "github.com/your-username",
    invert: true,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    label: "linkedin.com/in/your-username",
    invert: false,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-primary py-[120px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Find me on the web or drop a message — I'm always open to new opportunities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <a
                key={c.platform}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <img
                  src={c.logo}
                  alt={c.platform}
                  className={`w-8 h-8 ${c.invert ? "invert" : ""}`}
                />
                <div>
                  <p className="text-primary text-sm font-medium">{c.platform}</p>
                  <p className="text-muted-foreground text-xs">{c.label}</p>
                </div>
              </a>
            ))}

            <a
              href="mailto:arjun@email.com"
              className="contact-card"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-primary text-sm font-medium">Email</p>
                <p className="text-muted-foreground text-xs">arjun@email.com</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
