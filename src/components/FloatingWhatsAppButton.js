// src/components/FloatingWhatsAppButton.js
import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  padding: 8px 15px;
  font-size: 24px;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: #128c7e;
  }
`;

const FloatingWhatsAppButton = () => (
  <WhatsAppButton
    href="https://wa.me/5583996227670"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contato via WhatsApp"
  >
    <i className="fab fa-whatsapp" />
  </WhatsAppButton>
);

export default FloatingWhatsAppButton;
