import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "HOME", link: "#hero" },
  { label: "SKILLS", link: "#skills" },
  { label: "PROJECTS", link: "#projects" },
  { label: "EXPERIENCE", link: "#experience" },
  { label: "EDUCATION", link: "#education" },
];

const VS_SOURCE = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FS_SOURCE = `
  precision mediump float;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec2 uMouse;

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    float wave1 = sin(uv.x * 18.0 + uTime * 1.2) * 0.012;
    float wave2 = sin(uv.y * 14.0 - uTime * 0.9) * 0.008;
    float wave3 = sin((uv.x + uv.y) * 22.0 + uTime * 0.7) * 0.006;
    float dist = distance(uv, uMouse);
    float ripple = smoothstep(0.35, 0.0, dist) * 0.08;
    vec2 distorted = uv + vec2(wave1 + wave2, wave2 + wave3);
    float refract = sin(distorted.x * 30.0 + distorted.y * 20.0 + uTime) * 0.015;
    vec3 baseColor = vec3(0.04, 0.04, 0.06);
    float topHighlight = smoothstep(0.7, 1.0, uv.y) * 0.12;
    float caustic = sin(distorted.x * 40.0 + uTime * 1.5) * sin(distorted.y * 35.0 - uTime * 1.1);
    caustic = caustic * caustic * 0.04;
    vec3 color = baseColor;
    color += vec3(wave1 + wave2 + wave3) * 0.5;
    color += ripple * vec3(0.15, 0.15, 0.18);
    color += refract;
    color += topHighlight;
    color += caustic;
    color += smoothstep(0.25, 0.0, dist) * vec3(0.06, 0.06, 0.08);
    gl_FragColor = vec4(color, 0.38);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

const Navbar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mouseRef = useRef([0.5, 0.5]);
  const rafRef = useRef<number>(0);
  const [activeSection, setActiveSection] = useState("#hero");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.link.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const nav = navRef.current;
    if (!canvas || !nav) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, VS_SOURCE));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");

    function resize() {
      canvas!.width = nav!.offsetWidth * (window.devicePixelRatio || 1);
      canvas!.height = nav!.offsetHeight * (window.devicePixelRatio || 1);
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = nav!.getBoundingClientRect();
      mouseRef.current = [
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height,
      ];
    };
    nav.addEventListener("mousemove", onMouseMove);

    const start = performance.now();
    function render() {
      const time = (performance.now() - start) / 1000;
      gl!.uniform2f(uResolution, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, time);
      gl!.uniform2f(uMouse, mouseRef.current[0], mouseRef.current[1]);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      nav.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <nav ref={navRef} id="navbar" className="navbar-capsule">
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "saturate(180%) brightness(1.1)",
          borderRadius: "inherit",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-[2] flex items-center justify-between w-full h-full">
        <div className="flex items-center h-full">
          <a
            href="#hero"
            className="px-5 h-full flex items-center font-heading text-[16px] text-primary border-r border-primary/10"
          >
            Arjun R
          </a>
        </div>

        <div className="flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className={`nav-link-item flex items-center gap-1.5 ${
                activeSection === item.link ? "nav-link-active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="w-10" />
      </div>
    </nav>
  );
};

export default Navbar;
