// src/components/Loading.js
import React from 'react';
import { Spinner } from 'react-bootstrap';

/**
 * Componente Loading exibe um indicador de carregamento (spinner) centralizado na tela.
 *
 * @returns {JSX.Element} - Retorna um JSX com o spinner de carregamento centralizado.
 */
const Loading = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <Spinner animation='border' role='status' variant='primary'>
        <span className='visually-hidden'>Carregando...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
