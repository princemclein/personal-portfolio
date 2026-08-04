import "../css/Projects.css";
import project1 from "../assets/personal-portfoliov1.png";
import project2 from "../assets/savor-street.png";
import project3 from "../assets/acad-commission-portfolio.png";
import project4 from "../assets/ssci-website.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-content">
        <p className="projects-label">Projects</p>
        <h2 className="projects-headline">Things I've Built.</h2>
        <Link to="/projects" className="see-all-link">
          See all projects <span className="arrow">→</span>
        </Link>
      </div>
      {/* Project Cards */}
      {/* Card 1: Personal Portfolio V1 */}
      <div className="projects-grid">
        <div className="project-card">
          <img
            src={project1}
            alt="Personal Portfolio (V1)"
            className="project-img"
          />
          <p className="project-title">Personal Portfolio</p>
          <p className="project-description">
            My first responsive portfolio website featuring a modern layout and
            interactive project showcase.
          </p>
          <div className="project-tags">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <a
            href="https://princetechportfolio.vercel.app/"
            target="blank"
            className="project-link"
          >
            View My Project <span className="arrow">→</span>
          </a>
        </div>

        {/* Card 2: Savor Street */}
        <div className="project-card">
          <img
            src={project2}
            alt="Savor Street Landing Page"
            className="project-img"
          />
          <p className="project-title">Savor Street</p>
          <p className="project-description">
            A modern restaurant landing page showcasing Savor Street's warm
            hospitality and Asian-inspired cuisine.
          </p>
          <div className="project-tags">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <a
            href="https://savor-street-six.vercel.app/"
            className="project-link"
          >
            View My Project <span className="arrow">→</span>
          </a>
        </div>

        {/* Card 3: Academic Commission Portfolio */}
        <div className="project-card">
          <img
            src={project3}
            alt="Academic Commission Portfolio"
            className="project-img"
          />
          <p className="project-title">Academic Commission Portfolio</p>
          <p className="project-description">
            A clean portfolio website showcasing academic commissions, services,
            and completed client projects.
          </p>
          <div className="project-tags">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
          <a
            href="https://princetech-acad-commission-portfoli.vercel.app/"
            className="project-link"
          >
            View My Project <span className="arrow">→</span>
          </a>
        </div>

        {/* Card 4: SSCI Website */}
        <div className="project-card">
          <img src={project4} alt="SSCI Website" className="project-img" />
          <p className="project-title">SSCI User-Interface</p>
          <p className="project-description">
            A responsive organization website UI built to showcase SSCI's
            mission, activities, and student initiatives.
          </p>
          <div className="project-tags">
            <span>Figma</span>
          </div>
          <a href="#" className="project-link">
            View My Project <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Projects;
