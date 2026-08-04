import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import TechStack from "../components/TechStack.jsx";
import Certification from "../components/Certification.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function HomePage() {
  return (
    <>
      {/* Header */}
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Projects Section */}
        <Experience />

        {/* Projects Section */}
        <TechStack />

        {/* Certification Section */}
        <Certification />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default HomePage;
