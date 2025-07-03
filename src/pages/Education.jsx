// src/pages/Education.jsx
import React from "react";
import "../styles/Education.css";

const educationData = [
  {
    title: "Bachelor Of Computer Application",
    institute: "University Of MGSU",
    year: "2022–2025",
  },
  {
    title: "Higher School Certificate",
    institute: "Board Of PSEB",
    year: "2020–2021",
  },
  {
    title: "Matriculation Certificate",
    institute: "Board Of PSEB",
    year: "2018–2019",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="education-heading">Education</h2>

      <div className="education-box">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="timeline">
              <span className="dot" />
              {index !== educationData.length - 1 && <span className="line" />}
            </div>

            <div className="education-content">
              <h3>{edu.title}</h3>
              <p className="institute">{edu.institute}</p>
            </div>

            <div className="education-year">{edu.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
