// src/pages/About.js

import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: #ecf0f1;
  color: #2c3e50;
`;

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;

  li {
    background-color: #3498db;
    color: white;
    padding: 8px 20px;
    font-size: 1rem;
    border-radius: 20px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, I'm Shriram Bansal, a passionate Full Stack Developer with a focus on HTML, CSS, JavaScript, Bootstrap, Python (Flask, Django), and Machine Learning. I’m currently pursuing my master's degree in Computer Science and Engineering (M. Tech CSE). My journey in software development began with a strong interest in problem-solving and building innovative solutions.
          <br /><br />
          I have experience in creating web applications, and working with various databases. I enjoy working with modern technologies and continuously learning new concepts to improve my skills and stay up to date with the latest trends in tech.
          <br /><br />
          I'm excited to leverage my skills to contribute to projects that make a difference and to continue growing as a developer.
        </Paragraph>
        
        <Heading>Skills</Heading>
        <SkillList>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>Python</li>
          <li>Flask</li>
          <li>Django</li>
          <li>Machine Learning</li>
        </SkillList>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
