import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import "./app.css";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
