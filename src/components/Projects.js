// src/pages/Projects.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img3 from '../assets/images/img3.png'; // Update this path if needed
import img4 from '../assets/images/img4.png'; // Update this path if needed
import img5 from '../assets/images/img5.png'; // Update this path if needed
import img6 from '../assets/images/img6.png'; // Update this path if needed

// Sample project data (you can replace this with real data)
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
    description: "A Python-based Hyper Chaotic Encryption Tool for secure data encryption.",
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

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const ProjectCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }

  .project-info {
    padding: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <ProjectsList>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <img src={project.imageUrl} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`}>View Details</Link>
            </div>
          </ProjectCard>
        ))}
      </ProjectsList>
    </div>
  );
};

export default Projects;
