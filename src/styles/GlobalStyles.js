import { createGlobalStyle } from 'styled-components';

/**
 * Define os estilos globais para a aplicação.
 *
 * Este componente utiliza o `createGlobalStyle` do `styled-components` para aplicar estilos globais
 * em toda a aplicação. Esses estilos afetam a aparência do `body` e outros elementos comuns da página.
 */
const GlobalStyles = createGlobalStyle`
  /**
   * Estilos para o corpo da página.
   * Aplica a fonte "Geist Mono", define margens e preenchimentos como zero, ajusta a altura da linha e 
   * define a cor de fundo da página.
   */
  body {
    font-family: "Geist Mono", monospace;  // Fonte definida para todo o corpo
    margin: 0;  // Remove a margem padrão
    padding: 0;  // Remove o preenchimento padrão
    line-height: 1.6;  // Define a altura da linha para melhor legibilidade
    background-color: #f8f9fa;  // Define a cor de fundo clara da página
  }

  /**
   * Classe utilitária para justificar o texto.
   * Usada para alinhar o texto de forma justificada.
   */
  .text-justify {
    text-align: justify;  // Justifica o texto, distribuindo-o uniformemente
  }
`;

export default GlobalStyles;
