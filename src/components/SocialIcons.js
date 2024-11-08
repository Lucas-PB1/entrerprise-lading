// src/components/SocialIcons.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

/**
 * Componente SocialIcons exibe ícones de redes sociais com links dinâmicos.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.socialLinks - Lista de objetos contendo informações dos links sociais.
 * @param {string} props.socialLinks.href - URL do link da rede social.
 * @param {string} props.socialLinks.icon - Nome da rede social (facebook, twitter, instagram).
 *
 * @returns {JSX.Element} - Retorna o JSX com os ícones de redes sociais e seus links.
 */
const SocialIcons = ({ socialLinks }) => {
  // Mapeamento dos ícones de redes sociais
  const socialIcons = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  };

  return (
    <div className='social-icons'>
      {/* Itera sobre os links fornecidos e cria um link com o ícone correspondente */}
      {socialLinks.map((link, index) => (
        <a
          key={index}
          target='_blank'
          href={link.href}
          className='text-light mx-2'
          aria-label={link.icon.charAt(0).toUpperCase() + link.icon.slice(1)}
          rel='noreferrer'
        >
          {/* Exibe o ícone correspondente à rede social */}
          {socialIcons[link.icon]}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
