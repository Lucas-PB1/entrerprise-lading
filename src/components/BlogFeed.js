import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

/**
 * Função para limitar o comprimento do texto exibido.
 *
 * Esta função verifica se o comprimento do texto ultrapassa um limite máximo definido e, se for o caso,
 * corta o texto e adiciona "..." no final para indicar que ele foi truncado.
 *
 * @param {string} text - O texto a ser verificado e, se necessário, truncado.
 * @param {number} maxLength - O comprimento máximo permitido para o texto.
 *
 * @returns {string} - O texto truncado ou original, dependendo do comprimento.
 */
const limitText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

/**
 * Componente para exibir os posts mais recentes do blog.
 *
 * Este componente recebe uma lista de posts e os exibe em formato de cartões. Cada cartão inclui
 * uma imagem, título e um resumo do corpo do post.
 *
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {Array} props.posts - Um array de objetos representando os posts do blog.
 * Cada objeto deve conter um id, título, corpo e URL da imagem.
 *
 * @returns {JSX.Element} - Retorna uma seção com os posts do blog exibidos em cartões.
 */
const BlogFeed = ({ posts }) => {
  return (
    <section className='blog-feed my-5'>
      <Container>
        <h2 className='text-center mb-4'>Últimos Posts do Blog</h2>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={4} className='mb-4'>
              <Card>
                <Card.Img variant='top' src={post.imageUrl} alt={post.title} />
                <Card.Body>
                  <Card.Title>
                    <b>{limitText(post.title, 25)}</b>
                  </Card.Title>
                  <Card.Text>{limitText(post.body, 100)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogFeed;
