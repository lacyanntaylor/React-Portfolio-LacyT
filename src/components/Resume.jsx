import React from "react";
import "./resume.css"; // Optional for styling

function Resume() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      
      <section>
        <h2>About Me</h2>
        <p>Passionate web developer with expertise in React and Node.js.</p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>XYZ University</strong> - Bachelor's in Computer Science (2020-2024)</p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <p><strong>Web Developer</strong> at ABC Company (2022-Present)</p>
        <ul>
          <li>Developed full-stack applications using React and Node.js.</li>
          <li>Improved website performance by 30%.</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>MongoDB, Express.js</li>
          <li>Git, CSS, HTML</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>Portfolio Website</strong> - A personal website showcasing my work.</p>
      </section>
    </div>
  );
}

export default Resume;
