import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import all the pages
import Navbar from "./components/Navbar"
import AboutPage from "./pages/About";
import CertificationsPage from "./pages/Certifications";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ResumePage from "./pages/Resume";
import SkillsPage from "./pages/Skills";

function App() {
  return (
    <div>
      <Navbar />
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
