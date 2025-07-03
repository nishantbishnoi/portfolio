// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/nishantbishnoi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="linkedin.com/in/nishant-bishnoi-18a357267" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="Nishantbishnoi1200@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
