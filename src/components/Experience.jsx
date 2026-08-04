import { Link } from "react-router-dom";
import "../css/Experience.css";

const experienceData = [
  {
    role: "Administrative Assistant",
    org: "SK Barangay Employment Program (SK BEP)",
    desc: "Provided administrative support through the SK Barangay Employment Program, assisting with document processing, records management, and front-desk services.",
    tags: ["Microsoft Word", "Microsoft Excel"],
  },
  {
    role: "Graphic Design Intern",
    org: "IDESS IT",
    desc: "Designed a promotional brochure for a newly launched mobile application, ensuring clear visual hierarchy and effective communication of key features and benefits.",
    tags: ["Canva", "Microsoft Word"],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Project-based Freelance",
    desc: "Handled freelance graphic design projects for various clients, creating posters, infographics, social media graphics, and other visual materials tailored to their needs.",
    tags: ["Canva", "Adobe Illustrator", "Adobe Photoshop"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <div className="experience-content">
          <p className="experience-label">Experience</p>
          <h2 className="experience-headline">Where I've worked and grown.</h2>
          <span className="line"></span>
          <p className="experience-subline">
            Every project is an opportunity to learn, embrace new challenges,
            and grow. Each experience shapes the way I think, create, and solve
            problems.
          </p>
        </div>

        <div className="experience-list">
          {/* Render each card dynamically from the data array. */}
          {experienceData.map((item) => (
            <div className="experience-card" key={item.role}>
              <h3 className="experience-role">{item.role}</h3>
              <p className="experience-org">{item.org}</p>
              <p className="experience-desc">{item.desc}</p>

              <div className="experience-tags">
                {/* Render nested tags with a second .map() loop. */}
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}

          <Link to="/experience" className="see-more-link">
            See more experience <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Experience;
