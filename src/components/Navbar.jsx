// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

// ✅ Add "skills" to the sections array
const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(sec);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home" onClick={closeMenu}>MyPortfolio</a>
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {sections.map(sec => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={closeMenu}
            className={active === sec ? 'active' : ''}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${open ? 'rotate-top' : ''}`}></div>
        <div className={`bar ${open ? 'fade-out' : ''}`}></div>
        <div className={`bar ${open ? 'rotate-bottom' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
