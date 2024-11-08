// src/components/Cookie.js
import React from 'react';
import CookieConsent from 'react-cookie-consent';

/**
 * Componente de consentimento de cookies.
 *
 * Este componente exibe uma barra de consentimento de cookies na parte inferior da página.
 * O usuário pode aceitar o uso de cookies clicando no botão "Aceitar".
 *
 * @returns {JSX.Element} - Retorna o componente CookieConsent configurado.
 */
function Cookie() {
  return (
    <CookieConsent
      location='bottom'
      buttonText='Aceitar'
      cookieName='cookieConsent'
      style={{ backgroundColor: '#343a40' }}
      buttonClasses='btn btn-primary btn-sm'
      containerClasses='container-fluid p-3 text-center text-light'
      buttonWrapperClasses='d-flex justify-content-center'
      expires={150}
    >
      <span className='me-2'>
        Este site utiliza cookies para melhorar sua experiência.
      </span>
      <a href='/politica-de-privacidade' className='text-warning'>
        Saiba mais
      </a>
    </CookieConsent>
  );
}

export default Cookie;
