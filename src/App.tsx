import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import all the pages
import AboutPage from "./Pages/About";
import CertificationsPage from "./Pages/Certifications";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";
import ProjectsPage from "./Pages/Projects";
import ResumePage from "./Pages/Resume";
import SkillsPage from "./Pages/Skills";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </div>
  );
}

export default App;
