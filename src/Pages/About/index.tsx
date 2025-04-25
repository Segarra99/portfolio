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
      { name: "/javascript", path: `${process.env.PUBLIC_URL}/images/logos/javascript.png` },
      { name: "/typescript", path: `${process.env.PUBLIC_URL}/images/logos/typescript.png` },
      { name: "/html", path: `${process.env.PUBLIC_URL}/images/logos/html.png` },
      { name: "/css", path: `${process.env.PUBLIC_URL}/images/logos/css.png` },
    ],
  },
  {
    title: "frameworks_",
    logos: [
      { name: "/node.js", path: `${process.env.PUBLIC_URL}/images/logos/nodejs.png` },
      { name: "/express", path: `${process.env.PUBLIC_URL}/images/logos/express.png` },
      { name: "/nestjs", path: `${process.env.PUBLIC_URL}/images/logos/nestjs.png` },
      { name: "/react", path: `${process.env.PUBLIC_URL}/images/logos/react.png` },
    ],
  },
  {
    title: "libraries_",
    logos: [
      { name: "/bootstrap", path: `${process.env.PUBLIC_URL}/images/logos/bootstrap.png` },
      { name: "/tailwind", path: `${process.env.PUBLIC_URL}/images/logos/tailwind-css.png` },
      { name: "/materialui", path: `${process.env.PUBLIC_URL}/images/logos/material.png` },
    ],
  },
  {
    title: "databases_",
    logos: [
      { name: "/postgresql", path: `${process.env.PUBLIC_URL}/images/logos/postgresql.png` },
      { name: "/mysql", path: `${process.env.PUBLIC_URL}/images/logos/mysql.png` },
      { name: "/mongodb", path: `${process.env.PUBLIC_URL}/images/logos/mongodb.png` },
    ],
  },
  {
    title: "infra_",
    logos: [
      { name: "/docker", path: `${process.env.PUBLIC_URL}/images/logos/docker.png` },
      { name: "/redis", path: `${process.env.PUBLIC_URL}/images/logos/redis.png` },
      { name: "/aws", path: `${process.env.PUBLIC_URL}/images/logos/aws.png` },
      { name: "/cloudflare", path: `${process.env.PUBLIC_URL}/images/logos/cloudflare.png` },
    ],
  },
  {
    title: "devtools_",
    logos: [
      { name: "/eslint", path: `${process.env.PUBLIC_URL}/images/logos/eslint.png` },
      { name: "/prettier", path: `${process.env.PUBLIC_URL}/images/logos/prettier.png` },
      { name: "/husky", path: `${process.env.PUBLIC_URL}/images/logos/husky.png` },
      { name: "/jest", path: `${process.env.PUBLIC_URL}/images/logos/jest.png` },
      { name: "/webpack", path: `${process.env.PUBLIC_URL}/images/logos/webpack.png` },
      { name: "/swagger", path: `${process.env.PUBLIC_URL}/images/logos/swagger.png` },
    ],
  },
  {
    title: "tools_",
    logos: [
      { name: "/git", path: `${process.env.PUBLIC_URL}/images/logos/git.png` },
      { name: "/postman", path: `${process.env.PUBLIC_URL}/images/logos/postman.png` },
      { name: "/vscode", path: `${process.env.PUBLIC_URL}/images/logos/vscode.png` },
      { name: "/visualstudio", path: `${process.env.PUBLIC_URL}/images/logos/visualstudio.png` },
    ],
  },
  {
    title: "learning_",
    logos: [
      { name: "/c#", path: `${process.env.PUBLIC_URL}/images/logos/csharp.png` },
      { name: "/python", path: `${process.env.PUBLIC_URL}/images/logos/python.png` },
      { name: "/java", path: `${process.env.PUBLIC_URL}/images/logos/java.png` },
      { name: "/php", path: `${process.env.PUBLIC_URL}/images/logos/php.png` },
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
      <img id="bass" src={`${process.env.PUBLIC_URL}/images/bass.webp`} alt="bass" />
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
