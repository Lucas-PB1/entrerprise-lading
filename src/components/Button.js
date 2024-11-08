import React from 'react';

/**
 * Componente de botão reutilizável.
 *
 * Este componente exibe um botão personalizado com base na variante fornecida. Ele pode ser usado em
 * diferentes partes da aplicação para realizar ações definidas pelo usuário ao clicar no botão.
 *
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {React.ReactNode} props.children - O conteúdo que será exibido dentro do botão.
 * @param {Function} props.onClick - Função a ser executada quando o botão for clicado.
 * @param {string} [props.variant='primary'] - A variante do botão (ex: 'primary', 'secondary', etc.). O valor padrão é 'primary'.
 *
 * @returns {JSX.Element} - Retorna um botão com o conteúdo fornecido.
 */
function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
