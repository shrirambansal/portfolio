// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0px 0px 10px rgba(0, 198, 255, 0.9);
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #3498db;
      text-decoration: underline #3498db solid 3px;
      transition: color 0.3s;
      text-underline-offset: 8px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        {/* Logo or Website Name */}
        <Logo>SRB</Logo>

        {/* Navigation Links */}
        <NavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
