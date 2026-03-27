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
      className="section-primary relative overflow-hidden"
      style={{ paddingTop: '140px', paddingBottom: '80px' }}
    >
      {/* Liquid Glass Blobs */}
      <div className="liquid-glass-canvas">
        {blobStyles.map((style, i) => (
          <div key={i} className="liquid-blob" style={style} />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-[2] px-6 md:px-section-x">
        <div className="flex-1 flex flex-col gap-6 animate-fade-in-up">
          {/* Badge */}
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Frontend Engineer · MERN Stack
          </span>

          <h1 className="font-heading text-hero text-primary max-w-[600px]">
            Frontend Engineer Crafting High‑Performance Digital Products
          </h1>

          <p className="text-body-lg text-foreground max-w-[520px] leading-relaxed">
            I design and build scalable, production-grade web applications using React, Node.js,
            and modern frontend architecture. My focus is performance, maintainability, and
            delivering measurable user impact.
          </p>

          <p className="text-body-sm text-muted-foreground max-w-[480px]">
            Currently specializing in MERN stack, 3D web experiences, and real-time systems.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="#projects"
              className="btn-pill inline-flex items-center justify-center px-8 py-3.5 border border-primary/20 text-primary font-medium text-body-lg"
            >
              Explore Selected Work →
            </a>
            <a
              href="#skills"
              className="text-body-sm text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              View Skills
            </a>
          </div>
        </div>

        {/* Avatar Card */}
        <div className="animate-fade-in-delay flex-shrink-0">
          <div className="hero-avatar-card">
            <img
              src="/images/arjun-profile.png"
              alt="Arjun R — Frontend Engineer"
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
