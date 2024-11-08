// src/components/SectionComponent.js
import React from 'react';
import Button from './Button';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Componente SectionComponent exibe uma seção com título, descrição, mídia (imagem ou vídeo),
 * e um botão de chamada à ação (CTA) opcional, com suporte para animações e personalizações.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.id - O ID da seção, utilizado para ancoragem.
 * @param {string} props.title - O título a ser exibido na seção.
 * @param {string} props.description - A descrição da seção.
 * @param {string} props.cta - O texto do botão de chamada à ação (CTA).
 * @param {string} props.mediaUrl - A URL da mídia (imagem ou vídeo) a ser exibida.
 * @param {boolean} props.isVideo - Se `true`, a mídia será exibida como vídeo. Caso contrário, será uma imagem.
 * @param {string} [props.imagePosition='left'] - A posição da imagem ('left' ou 'right').
 * @param {boolean} props.hasButton - Define se o botão de chamada à ação (CTA) será exibido.
 * @param {string} props.bgColor - A cor de fundo da seção.
 * @param {string} props.animation - O nome da animação AOS para a seção.
 *
 * @returns {JSX.Element} - Retorna o JSX da seção com título, descrição, mídia e opcionalmente o botão CTA.
 */
function SectionComponent({
  id,
  title,
  description,
  cta,
  mediaUrl,
  isVideo,
  imagePosition = 'left',
  hasButton,
  bgColor,
  animation,
}) {
  return (
    <section
      id={id}
      className='p-4'
      style={{ backgroundColor: bgColor }}
      data-aos={animation}
    >
      <Container>
        <h2 className='display-5 text-center mb-3'>{title}</h2>
        <Row className='align-items-center'>
          <Col
            md={isVideo ? 12 : 6}
            className={`mb-4 ${imagePosition === 'right' ? 'order-md-2' : ''}`}
          >
            <div className='text-justify'>
              <p>{description}</p>
              {hasButton && <Button variant='primary'>{cta}</Button>}
            </div>
          </Col>

          <Col md={isVideo ? 12 : 6} className='text-center'>
            {isVideo ? (
              <iframe
                src={mediaUrl}
                title={title}
                className='w-100 mb-3'
                style={{ height: '400px' }}
                allowFullScreen
              />
            ) : (
              <img src={mediaUrl} alt={title} className='img-fluid mx-auto' />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionComponent;
