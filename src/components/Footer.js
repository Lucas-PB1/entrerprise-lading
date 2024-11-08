// src/components/Footer.js
import React from 'react';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import { Container, Nav } from 'react-bootstrap';

/**
 * Componente Footer exibe o rodapé do site, incluindo:
 * - Informações sobre direitos autorais
 * - Descrição da missão da empresa
 * - Links de navegação
 * - Ícones de redes sociais
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.navLinks - Lista de objetos contendo informações dos links de navegação.
 * @param {string} props.navLinks.href - URL do link de navegação.
 * @param {string} props.navLinks.label - Texto do link de navegação.
 * @param {Array} props.socialLinks - Lista de objetos com links para redes sociais.
 * @param {string} props.socialLinks.href - URL da rede social.
 * @param {string} props.socialLinks.icon - O nome do ícone da rede social (ex: 'facebook', 'twitter', 'instagram').
 *
 * @returns {JSX.Element} - Retorna o JSX do rodapé com informações sobre direitos autorais, missão, links de navegação e ícones sociais.
 */
function Footer({ navLinks, socialLinks }) {
  return (
    <footer className='bg-dark text-white text-center py-4'>
      <Container>
        <p className='mb-1'>
          &copy; 2024 Tech Innovators. Todos os direitos reservados.
        </p>
        <p className='small'>
          Nossa missão é transformar sua visão em soluções tecnológicas que
          potencializam o crescimento do seu negócio.
        </p>
        <Nav className='justify-content-center flex-column'>
          <NavLinks
            navLinks={navLinks}
            linkClass='text-white mx-2 text-decoration-none'
          />
        </Nav>
        <SocialIcons socialLinks={socialLinks} />
      </Container>
    </footer>
  );
}

export default Footer;
