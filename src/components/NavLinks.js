// src/components/NavLinks.js
import React from 'react';
import { Nav } from 'react-bootstrap';

/**
 * Componente NavLinks exibe uma lista de links de navegação.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.navLinks - Lista de objetos contendo informações dos links.
 * @param {string} props.navLinks.href - URL do link de navegação.
 * @param {string} props.navLinks.label - Texto do link a ser exibido.
 * @param {string} props.linkClass - Classe CSS a ser aplicada a cada link de navegação.
 *
 * @returns {JSX.Element} - Retorna uma lista de links de navegação.
 */
const NavLinks = ({ navLinks, linkClass }) => (
  <>
    {/* Itera sobre os links fornecidos e exibe cada um */}
    {navLinks.map((link, index) => (
      <Nav.Link key={index} href={link.href} className={linkClass}>
        {link.label}
      </Nav.Link>
    ))}
  </>
);

export default NavLinks;
