// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import Home from './pages/Home';
import About from './pages/About';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Footer from './components/Footer';
import "./index.css";

const App = () => {
  return (
    <>
      <Header /> {/* Include the Header component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer /> {/* Footer component */}
    </>
  );
};

export default App;
