// src/pages/Skills.js

import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
  color: #2c3e50;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .skill-item {
    text-align: center;
    width: 150px;
    padding: 20px;
    border: 2px solid #3498db;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 10px;
    }

    p {
      font-size: 1rem;
      color: #7f8c8d;
    }
  }

  @media (max-width: 768px) {
    .skills-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const skillsData = [
  { title: 'Python', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { title: 'JavaScript', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { title: 'MongoDB', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmT8HtltidnDUJvGcRYzg8B9h8zM-2O-FZw&s' },
  { title: 'Django', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
  { title: 'Flask', imgSrc: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png' },
  { title: 'Git', imgSrc: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png' },
  // Add more skills here
];

const Skills = () => {
  return (
    <SkillsSection>
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.imgSrc} alt={skill.title} />
            <h3>{skill.title}</h3>
            <p>Proficient in {skill.title}</p>
          </div>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
