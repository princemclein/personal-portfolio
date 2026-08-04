import "../css/Certification.css";

const certifications = [
  {
    title: "Philippine Data Privacy Basics",
    issuer: "IDESS IT",
    date: "December 18, 2025",
    link: "https://drive.google.com/file/d/1zT0EKBBerb4OuRDxk1qjZdvSOPl1fgrR/view?usp=sharing",
  },
  {
    title: "National Certificate III in Visual Graphic Design",
    issuer: "TESDA",
    date: "March 29, 2026",
    link: "https://drive.google.com/file/d/1WTvspVkeLdDlRpWe0zdS79StVKAfyl_L/view?usp=sharing",
  },
  {
    title: "Designing with AI: the agentic UI/UX Workflow",
    issuer: "Gordon College (ADA Tech)",
    date: "May 13, 2026",
    link: "https://drive.google.com/file/d/1RcavebNh88CZVnDQtQgbxwG-dGAHK2X1/view?usp=sharing",
  },
  {
    title: "Start-up Application Ideation Participation",
    issuer: "Gordon College",
    date: "February 20, 2026",
    link: "https://drive.google.com/file/d/1DOP1mQlTfaA8hmRBgCwdEYZ3Hkn2iosQ/view?usp=sharing",
  },
];

function Certification() {
  return (
    <section className="certification-section" id="certification">
      <div className="certification-container">
        <div className="certification-header">
          <p className="certification-label">Certifications</p>
          <h2 className="certification-headline">
            Proof of the work <br />
            I've put in.
          </h2>
        </div>

        <div className="certification-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={`${cert.title}-${cert.date}`}>
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              <a href={cert.link} target="blank" className="cert-link">
                View Certificate<span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
