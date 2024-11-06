// src/components/SectionComponent.js
import React, { useEffect } from 'react';
import Button from './Button';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionComponent({ id, title, description, cta, mediaUrl, isVideo, imagePosition, hasButton, bgColor, animation }) {
    useEffect(() => { AOS.refresh(); }, []);

    return (
        <section id={id} className="p-4" style={{ backgroundColor: bgColor }} data-aos={animation}>
            <Container>
                <h2 className="display-5 text-center mb-3">{title}</h2>
                <Row className="align-items-center">
                    <Col md={isVideo ? 12 : 6} className={`mb-4 ${imagePosition === 'right' ? 'order-md-2' : ''}`}>
                        <div className="text-justify">
                            <p>{description}</p>
                            {hasButton && <Button variant="primary">{cta}</Button>}
                        </div>
                    </Col>

                    <Col md={isVideo ? 12 : 6} className="text-center">
                        {isVideo ? (
                            <iframe
                                src={mediaUrl}
                                title={title}
                                allowFullScreen
                                className="w-100"
                                style={{ height: '400px' }}
                            />
                        ) : (
                            <img
                                src={mediaUrl}
                                alt={title}
                                className="img-fluid mx-auto"
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionComponent;
