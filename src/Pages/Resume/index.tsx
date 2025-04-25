import React from "react";
import { useState } from "react";
import "./index.css";
import { motion as m } from "framer-motion";

function ResumePage() {
  const [cvClicked, setCvClicked] = useState(false);

  function handleCvClick() {
    setCvClicked(!cvClicked);
  }

  interface CertificationSectionProps {
    title: string;
    image: string;
    logos: { name: string; path: string }[];
  }

  const certificationData: CertificationSectionProps[] = [
    {
      title:
        "<span class='span'><</span>ironhack web development course <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/ironhack-web-development-course.jpeg`,
      logos: [
        {
          name: "/html",
          path: `${process.env.PUBLIC_URL}/images/logos/html.png`,
        },
        {
          name: "/css",
          path: `${process.env.PUBLIC_URL}/images/logos/css.png`,
        },
        {
          name: "/javascript",
          path: `${process.env.PUBLIC_URL}/images/logos/javascript.png`,
        },
        {
          name: "/typescript",
          path: `${process.env.PUBLIC_URL}/images/logos/typescript.png`,
        },
        {
          name: "/mongodb",
          path: `${process.env.PUBLIC_URL}/images/logos/mongodb.png`,
        },
        {
          name: "/express",
          path: `${process.env.PUBLIC_URL}/images/logos/express.png`,
        },
        {
          name: "/react",
          path: `${process.env.PUBLIC_URL}/images/logos/react.png`,
        },
        {
          name: "/node.js",
          path: `${process.env.PUBLIC_URL}/images/logos/nodejs.png`,
        },
        {
          name: "/handlebars",
          path: `${process.env.PUBLIC_URL}/images/logos/handlebars.png`,
        },
        {
          name: "/cloudinary",
          path: `${process.env.PUBLIC_URL}/images/logos/cloudinary.png`,
        },
        {
          name: "/git",
          path: `${process.env.PUBLIC_URL}/images/logos/git.png`,
        },
        {
          name: "/github",
          path: `${process.env.PUBLIC_URL}/images/logos/github.png`,
        },
        {
          name: "/bootstrap",
          path: `${process.env.PUBLIC_URL}/images/logos/bootstrap.png`,
        },
        {
          name: "/materialui",
          path: `${process.env.PUBLIC_URL}/images/logos/material.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
        {
          name: "/postman",
          path: `${process.env.PUBLIC_URL}/images/logos/postman.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>typescript essential training <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/typescript-essential-training.jpeg`,
      logos: [
        {
          name: "/typescript",
          path: `${process.env.PUBLIC_URL}/images/logos/typescript.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>career essentials in github certificate <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/career-essentials-in-github-professional-certificate.jpeg`,
      logos: [
        {
          name: "/git",
          path: `${process.env.PUBLIC_URL}/images/logos/html.png`,
        },
        {
          name: "/github",
          path: `${process.env.PUBLIC_URL}/images/logos/css.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>career essentials in software development by microsoft and linkedin <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/career-essentials-in-software-development-by-microsoft-and-linkedin.jpeg`,
      logos: [
        {
          name: "/python",
          path: `${process.env.PUBLIC_URL}/images/logos/python.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>foundational c# with microsoft <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/foundational-csharp-with-microsoft.png`,
      logos: [
        {
          name: "/c#",
          path: `${process.env.PUBLIC_URL}/images/logos/csharp.png`,
        },
        {
          name: "/visualstudio",
          path: `${process.env.PUBLIC_URL}/images/logos/visualstudio.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>introduction to career skills in software development <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/introduction-to-career-skills-in-software-development.jpeg`,
      logos: [
        {
          name: "/python",
          path: `${process.env.PUBLIC_URL}/images/logos/python.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>javascript algorithms and data structures <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/javascript-algorithms-and-data-structures.png`,
      logos: [
        {
          name: "/javascript",
          path: `${process.env.PUBLIC_URL}/images/logos/javascript.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>javascript essential training <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/javascript-essential-training.jpeg`,
      logos: [
        {
          name: "/javascript",
          path: `${process.env.PUBLIC_URL}/images/logos/javascript.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>learning php <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/learning-php.jpeg`,
      logos: [
        {
          name: "/php",
          path: `${process.env.PUBLIC_URL}/images/logos/php.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>sql essential training <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/sql-essential-training.jpeg`,
      logos: [
        {
          name: "/postgresql",
          path: `${process.env.PUBLIC_URL}/images/logos/postgresql.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>nasba sql essential training <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/nasba-sql-essential-training.jpeg`,
      logos: [
        {
          name: "/postgresql",
          path: `${process.env.PUBLIC_URL}/images/logos/postgresql.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>node.js essential training <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/nodejs-essential-training.jpeg`,
      logos: [
        {
          name: "/node.js",
          path: `${process.env.PUBLIC_URL}/images/logos/nodejs.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>practical github actions <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/practical-github-actions.jpeg`,
      logos: [
        {
          name: "/github",
          path: `${process.env.PUBLIC_URL}/images/logos/github.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>practical github code search <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/practical-github-code-search.jpeg`,
      logos: [
        {
          name: "/github",
          path: `${process.env.PUBLIC_URL}/images/logos/github.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>practical github copilot <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/practical-github-copilot.jpeg`,
      logos: [
        {
          name: "/github",
          path: `${process.env.PUBLIC_URL}/images/logos/github.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>practical github project management and collaboration <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/practical-github-project-management-and-collaboration.jpeg`,
      logos: [
        {
          name: "/github",
          path: `${process.env.PUBLIC_URL}/images/logos/github.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>programming foundations: fundamentals <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/programming-foundations-fundamentals.jpeg`,
      logos: [
        {
          name: "/python",
          path: `${process.env.PUBLIC_URL}/images/logos/python.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>programming foundations: beyond the fundamentals <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/programming-foundations-beyond-the-fundamentals.jpeg`,
      logos: [
        {
          name: "/python",
          path: `${process.env.PUBLIC_URL}/images/logos/python.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>react.js essential training <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/reactjs-essential-training.jpeg`,
      logos: [
        {
          name: "/react",
          path: `${process.env.PUBLIC_URL}/images/logos/react.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>react.js: building an interface <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/reactjs-building-an-interface.jpeg`,
      logos: [
        {
          name: "/react",
          path: `${process.env.PUBLIC_URL}/images/logos/react.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>react: creating and hosting a full-stack site <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/react-creating-and-hosting-a-full-stack-site.jpeg`,
      logos: [
        {
          name: "/react",
          path: `${process.env.PUBLIC_URL}/images/logos/react.png`,
        },
        {
          name: "/javascript",
          path: `${process.env.PUBLIC_URL}/images/logos/javascript.png`,
        },
        {
          name: "/html",
          path: `${process.env.PUBLIC_URL}/images/logos/html.png`,
        },
        {
          name: "/css",
          path: `${process.env.PUBLIC_URL}/images/logos/css.png`,
        },
        {
          name: "/express",
          path: `${process.env.PUBLIC_URL}/images/logos/express.png`,
        },
        {
          name: "/node.js",
          path: `${process.env.PUBLIC_URL}/images/logos/nodejs.png`,
        },
        {
          name: "/mongodb",
          path: `${process.env.PUBLIC_URL}/images/logos/mongodb.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>react: design patterns <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/react-design-patterns.jpeg`,
      logos: [
        {
          name: "/react",
          path: `${process.env.PUBLIC_URL}/images/logos/react.png`,
        },
        {
          name: "/vscode",
          path: `${process.env.PUBLIC_URL}/images/logos/vscode.png`,
        },
      ],
    },
    {
      title:
        "<span class='span'><</span>responsive web design <span class='span'>/></span>",
      image: `${process.env.PUBLIC_URL}/images/certifications/responsive-web-design.png`,
      logos: [
        {
          name: "/html",
          path: `${process.env.PUBLIC_URL}/images/logos/html.png`,
        },
        {
          name: "/css",
          path: `${process.env.PUBLIC_URL}/images/logos/css.png`,
        },
      ],
    },
  ];

  return (
    <m.div
      id="resume-div"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ x: "-100%" }}
    >
      {cvClicked ? (
        <m.div
          id="full-cv"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ x: "-100%" }}
        >
          <iframe
            title="Curriculum Vitae"
            width="100%"
            height="100%"
            src={`${process.env.PUBLIC_URL}/cv.pdf#view=fit`}
          ></iframe>
          <div id="back-button" onClick={handleCvClick}>
            <p>// back</p>
          </div>
        </m.div>
      ) : (
        <>
          <div id="cv">
            <h3>
              <span className="span">/*</span> curriculum vitae{" "}
              <span className="span">*/</span>
            </h3>
            <div id="cv-wrapper" onClick={handleCvClick}>
              <iframe
                title="Curriculum Vitae"
                src={`${process.env.PUBLIC_URL}/cv.pdf#toolbar=0&zoom=0&view=fit`}
                style={{ pointerEvents: "none" }}
              ></iframe>
            </div>
            <p onClick={handleCvClick}>
              <span className="span">&#123;</span> click to view or download{" "}
              <span className="span">&#125;</span>
            </p>
          </div>
          <div id="certification-section">
            <h3>
              <span className="span">/*</span> certifications{" "}
              <span className="span">*/</span>
            </h3>
            <div id="certifications">
              {certificationData.map(({ title, image, logos }, index) => (
                <m.div
                  className="certification"
                  key={index}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  exit={{ x: "-100%" }}
                >
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <img src={image} alt={title} />
                  <div className="certification-logos">
                    <h5>
                      technologies<span className="span">_</span>
                    </h5>
                    <ul className="logo-list-resume">
                      {logos.map(({ name, path }, logoIndex) => (
                        <li className="certification-logo" key={logoIndex}>
                          <img src={path} alt={name} title={name} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </>
      )}
    </m.div>
  );
}

export default ResumePage;
