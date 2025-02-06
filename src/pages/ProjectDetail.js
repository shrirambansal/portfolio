// src/pages/ProjectDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import img3 from '../assets/images/img3.png'; // Update this path if needed
import img4 from '../assets/images/img4.png'; // Update this path if needed
import img5 from '../assets/images/img5.png'; // Update this path if needed
import img6 from '../assets/images/img6.png'; // Update this path if needed

const ProjectDetailSection = styled.section`
  padding: 80px 20px;
  background-color: #ecf0f1;
  color: #2c3e50;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .project-image {
    width: 100%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project-description {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
    max-width: 800px;
    margin: 20px auto;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }

  .tech-item {
    font-size: 1rem;
    color: #3498db;
    background-color: #ecf0f1;
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .project-links {
    text-align: center;
    margin-top: 40px;
  }

  .project-links a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #3498db;
    margin: 10px;
    padding: 10px 20px;
    border: 2px solid #3498db;
    border-radius: 5px;

    &:hover {
      background-color: #3498db;
      color: white;
    }
  }

  @media (max-width: 768px) {
    .tech-stack {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data (replace this with real data or fetch from an API)
  const projects = [
    {
        id: 1,
        name: "Todo App",
        imageUrl: img3,
        description: "A full-stack web app for tasks. The application allows users to add, update, and delete tasks, storing them in a PostgreSQL database hosted on Railway..",
        techStack: ["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"],
        liveLink: "https://web-production-427a9.up.railway.app/",
        githubLink: "https://github.com/shrirambansal/Todoapp"
      },
    {
        id: 2,
        name: "Hyper Chaotic Encryption Tool",
        imageUrl: img4,
        description: "The Hyper Chaotic Encryption Tool is a Flask-based web application that provides encryption and decryption functionalities using a hyper-chaotic algorithm. The tool is designed to be user-friendly, offering a web interface for users to input messages and encryption keys",
        techStack: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
        liveLink: "https://flask-encryption-tool.onrender.com/",
        githubLink: "https://github.com/shrirambansal/hyper"
      },
    {
        id: 3,
        name: "Reading App",
        imageUrl: img5,
        description: "A full-stack web application for book lovers. The Reading App allows users to store the book details, view book details, and save books to their reading list.",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://reading-zeta.vercel.app/",
        githubLink: "https://github.com/shrirambansal/reading"
       },
    {
        id: 4,
        name: "Login and Registration System",
        imageUrl: img6,
        description: "A full-stack web application for login and  registration system in which having user creating form also.",
        techStack: ["HTML", "CSS", "JavaScript", "Django", "Firebase"],
        liveLink: "https://loginandregist.vercel.app/",
        githubLink: "https://github.com/shrirambansal/loginandregister"
       } 
    
    // Add more projects here
  ];

  // Find the project by ID
  const project = projects.find(project => project.id === parseInt(id));

  return (
    <ProjectDetailSection>
      <h2>{project?.name}</h2>
      <img src={project?.imageUrl} alt={project?.name} className="project-image" />
      <div className="project-description">
        <p>{project?.description}</p>
      </div>

      <div className="tech-stack">
        {project?.techStack.map((tech, index) => (
          <div key={index} className="tech-item">{tech}</div>
        ))}
      </div>

      <div className="project-links">
        {project?.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live Demo</a>}
        {project?.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
      </div>
    </ProjectDetailSection>
  );
};

export default ProjectDetail;
