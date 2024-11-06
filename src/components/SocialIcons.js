// src/components/SocialIcons.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = ({ socialLinks }) => {
  const socialIcons = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />
  };

  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} className="text-light mx-2" aria-label={link.icon.charAt(0).toUpperCase() + link.icon.slice(1)}>
          {socialIcons[link.icon]}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
