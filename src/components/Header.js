// src/components/Header.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

const Header = ({ navLinks, logo, socialLinks }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="top-bar py-1">
        <Container className="justify-content-between">
          <div className="contact-icons d-flex align-items-center text-light small flex-wrap">
            <div className="d-flex align-items-center me-3 mb-2 mb-md-0">
              <FaPhone />
              <span className="ms-2">+55 (83) 91234-5678</span>
            </div>
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <FaEnvelope />
              <span className="ms-2">info@techinnovators.com</span>
            </div>
          </div>
          <SocialIcons socialLinks={socialLinks} />
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img src={logo} alt="Tech Innovators Logo" height="40" className="me-2" />
            Tech Innovators
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLinks navLinks={navLinks} linkClass="text-secondary" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
