import { useRef, useEffect, useState, ReactNode } from "react";

const ScrollReveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${revealed ? "revealed" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
