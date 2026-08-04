import "../css/Hero.css";
import heroImage from "../assets/hero-image.png";
import { useState, useEffect } from "react";
import resumePdf from "../assets/gonzales-resume.pdf";

const roles = ["Graphic Designer", "Web Developer"];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="name">
            <span>
              <span>PRINCE </span>
            </span>
            <span>MCLEIN GONZALES</span>
          </h1>
          {/* Hero Title */}
          <p className="hero-title">
            <span>{roles[index]}</span>
          </p>

          {/* Hero Paragraph */}
          <p id="hero-paragraph">
            I create visual identities and experiences <br />
            that help brands communicate with clarity and impact.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn1">
              View My Work
            </a>

            <a href={resumePdf} className="hero-btn2" download>
              Download CV
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Hero-Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
