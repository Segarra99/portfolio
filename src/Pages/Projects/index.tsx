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
    name: "<Lisbon Crosser />",
    image: "/images/projects/lisbon-crosser.png",
    description: "<span className='curly-bracket'>{</span> a simple javascript game inspired by frogger. the objective is to grab 3 pastries from the other side of the river without being ran over. <span className='curly-bracket'>}</span>",
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
    name: "<CliffTrack Lisbon />",
    image: "/images/projects/clifftrack-lisbon.png",
    description: "<span className='curly-bracket'>{</span> a web app designed to help users find climbing locations in lisbon, users can leave reviews and add routes to their favorites. <span className='curly-bracket'>}</span>",
    technologies: [
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/mongodb", path: "/images/logos/mongodb.png" },
      { name: "/express", path: "/images/logos/express.png" },
      { name: "/node.js", path: "/images/logos/nodejs.png" },
      { name: "/handlebars.js", path: "/images/logos/handlebars.png" },
      { name: "/bootstrap", path: "/images/logos/bootstrap.png" },
      { name: "/cloudinary", path: "/images/logos/cloudinary.webp" },
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
    name: "<OffBeat />",
    image: "/images/projects/offbeat.png",
    description: " <span className='curly-bracket'>{</span> a social network where musicians and bands can find eachother for gigs based on location, instrument played, genres, etc. users can make posts to the feed, comment and like said posts as well as add friends and direct message them. <span className='curly-bracket'>}</span>",
    technologies: [
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/mongodb", path: "/images/logos/mongodb.png" },
      { name: "/express", path: "/images/logos/express.png" },
      { name: "/react", path: "/images/logos/react.png" },
      { name: "/node.js", path: "/images/logos/nodejs.png" },
      { name: "/materialui", path: "/images/logos/materialui.png" },
      { name: "/cloudinary", path: "/images/logos/cloudinary.webp" },
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
    name: "<Java Blackjack />",
    image: "/images/projects/java-blackjack.png",
    description: "<span className='curly-bracket'>{</span> a simple blackjack game where you can bet money, i made this in my free time to improve my java skills. <span className='curly-bracket'>}</span>",
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
    name: "<C# Snake />",
    image: "/images/projects/csharp-snake.png",
    description: "<span className='curly-bracket'>{</span> a simple snake game, i made this in my free time to improve my c# skills. <span className='curly-bracket'>}</span>",
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
    name: "<NestJS Movie API />",
    image: "/images/projects/nestjsapi.png",
    description: "<span className='curly-bracket'>{</span> a movie api i built to further improve my skills in the technologies I used, particularly sql. <span className='curly-bracket'>}</span>",
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
      id="projects"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ x: "-100%" }}
    ></m.div>
  );
}

export default ProjectsPage;
