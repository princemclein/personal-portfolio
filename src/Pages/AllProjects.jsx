import { Link } from "react-router-dom";
import "../css/AllProjects.css";
import project1 from "../assets/personal-portfoliov1.png";
import project2 from "../assets/savor-street.png";
import project3 from "../assets/acad-commission-portfolio.png";
import project4 from "../assets/web-calculator.png";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A clean, responsive portfolio that balances storytelling and visual simplicity.",
    tags: ["HTML5", "CSS", "JAVASCRIPT"],
    image: project1,
    link: "https://princetechportfolio.vercel.app/",
  },
  {
    title: "Savor Street",
    description:
      "A warm restaurant landing page designed to feel inviting, polished, and easy to navigate.",
    tags: ["HTML5", "CSS", "JAVASCRIPT"],
    image: project2,
    link: "https://savor-street-six.vercel.app/",
  },
  {
    title: "Academic Commission Portfolio",
    description:
      "A refined project showcase built to highlight services, work, and professional presence.",
    tags: ["HTML5", "CSS", "JAVASCRIPT"],
    image: project3,
    link: "https://princetech-acad-commission-portfoli.vercel.app/",
  },
  {
    title: "SSCI User Interface",
    description:
      "A responsive calculator built with HTML, CSS, and JavaScript using DOM Manipulation and Event Handling",
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
    image: project4,
    link: "https://prince-web-calculator.vercel.app/",
  },
];

function AllProjects() {
  return (
    <main className="all-projects-page">
      <section className="all-projects-hero">
        <Link to="/" className="back-home-link">
          <span>←</span> Back to home
        </Link>
        <p className="all-projects-label">Selected Work</p>
        <h1 className="all-projects-title">Projects</h1>
        <p className="all-projects-intro">
          A collection of digital experiences shaped with clarity, restraint,
          and intention.
        </p>
      </section>

      <section className="all-projects-grid" aria-label="Project gallery">
        {projects.map((project) => (
          <article className="all-project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              className="all-project-img"
            />
            <div className="all-project-card-body">
              <h2 className="all-project-card-title">{project.title}</h2>
              <p className="all-project-card-description">
                {project.description}
              </p>
              <div className="all-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="blank"
                className="all-project-link"
              >
                View project <span className="arrow">→</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AllProjects;
