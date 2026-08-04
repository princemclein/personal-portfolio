import { Link } from "react-router-dom";
import "../css/TechStack.css";

const categories = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Python", "Java"],
  },
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
  },
  {
    title: "Backend and Database",
    items: ["*Currently Learning*"],
  },
  {
    title: "Design & Creative Tools",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
  },
  {
    title: "Tools & Version Control",
    items: ["Git", "GitHub", "VS Code", "EclipseIDE"],
  },
];

function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-content">
        <div className="tech-stack-header">
          {/* Tech Stack Header*/}
          <p className="tech-label">TECH STACK</p>
          <h2 className="tech-headline">
            Tools I use to
            <br />
            Work, Design, and Build.
          </h2>
        </div>

        <div className="tools-grid">
          {categories.map((category, index) => (
            <div className="tech-card" key={category.title}>
              {index === 0 && (
                <Link to="/tech-stack" className="tech-link tech-link-card">
                  See full list <span className="arrow">→</span>
                </Link>
              )}

              <h3>{category.title}</h3>

              <hr />

              {/* List of Tools */}
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
