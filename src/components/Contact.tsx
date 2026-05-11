import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    platform: "GitHub",
    url: "https://github.com/Arjun-000",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    label: "github.com/Arjun-000",
    invert: true,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/arjunr0319",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    label: "linkedin.com/in/arjunr0319",
    invert: false,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-primary py-20 md:py-[120px] px-4 sm:px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="mb-8 md:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-3">Let's Connect</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[600px]">
              Based in Alappuzha, Kerala — open to opportunities and collaborations. Reach out via any of the channels below.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className={`w-8 h-8 flex-shrink-0 ${c.invert ? "invert" : ""}`}
                />
                <div className="min-w-0">
                  <p className="text-primary text-sm font-medium">{c.platform}</p>
                  <p className="text-muted-foreground text-xs truncate">{c.label}</p>
                </div>
              </a>
            ))}

            <a href="mailto:arjunr0302@gmail.com" className="contact-card">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-primary text-sm font-medium">Email</p>
                <p className="text-muted-foreground text-xs truncate">arjunr0302@gmail.com</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
