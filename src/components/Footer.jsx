import "../css/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-heading-group">
            <h2 className="footer-headline">Let's build something together.</h2>
            <p className="footer-message">
              Open to opportunities, collaborations, and creative projects.
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/princemcleingonzales"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/prin.cemclein/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/prince-mclein-gonzales-b4a533396/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/princemclein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Prince Mclein Gonzales</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
