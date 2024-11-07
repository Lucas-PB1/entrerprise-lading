// src/components/Cookie.js
import React from 'react';
import CookieConsent from 'react-cookie-consent';

function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      cookieName="cookieConsent"
      style={{ backgroundColor: "#343a40" }}
      buttonClasses="btn btn-primary btn-sm"
      containerClasses="container-fluid p-3 text-center text-light"
      buttonWrapperClasses="d-flex justify-content-center"
      expires={150}>

      <span className="me-2">Este site utiliza cookies para melhorar sua experiência.</span>
      <a href="/politica-de-privacidade" className="text-warning"> Saiba mais </a>

    </CookieConsent>
  );
}

export default Cookie;
