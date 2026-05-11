import ScrollReveal from "./ScrollReveal";

const blobStyles = [
  { width: 180, height: 180, top: '10%', left: '5%' },
  { width: 140, height: 140, top: '60%', left: '15%' },
  { width: 210, height: 210, top: '20%', right: '10%' },
  { width: 120, height: 120, bottom: '15%', right: '25%' },
  { width: 160, height: 160, top: '40%', left: '45%' },
  { width: 90, height: 90, bottom: '30%', left: '30%' },
  { width: 200, height: 200, top: '5%', right: '35%' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-primary relative overflow-hidden pt-28 pb-16 md:pt-[140px] md:pb-20"
    >
      <div className="liquid-glass-canvas">
        {blobStyles.map((style, i) => (
          <div key={i} className="liquid-blob" style={style} />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 relative z-[2] px-4 sm:px-6 md:px-12">
        <div className="flex-1 flex flex-col gap-5 md:gap-6 animate-fade-in-up text-center lg:text-left items-center lg:items-start">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            MERN Stack Developer · Alappuzha, India
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary max-w-[600px] leading-tight">
            Arjun R
          </h1>

          <p className="text-base sm:text-lg text-foreground max-w-[520px] leading-relaxed">
            Detail-oriented MERN Stack Developer with hands-on experience designing and building
            end-to-end web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>

          <p className="text-sm text-muted-foreground max-w-[480px]">
            Skilled in REST API development, JWT authentication, database schema design, and
            building user-friendly, performant interfaces.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
            <a
              href="#projects"
              className="btn-pill inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground font-medium text-base sm:text-lg transition-colors"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-fade-in-delay flex-shrink-0">
          <div className="hero-avatar-card">
            <img
              src="/images/arjun-profile.png"
              alt="Arjun R — Frontend Developer"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className =
                    'w-[70px] h-[70px] rounded-full flex items-center justify-center text-2xl font-heading text-primary';
                  fallback.style.background = 'rgba(255,255,255,0.06)';
                  fallback.style.border = '1px solid rgba(255,255,255,0.1)';
                  fallback.textContent = 'AR';
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
