// src/components/Footer.js
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavLinks from './NavLinks';

function Footer({ navLinks }) {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <Container>
                <p className="mb-1"> &copy; 2024 Tech Innovators. Todos os direitos reservados. </p>
                <p className="small"> Nossa missão é transformar sua visão em soluções tecnológicas que potencializam o crescimento do seu negócio. </p>
                <Nav className="justify-content-center"> <NavLinks navLinks={navLinks} linkClass="text-white mx-2 text-decoration-none" /> </Nav>
            </Container>
        </footer>
    );
}

export default Footer;
