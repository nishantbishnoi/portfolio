// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import profileImage from './logo.png';

const Home = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1><span className="gradient-text">HELLO I'M NISHANT</span></h1>
        <h2>WEB DEVELOPER</h2>
        <p>
          Frontend using HTML, CSS, JavaScript, React, and Next.js. <br />
          Backend using Node.js, Express, MongoDB. Can assist in <br />
          building robust web, mobile, and desktop applications.
        </p>
        <a href="/NISHANT_250211_111209_250515_105304.pdf" download className="download-btn">
         Download CV
       </a>

      </div>

      <div className="hero-image">
        <div className="glow-wrap">
          <img src={profileImage} alt="Nishant" />
        </div>
      </div>
    </section>
  );
};

export default Home;
