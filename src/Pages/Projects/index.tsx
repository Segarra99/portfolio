import React from "react";
import "./index.css";
import { motion as m } from "framer-motion";

interface ProjectSectionProps {
  name: string;
  image: string;
  description: string;
  technologies: { name: string; path: string }[];
  github: { name: string; path: string }[];
}

const projectsData: ProjectSectionProps[] = [
  {
    name: "<span class='bracket'><</span>lisbon crosser <span class='bracket'>/></span>",
    image: "/images/projects/lisbon-crosser.png",
    description:
      "<span class='bracket'>{</span> a simple javascript game inspired by frogger. the objective is to grab 3 pastries from the other side of the river without being ran over. <span class='bracket'>}</span>",
    technologies: [
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/vscode", path: "/images/logos/vscode.png" },
    ],
    github: [
      {
        name: "/repository",
        path: "https://github.com/Segarra99/lisbon-crosser-js-game",
      },
    ],
  },
  {
    name: "<span class='bracket'><</span>clifftrack lisbon <span class='bracket'>/></span>",
    image: "/images/projects/clifftrack-lisbon.png",
    description:
      "<span class='bracket'>{</span> a web app designed to help users find climbing locations in lisbon, users can leave reviews and add routes to their favorites. <span class='bracket'>}</span>",
    technologies: [
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/mongodb", path: "/images/logos/mongodb.png" },
      { name: "/express", path: "/images/logos/express.png" },
      { name: "/node.js", path: "/images/logos/nodejs.png" },
      { name: "/handlebars.js", path: "/images/logos/handlebars.png" },
      { name: "/bootstrap", path: "/images/logos/bootstrap.png" },
      { name: "/cloudinary", path: "/images/logos/cloudinary.png" },
      { name: "/vscode", path: "/images/logos/vscode.png" },
      { name: "/postman", path: "/images/logos/postman.png" },
    ],
    github: [
      {
        name: "/repository",
        path: "https://github.com/Segarra99/CliffTrack-Lisbon",
      },
    ],
  },
  {
    name: "<span class='bracket'><</span>offbeat <span class='bracket'>/></span>",
    image: "/images/projects/offbeat.png",
    description:
      " <span class='bracket'>{</span> a social network where musicians and bands can find eachother for gigs based on location, instrument played, genres, etc. users can make posts to the feed, comment and like said posts as well as add friends and direct message them. <span class='bracket'>}</span>",
    technologies: [
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/mongodb", path: "/images/logos/mongodb.png" },
      { name: "/express", path: "/images/logos/express.png" },
      { name: "/react", path: "/images/logos/react.png" },
      { name: "/node.js", path: "/images/logos/nodejs.png" },
      { name: "/materialui", path: "/images/logos/material.png" },
      { name: "/cloudinary", path: "/images/logos/cloudinary.png" },
      { name: "/vscode", path: "/images/logos/vscode.png" },
      { name: "/postman", path: "/images/logos/postman.png" },
    ],
    github: [
      {
        name: "/frontend repository",
        path: "https://github.com/Segarra99/OffBeat-frontend",
      },
      {
        name: "/backend repository",
        path: "https://github.com/Segarra99/OffBeat-backend",
      },
    ],
  },
  {
    name: "<span class='bracket'><</span>java blackjack <span class='bracket'>/></span>",
    image: "/images/projects/java-blackjack.png",
    description:
      "<span class='bracket'>{</span> a simple blackjack game where you can bet money, i made this in my free time to improve my java skills. <span class='bracket'>}</span>",
    technologies: [
      { name: "/java", path: "/images/logos/java.png" },
      { name: "/vscode", path: "/images/logos/vscode.png" },
    ],
    github: [
      {
        name: "/repository",
        path: "https://github.com/Segarra99/Java-Blackjack",
      },
    ],
  },
  {
    name: "<span class='bracket'><</span>c# snake <span class='bracket'>/></span>",
    image: "/images/projects/csharp-snake.png",
    description:
      "<span class='bracket'>{</span> a simple snake game, i made this in my free time to improve my c# skills. <span class='bracket'>}</span>",
    technologies: [
      { name: "/c#", path: "/images/logos/csharp.png" },
      { name: "/visualstudio", path: "/images/logos/visualstudio.png" },
    ],
    github: [
      {
        name: "/repository",
        path: "https://github.com/Segarra99/C-Sharp-Snake",
      },
    ],
  },
  {
    name: "<span class='bracket'><</span>nestjs movie api <span class='bracket'>/></span>",
    image: "/images/projects/nestjs-api.png",
    description:
      "<span class='bracket'>{</span> a movie api i built to further improve my skills in the technologies I used, particularly sql. <span class='bracket'>}</span>",
    technologies: [
      { name: "/typescript", path: "/images/logos/typescript.png" },
      { name: "/nestjs", path: "/images/logos/nestjs.png" },
      { name: "/postgresql", path: "/images/logos/postgresql.png" },
      { name: "/swagger", path: "/images/logos/swagger.png" },
    ],
    github: [
      {
        name: "/repository",
        path: "https://github.com/Segarra99/NestJS-Movie-API",
      },
    ],
  },
];

function ProjectsPage() {
  return (
    <m.div
      id="projects-page"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ x: "-100%" }}
    >
      {projectsData.map(
        ({ name, image, description, technologies, github }, index) => (
          <m.section
            key={index}
            className="project"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ x: "-100%" }}
          >
            <div className="project-info">
              <h2 dangerouslySetInnerHTML={{ __html: name }} />
              <img
                src={image}
                alt={name}
                title={name}
                className="project-img"
              />
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="tech-info">
              <h3>
                technologies used<span className="bracket">_</span>
              </h3>
              <ul className="project-logo-list">
                {technologies.map((logo, logoIndex) => (
                  <li key={logoIndex}>
                    <div className="project-logo">
                      <img src={logo.path} alt={logo.name} title={logo.name} />
                    </div>
                  </li>
                ))}
              </ul>
              <h3>
                repository links<span className="bracket">_</span>
              </h3>
              <div id="github">
                {github.map(({ name, path }, index) => (
                  <a
                    href={path}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className="project-logo"
                  >
                    <img
                      src="/images/logos/github.png"
                      alt={name}
                      title={name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </m.section>
        )
      )}
    </m.div>
  );
}

export default ProjectsPage;
