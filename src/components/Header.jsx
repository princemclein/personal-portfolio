import { useState, useEffect } from "react";
import "../css/Header.css";

function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "projects",
      "experience",
      "tech-stack",
      "certification",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        threshold: [0.4, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => {
                setActive("home");
                closeMenu();
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => {
                setActive("projects");
                closeMenu();
              }}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={active === "experience" ? "active" : ""}
              onClick={() => {
                setActive("experience");
                closeMenu();
              }}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#tech-stack"
              className={active === "tech-stack" ? "active" : ""}
              onClick={() => {
                setActive("tech-stack");
                closeMenu();
              }}
            >
              Tools
            </a>
          </li>

          <li>
            <a
              href="#certification"
              className={active === "certification" ? "active" : ""}
              onClick={() => {
                setActive("certification");
                closeMenu();
              }}
            >
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" className="contact-btn" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
