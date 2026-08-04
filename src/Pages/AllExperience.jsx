import { Link } from "react-router-dom";
import "../css/AllExperience.css";

const experiences = [
  {
    role: "Administrative Assistant",
    org: "SK Barangay Employment Program (SK BEP)",
    period: "2026 (10 Days Contract)",
    description:
      "Provided administrative support through the SK Barangay Employment Program, assisting with document processing, records management, and front-desk services.",
    tags: ["Microsoft Word", "Microsoft Excel"],
  },
  {
    role: "Graphic Design Intern",
    org: "IDESS IT",
    period: "2025 (10 Days OJT)",
    description:
      "Designed a promotional brochure for a newly launched mobile application, ensuring clear visual hierarchy and effective communication of key features and benefits.",
    tags: ["Canva", "Microsoft Word"],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Project-based Freelance",
    period: "2024-2025",
    description:
      "Handled freelance graphic design projects for various clients, creating posters, infographics, social media graphics, and other visual materials tailored to their needs.",
    tags: ["Canva", "Adobe Illustrator", "Adobe Photoshop"],
  },
];

function AllExperience() {
  return (
    <main className="all-experience-page">
      <section className="all-experience-hero">
        <Link to="/" className="back-home-link">
          <span>←</span> Back to home
        </Link>
        <p className="all-experience-label">Experience</p>
        <h1 className="all-experience-title">All Experience</h1>
        <p className="all-experience-intro">
          A timeline of the roles, responsibilities, and design work that shaped
          my growth.
        </p>
      </section>

      <section className="all-experience-list" aria-label="Experience timeline">
        {experiences.map((item) => (
          <article className="all-experience-card" key={item.role}>
            <div className="all-experience-card-top">
              <p className="all-experience-period">{item.period}</p>
              <h2 className="all-experience-role">{item.role}</h2>
            </div>
            <p className="all-experience-org">{item.org}</p>
            <p className="all-experience-description">{item.description}</p>
            <div className="all-experience-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AllExperience;
