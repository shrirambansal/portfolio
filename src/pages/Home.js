// src/pages/Home.js

import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/images/img2.png"; // Update this path if needed

// Background Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  animation: ${fadeIn} 1.5s ease-in-out;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
  }

  .text-content {
    flex: 1;
    text-align: left;
    padding: 20px;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    background: -webkit-linear-gradient(45deg, #00c6ff, #0072ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 600px;
    line-height: 1.6;
    opacity: 0.9;
  }

  .cta-button {
    padding: 12px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border: 2px solid #00c6ff;
    border-radius: 6px;
    text-decoration: none;
    background: transparent;
    transition: 0.4s;
    box-shadow: 0 0 10px rgba(0, 198, 255, 0.5);

    &:hover {
      background: #00c6ff;
      color: #0f2027;
      box-shadow: 0 0 20px rgba(0, 198, 255, 0.8);
    }
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-image {
    width: 350px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.6);
    transition: transform 0.4s ease-in-out;
  }

  .profile-image:hover {
    transform: scale(1.05);
  }

  .sentence {
            font-size: 1.5rem;
            font-weight: normal;
            position: relative;
        }

        .moving-text {
            position: relative;
            display: inline-block;
        }

        .moving-text::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            background-color: #00c6ff;
            bottom: -1px;
            left: 0;
            animation: move 3s linear infinite;
        }

        @keyframes move {
            0% {
                width: 0;
                left: 0;
            }
            50% {
                width: 100%;
                left: 0;
            }
            100% {
                width: 0;
                left: 100%;
            }
        }

  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    h1 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1rem;
    }

    .profile-image {
      width: 250px;
    }
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        {/* Text Content */}
        <div className="text-content">
          <h1>🚀 Hi, I'm Shriram Bansal</h1>
          <p>
            A passionate <span class="moving-text"><strong>Software Engineer and Developer</strong></span> specializing in <span class="moving-text">Full Stack, Python (Flask & Django), and Machine Learning.</span> I love crafting web apps and discover new things.
          </p>
          <Link to="/about" className="cta-button">
            More About Me →
          </Link>
        </div>

        {/* Profile Image */}
        <div className="image-container">
          <img src={ProfileImage} alt="Shriram Bansal" className="profile-image" />
        </div>
      </div>
    </HomeSection>
  );
};

export default Home;
