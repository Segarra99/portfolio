import React from "react";
import "./index.css";
import { motion as m } from "framer-motion";

interface SkillSectionProps {
  title: string;
  logos: { name: string; path: string }[];
}

const skillsData: SkillSectionProps[] = [
  {
    title: "languages_",
    logos: [
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/typescript", path: "/images/logos/typescript.png" },
    ],
  },
  {
    title: "frameworks_",
    logos: [
      { name: "/react", path: "/images/logos/react.png" },
      { name: "/node.js", path: "/images/logos/nodejs.png" },
      { name: "/express", path: "/images/logos/express.png" },
      { name: "/nestjs", path: "/images/logos/nestjs.png" },
    ],
  },
  {
    title: "libraries_",
    logos: [
      { name: "/bootstrap", path: "/images/logos/bootstrap.png" },
      { name: "/tailwind", path: "/images/logos/tailwind-css.png" },
      { name: "/materialui", path: "/images/logos/material.png" },
    ],
  },
  {
    title: "databases_",
    logos: [
      { name: "/mongodb", path: "/images/logos/mongodb.png" },
      { name: "/postgresql", path: "/images/logos/postgresql.png" },
    ],
  },
  {
    title: "tools_",
    logos: [
      { name: "/git", path: "/images/logos/git.png" },
      { name: "/postman", path: "/images/logos/postman.png" },
      { name: "/vscode", path: "/images/logos/vscode.png" },
    ],
  },
  {
    title: "technologies i'm learning on my free time_",
    logos: [
      { name: "/c#", path: "/images/logos/csharp.png" },
      { name: "/python", path: "/images/logos/python.png" },
      { name: "/java", path: "/images/logos/java.png" },
      { name: "/php", path: "/images/logos/php.png" },
      { name: "/visualstudio", path: "/images/logos/visualstudio.png" },
    ],
  },
];

const AboutPage: React.FC = () => (
  <m.div
    id="about"
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    exit={{ x: "-100%" }}
  >
    <div id="info">
      <p>
        <span>/* </span>Hello, my name is Manuel Segarra and I&apos;m a full-stack web developer.
        I love learning and solving problems. Beyond coding, my main interests are
        music, playing the bass guitar, cars and rock climbing.<span> */</span>
      </p>
      <img id="bass" src="/images/bass.webp" alt="bass" />
    </div>
    <div id="skills">
      {skillsData.map(({ title, logos }, index) => (
        <m.section
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ x: "-100%" }}
        >
          <h3>{title}</h3>
          <ul className="logo-list-about">
            {logos.map((logo, logoIndex) => (
              <li key={logoIndex}>
                <div className="logo">
                  <img src={logo.path} alt={logo.name} title={logo.name}/>
                </div>
              </li>
            ))}
          </ul>
        </m.section>
      ))}
    </div>
  </m.div>
);

export default AboutPage;
