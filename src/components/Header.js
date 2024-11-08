// src/components/Header.js
import React from 'react';
import NavLinks from './NavLinks';
import { Helmet } from 'react-helmet';
import SocialIcons from './SocialIcons';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Container, Navbar, Nav } from 'react-bootstrap';

/**
 * Componente Header exibe o cabeçalho do site, incluindo:
 * - Contatos (telefone e e-mail)
 * - Ícones de redes sociais
 * - Logo da empresa
 * - Links de navegação
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.navLinks - Lista de objetos contendo informações dos links de navegação.
 * @param {string} props.navLinks.href - URL do link de navegação.
 * @param {string} props.navLinks.label - Texto do link de navegação.
 * @param {string} props.logo - URL da imagem do logo da empresa.
 * @param {Array} props.socialLinks - Lista de objetos com links para redes sociais.
 * @param {string} props.socialLinks.href - URL da rede social.
 * @param {string} props.socialLinks.icon - O nome do ícone da rede social (ex: 'facebook', 'twitter', 'instagram').
 *
 * @returns {JSX.Element} - Retorna o JSX do cabeçalho com contatos, ícones sociais, logo e links de navegação.
 */
const Header = ({ navLinks, logo, socialLinks }) => {
  return (
    <header>
      {/* Meta tags para SEO com dados dinâmicos */}
      <Helmet>
        <title>Tech Innovators</title>
        <meta property='og:image' content={logo} />
        <meta property='og:title' content='Tech Innovators' />
        <meta property='og:url' content='https://www.exemplo.com' />
        <meta
          name='description'
          content='Uma empresa focada em nossos clientes'
        />
        <meta
          property='og:description'
          content='Uma empresa focada em nossos clientes'
        />
      </Helmet>

      {/* Barra superior com contatos e ícones sociais */}
      <Navbar bg='dark' variant='dark' expand='lg' className='top-bar py-1'>
        <Container className='justify-content-between'>
          <div className='contact-icons d-flex align-items-center text-light small flex-wrap'>
            <div className='d-flex align-items-center me-3 mb-2 mb-md-0'>
              <FaPhone />
              <span className='ms-2'>+55 (83) 91234-5678</span>
            </div>
            <div className='d-flex align-items-center mb-2 mb-md-0'>
              <FaEnvelope />
              <span className='ms-2'>info@techinnovators.com</span>
            </div>
          </div>
          <SocialIcons socialLinks={socialLinks} />
        </Container>
      </Navbar>

      {/* Barra de navegação principal com logo e links */}
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#' className='d-flex align-items-center'>
            <img
              src={logo}
              alt='Tech Innovators Logo'
              height='40'
              className='me-2'
            />
            Tech Innovators
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLinks navLinks={navLinks} linkClass='text-secondary' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
