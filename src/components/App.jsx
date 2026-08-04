import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";
import AllProjects from "../Pages/AllProjects.jsx";
import AllExperience from "../Pages/AllExperience.jsx";
import AllTechStack from "../Pages/AllTechStack.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/experience" element={<AllExperience />} />
      <Route path="/tech-stack" element={<AllTechStack />} />
    </Routes>
  );
}

export default App;
