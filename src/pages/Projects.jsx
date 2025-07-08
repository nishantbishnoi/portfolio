// src/pages/Projects.jsx
import React from "react";
import "../styles/Projects.css";
import foodAppImg from "./Screenshot 2025-07-03 154535.png";
import formBuilderImg from "./Screenshot 2025-07-08 094343.png";
import portfolioImg from "./Screenshot 2025-07-03 171236.png";

const projects = [
  {
    title: "Food Ordering App",
    description: "A real-time food ordering system with cart, admin, and kitchen views using React, Node.js, MongoDB.",
    image: foodAppImg,
    live: "https://macdonals.vercel.app/",
    github: "https://github.com/your-username/food-app"
  },
  {
    title: "No-Code Form Builder",
    description: "Drag-and-drop builder with dynamic form fields and MongoDB data saving using React & Express.",
    image: formBuilderImg,
    live: "https://studynotion-online.vercel.app/",
    github: "https://github.com/your-username/form-builder"
  },
  {
    title: "Personal Portfolio",
    description: "Responsive portfolio showcasing skills, education, and live projects with animations and smooth scroll.",
    image: portfolioImg,
    live: "https://portfolio-mocha-three-77.vercel.app",
    github: "https://github.com/your-username/portfolio"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-links">
                <a href={proj.live} target="_blank" rel="noreferrer">Live Demo</a>
          
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
