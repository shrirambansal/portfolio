// src/pages/Resume.js

import React from 'react';
import styled from 'styled-components';

const ResumeSection = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
  color: #2c3e50;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.8rem;
    margin-top: 40px;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
  }

  .experience, .education, .skills {
    margin-top: 20px;
  }

  .item {
    margin-bottom: 20px;
  }

  .item h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  .item p {
    font-size: 1.1rem;
    margin: 5px 0;
  }

  .date {
    font-style: italic;
    color: #7f8c8d;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    .section-title {
      font-size: 1.6rem;
    }
  }
`;

const Resume = () => {
  return (
    <ResumeSection>
      <h2>Resume</h2>

      {/* Work Experience Section */}
      <div className="experience">
        <h3 className="section-title">Work Experience</h3>
        <div className="item">
          <h3>Python Developer Intern - InnoByte Services</h3>
          <p className="date">October 2024 - November 2024</p>
          <p>Worked on developing Python-based solutions, contributing to backend APIs, and assisting in data processing tasks. Gained hands-on experience in Python development, databases, and cloud platforms.</p>
        </div>
        {/* Add more work experiences here */}
      </div>

      {/* Education Section */}
      <div className="education">
        <h3 className="section-title">Education</h3>
        <div className="item">
          <h3>M.Tech in Computer Science and Engineering</h3>
          <p className="date">Expected Graduation: 2025</p>
          <p>Amity University - CGPA: 9.41</p>
        </div>
        <div className="item">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p className="date">Expected Graduation: 2025</p>
          <p>Amity University</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h3 className="section-title">Skills</h3>
        <ul>
          <li>Programming Languages: Python, JavaScript, C++</li>
          <li>Web Development: HTML, CSS, JavaScript, React, Node.js, Express</li>
          <li>Backend Frameworks: Python Flask, Django</li>
          <li>Database Management: MongoDB, Firebase Firestore</li>
          <li>Machine Learning: Scikit-learn, TensorFlow</li>
          <li>Version Control: Git, GitHub</li>
          {/* Add more skills here */}
        </ul>
      </div>

      {/* Projects Section */}
      <div className="projects">
        <h3 className="section-title">Projects</h3>
        <div className="item">
          <h3>Stock and Inventory Management App</h3>
          <p>A full-fledged inventory management system with features like product management, expense tracking, reports, and more. Built using Flutter and Firebase.</p>
        </div>
        <div className="item">
          <h3>Expense Tracking System</h3>
          <p>A Python-based expense tracking system with MongoDB for storing expenses. It includes features like user authentication and CRUD operations for managing expenses.</p>
        </div>
        {/* Add more projects here */}
      </div>
    </ResumeSection>
  );
};

export default Resume;
