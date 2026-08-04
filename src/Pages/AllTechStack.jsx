import { Link } from "react-router-dom";
import "../css/AllTechStack.css";

const techStackSections = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Python", "Java"],
  },
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "React", "Bootstrap"],
  },
  {
    title: "Backend and Database",
    items: ["*Currently learning*"],
  },
  {
    title: "Design & Creative Tools",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
  },
  {
    title: "Tools & Version Control",
    items: ["Git", "GitHub", "VS Code", "Eclipse IDE"],
  },
];

function AllTechStack() {
  return (
    <main className="all-tech-stack-page">
      <section className="all-tech-stack-hero">
        <Link to="/" className="back-home-link">
          <span>←</span> Back to home
        </Link>
        <p className="all-tech-stack-label">Tech Stack</p>
        <h1 className="all-tech-stack-title">Tools I Use</h1>
        <p className="all-tech-stack-intro">
          A curated overview of the tools and technologies I use to design,
          build, and refine digital experiences.
        </p>
      </section>

      <section
        className="all-tech-stack-grid"
        aria-label="Tech stack categories"
      >
        {techStackSections.map((section) => (
          <article className="all-tech-stack-card" key={section.title}>
            <h2 className="all-tech-stack-card-title">{section.title}</h2>
            <div className="all-tech-stack-items">
              {section.items.map((item) => (
                <span key={item} className="all-tech-stack-item">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AllTechStack;
