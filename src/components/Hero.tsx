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
      className="section-primary relative overflow-hidden"
      style={{ paddingTop: '140px', paddingBottom: '80px' }}
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

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-[2] px-6 md:px-12">
        <div className="flex-1 flex flex-col gap-6 animate-fade-in-up">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Frontend Developer
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary max-w-[600px] leading-tight">
            Arjun R
          </h1>

          <p className="text-lg text-foreground max-w-[520px] leading-relaxed">
            Frontend Developer building production-grade web experiences. I specialize in crafting
            scalable, performant, and visually refined applications using modern frontend technologies.
          </p>

          <p className="text-sm text-muted-foreground max-w-[480px]">
            My focus is on clean architecture, intuitive interfaces, and delivering real-world impact through code.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="#projects"
              className="btn-pill inline-flex items-center justify-center px-8 py-3.5 border border-primary/20 text-primary font-medium text-lg"
            >
              View Projects →
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hover-underline"
            >
              View Skills
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
