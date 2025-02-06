// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 5px 5px;
  text-align: center;

  .social-links {
    margin-top: 5px;
  }

  .social-links a {
    color: white;
    margin: 0 15px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #3498db;
  }

  p {
    font-size: 1rem;
    margin-top: 20px;
  }

  a {
    transition: color 0.3s;
  }

  @media (max-width: 768px) {
    .social-links a {
      font-size: 1.2rem;
      margin: 0 10px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shrirambansal/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/shrirambansal" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* Add more social media links as needed */}
      </div>
      <p>© 2025 Shriram Bansal. All Rights Reserved.</p>
    </FooterSection>
  );
};

export default Footer;
