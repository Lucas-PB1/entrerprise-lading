// src/components/NavLinks.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const NavLinks = ({ navLinks, linkClass }) => (
  <>
    {navLinks.map((link, index) => (<Nav.Link key={index} href={link.href} className={linkClass}> {link.label} </Nav.Link>))}
  </>
);

export default NavLinks;
