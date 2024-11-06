// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Helvetica', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f8f9fa;
  }

  .text-justify {
    text-align: justify;
  }
`;

export default GlobalStyles;
