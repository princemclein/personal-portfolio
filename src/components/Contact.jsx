import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-label">Contact</p>
          <h2 className="contact-headline">
            Let's build
            <br />
            something together.
          </h2>
          <p className="contact-copy">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Fill out the form or reach me directly using the details
            below.
          </p>

          <div className="contact-info-list">
            <a
              className="contact-info-link"
              href="mailto:princemcleinjgonzales@gmail.com"
            >
              <span>princemcleinjgonzales@gmail.com</span>
              <span className="arrow">→</span>
            </a>
            <a
              className="contact-info-link"
              href="https://calendly.com/princemcleinjgonzales/new-meeting"
            >
              <span>Schedule a call</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form
            className="contact-form"
            action="https://formspree.io/f/mpqveodw"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                name="message"
                placeholder="Your message"
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
