import { Home } from "lucide-react";

const navLinks = [
  { icon: <Home size={15} />, link: "#hero" },
  { label: "PROJECTS", link: "#projects" },
  { label: "EXPERIENCE", link: "#experience" },
  { label: "EDUCATION", link: "#education" },
];

const Navbar = () => {
  return (
    <nav className="navbar-capsule">
      {/* Left: Logo */}
      <div className="flex items-center h-full">
        <a
          href="#hero"
          className="px-5 h-full flex items-center font-heading text-[17px] text-primary border-r border-primary/10"
        >
          Arjun R
        </a>
      </div>

      {/* Center: Nav Links */}
      <div className="flex items-center gap-1">
        {navLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="nav-link-item flex items-center gap-1.5"
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>

      {/* Right: placeholder */}
      <div className="w-10" />
    </nav>
  );
};

export default Navbar;
