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
      { name: "/javascript", path: "/images/logos/javascript.png" },
      { name: "/typescript", path: "/images/logos/typescript.png" },
      { name: "/html", path: "/images/logos/html.png" },
      { name: "/css", path: "/images/logos/css.png" },
    ],
  },
  {
    title: "frameworks_",
    logos: [
      { name: "/node.js", path: "/images/logos/nodejs.png" },
      { name: "/express", path: "/images/logos/express.png" },
      { name: "/nestjs", path: "/images/logos/nestjs.png" },
      { name: "/react", path: "/images/logos/react.png" },
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
      { name: "/postgresql", path: "/images/logos/postgresql.png" },
      { name: "/mysql", path: "/images/logos/mysql.png" },
      { name: "/mongodb", path: "/images/logos/mongodb.png" },
    ],
  },
  {
    title: "infra_",
    logos: [
      { name: "/docker", path: "/images/logos/docker.png" },
      { name: "/redis", path: "/images/logos/redis.png" },
      { name: "/aws", path: "/images/logos/aws.png" },
      { name: "/cloudflare", path: "/images/logos/cloudflare.png" },
    ],
  },
  {
    title: "devtools_",
    logos: [
      { name: "/eslint", path: "/images/logos/eslint.png" },
      { name: "/prettier", path: "/images/logos/prettier.png" },
      { name: "/husky", path: "/images/logos/husky.png" },
      { name: "/jest", path: "/images/logos/jest.png" },
      { name: "/webpack", path: "/images/logos/webpack.png" },
      { name: "/swagger", path: "/images/logos/swagger.png" },
    ],
  },
  {
    title: "tools_",
    logos: [
      { name: "/git", path: "/images/logos/git.png" },
      { name: "/postman", path: "/images/logos/postman.png" },
      { name: "/vscode", path: "/images/logos/vscode.png" },
      { name: "/visualstudio", path: "/images/logos/visualstudio.png" },
    ],
  },
  {
    title: "learning_",
    logos: [
      { name: "/c#", path: "/images/logos/csharp.png" },
      { name: "/python", path: "/images/logos/python.png" },
      { name: "/java", path: "/images/logos/java.png" },
      { name: "/php", path: "/images/logos/php.png" },
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
        <span>/* </span>Hello, my name is Manuel Segarra and I&apos;m a software
        developer. I thrive on learning and solving complex problems. I have
        experience in the iGaming industry, where I led the backend team for
        Flabet — the official betting platform of Brazilian football club
        Flamengo, under PixBet. Outside of coding, I&apos;m passionate about
        music, bass guitar, cars, and rock climbing.<span> */</span>
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
                  <img src={logo.path} alt={logo.name} title={logo.name} />
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
