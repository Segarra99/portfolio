// App.tsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/About";
import CertificationsPage from "./pages/Certifications";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ResumePage from "./pages/Resume";
import SkillsPage from "./pages/Skills";
import "./App.css";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
