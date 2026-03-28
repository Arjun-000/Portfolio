import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);
  const text = "ARJUN R";

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 2000);
    const done = setTimeout(onComplete, 2600);
    return () => { clearTimeout(timer); clearTimeout(done); };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${exiting ? "exit" : ""}`}>
      <div className="flex">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="loading-letter"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      <span className="loading-sub-text">Frontend Developer</span>
      <div className="loading-progress">
        <div className="loading-progress-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
