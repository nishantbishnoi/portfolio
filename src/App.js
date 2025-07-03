// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';         // ✅ Skills
import Education from './pages/Education';   // ✅ Education
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>       {/* ✅ Skills Section */}
      <Education />                                   {/* ✅ Add here directly, no section ID */}
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </main>
    <Footer />
  </>
);

export default App;
