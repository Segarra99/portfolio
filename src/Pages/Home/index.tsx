import React from "react";
import "./index.css";
import { motion as m } from "framer-motion";

function HomePage() {
  return (
    <m.div
      id="intro"
      className="text-container"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ x: '-100%' }}
    >
      <p id="name">MANUEL SEGARRA</p>
      <p id="title">SOFTWARE DEVELOPER, FULL-STACK WEB DEVELOPER</p>
    </m.div>
  );
}

export default HomePage;
