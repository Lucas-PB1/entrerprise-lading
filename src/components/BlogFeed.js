// src/components/BlogFeed.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const limitText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

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
