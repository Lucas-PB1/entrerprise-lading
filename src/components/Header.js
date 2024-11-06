// src/components/Header.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import NavLinks from './NavLinks';

const socialIcons = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />
};

const Header = ({ navLinks, logo, socialLinks }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="top-bar py-1">
        <Container className="justify-content-between">
          <div className="contact-icons d-flex align-items-center text-light small">
            <FaPhone /> <span className="ms-2 me-3">+55 (83) 91234-5678</span>
            <FaEnvelope /> <span className="ms-2">info@techinnovators.com</span>
          </div>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-light mx-2" aria-label={link.icon.charAt(0).toUpperCase() + link.icon.slice(1)}>
                {socialIcons[link.icon]}
              </a>
            ))}
          </div>
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
