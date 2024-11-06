import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_9si68r5';
        const templateID = 'template_fj51rkj';
        const userID = 'YOUR_USER_ID';

        emailjs.send(serviceID, templateID, formData, userID)
            .then(() => {
                setStatusMessage('Email enviado com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            }).catch((error) => {
                console.error('Erro ao enviar email:', error);
                setStatusMessage('Erro ao enviar o email.');
            });
    };

    return (
        <Container className="p-4 mb-4">
            <Row>
                <Col md={6} className="d-flex align-items-center" data-aos="fade-up">
                    <div>
                        <h2 className="display-4">Entre em Contato</h2>
                        <p className="lead text-justify" style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
                            Tem alguma dúvida ou precisa de mais informações? Preencha o formulário ao lado e nossa equipe responderá o mais rápido possível.
                            Estamos sempre prontos para ajudar e fornecer as melhores soluções para suas necessidades.
                        </p>
                    </div>
                </Col>

                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="p-3 shadow-sm rounded" style={{ backgroundColor: '#f8f9fa' }}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required size="lg" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required size="lg" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" name="message" rows={4} value={formData.message} onChange={handleChange} required size="lg" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" size="lg">
                            Enviar
                        </Button>

                        {statusMessage && <p className="mt-3">{statusMessage}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;