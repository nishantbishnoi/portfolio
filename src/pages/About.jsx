// src/pages/About.jsx
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <p className="about-description">
          Hi, my name is <strong>Nishant Bishnoi</strong> and I recently completed my web development course at Programming Hero.
          I have begun my journey as a <strong>MERN Stack Developer</strong>, dedicating most of my waking hours to learning,
          designing, programming, and operating full stack applications using MongoDB, Express.js, React, and Node.js.
          <br /><br />
          Apart from this, I love to explore new technologies, mentor aspiring developers, review code repositories,
          and read books on everything related to web development. I am passionate about creating innovative and efficient solutions,
          and you can find most of my projects here.
        </p>

        <div className="about-details">
          <p><strong>Name:</strong> Nishant</p>
          <p><strong>Nationality:</strong> India</p>
          <p><strong>Phone:</strong> +91 8302791727</p>
          <p><strong>Email:</strong> nishantbishnoi1200@gmail.com</p>
          <p><strong>Language:</strong>English , Hindi</p>
        </div>
      </div>
    </section>
  );
};

export default About;
