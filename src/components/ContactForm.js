import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { saveLogToFile } from '../api/api.ts'; // Importando a função do arquivo TypeScript

/**
 * Componente de formulário de contato.
 *
 * Este componente exibe um formulário onde os usuários podem preencher seus dados (nome, email e mensagem),
 * e o formulário é enviado para um arquivo de log. Ao enviar o formulário, o estado é atualizado com
 * uma mensagem de sucesso.
 *
 * @returns {JSX.Element} - Retorna o formulário de contato com campos de nome, email e mensagem.
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  /**
   * Manipulador de mudanças nos campos do formulário.
   *
   * Atualiza o estado do formulário quando o usuário digita algo nos campos de nome, email ou mensagem.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Evento de mudança.
   */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /**
   * Manipulador do envio do formulário.
   *
   * Ao submeter o formulário, os dados são preparados para serem salvos em um arquivo de log,
   * e uma mensagem de sucesso é exibida para o usuário.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envio do formulário.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparar os dados do formulário para salvar
    const logData = `Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}\n\n`;
    saveLogToFile(logData);

    // Mensagem de sucesso para o usuário
    setStatusMessage('Formulário enviado com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className='p-4 mb-4'>
      <Row>
        <Col md={6} className='d-flex align-items-center' data-aos='fade-up'>
          <div>
            <h2 className='display-4'>Entre em Contato</h2>
            <p
              className='lead text-justify'
              style={{ fontSize: '1.2em', lineHeight: '1.5' }}
            >
              Tem alguma dúvida ou precisa de mais informações? Preencha o
              formulário ao lado e nossa equipe responderá o mais rápido
              possível. Estamos sempre prontos para ajudar e fornecer as
              melhores soluções para suas necessidades.
            </p>
          </div>
        </Col>

        <Col md={6}>
          <Form
            onSubmit={handleSubmit}
            className='p-3 shadow-sm rounded'
            style={{ backgroundColor: '#f8f9fa' }}
          >
            <Form.Group controlId='formName' className='mb-3'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                size='lg'
              />
            </Form.Group>

            <Form.Group controlId='formEmail' className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                size='lg'
              />
            </Form.Group>

            <Form.Group controlId='formMessage' className='mb-3'>
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as='textarea'
                name='message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                size='lg'
              />
            </Form.Group>

            <Button variant='primary' type='submit' className='w-100' size='lg'>
              Enviar
            </Button>

            {statusMessage && <p className='mt-3'>{statusMessage}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
