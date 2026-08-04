import "../css/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-inner">
        {/* Left Column */}
        <div className="about-content">
          <p className="about-label">About</p>
          <h2 className="about-headline">
            A creative developer driven by clarity, simplicity, and purpose.
          </h2>
        </div>

        {/* Right Column */}
        <div className="about-text">
          <p>
            I'm a creative developer and graphic designer passionate about
            building meaningful digital experiences. My work is guided by
            clarity, simplicity, and purpose, creating solutions that are both
            functional and visually engaging.
          </p>

          <p>
            Whether I'm designing visuals or developing websites, I focus on
            thoughtful details and intuitive experiences. I believe great design
            and clean code work together to solve real problems.
          </p>

          <p>
            I'm always learning, exploring new ideas, and refining my craft.
            With every project, I strive to create work that is purposeful,
            impactful, and built to last.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
