import React from "react";
import "./index.css";

function AboutPage() {
  return (
    <div>
      <p>
        Hello, my name is Manuel Segarra and I&apos;m a full-stack web developer.
        I love learning and solving problems. Beyond coding, my main interests
        are music, playing the bass guitar, and rock climbing.
      </p>

      <section>
        <h3>Languages</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section>
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </section>

      <section>
        <h3>Libraries</h3>
        <ul>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </section>

      <section>
        <h3>Databases</h3>
        <ul>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </section>

      <section>
        <h3>Tools</h3>
        <ul>
          <li>Git</li>
          <li>Postman</li>
          <li>Visual Studio Code</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
