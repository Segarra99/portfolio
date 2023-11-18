import React from "react";
import "./index.css";
import { motion as m } from "framer-motion";

function HomePage() {
  return (
    <m.div
      id="intro"
      className="text-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <p id="name">MANUEL SEGARRA</p>
      <p id="title">SOFTWARE DEVELOPER, FULL-STACK WEB DEVELOPER</p>
    </m.div>
  );
}

export default HomePage;
