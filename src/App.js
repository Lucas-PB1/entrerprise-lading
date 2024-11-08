import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cookie from './components/Cookie';
import BlogFeed from './components/BlogFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import ContactForm from './components/ContactForm';
import React, { useEffect, useState } from 'react';
import { fetchHeaderData, fetchPosts } from './api/api.ts';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

/**
 * Componente principal da aplicação.
 *
 * Este componente gerencia o estado da aplicação, incluindo dados de cabeçalho, links de navegação,
 * links sociais e posts de blog. Ele também inicializa a biblioteca AOS para animações e organiza a
 * estrutura da página com cabeçalho, conteúdo principal, feed de blog, formulário de contato, rodapé,
 * botão flutuante do WhatsApp e cookie consent.
 */
function App() {
  const [logo, setLogo] = useState(''); // Armazena o logotipo do cabeçalho
  const [navLinks, setNavLinks] = useState([]); // Armazena os links de navegação
  const [socialLinks, setSocialLinks] = useState([]); // Armazena os links sociais
  const [posts, setPosts] = useState([]); // Armazena os posts do blog

  /**
   * Effect hook que carrega os dados iniciais da aplicação, incluindo os dados do cabeçalho e os posts.
   * Também inicializa as animações AOS.
   */
  useEffect(() => {
    const loadData = async () => {
      // Carrega dados do cabeçalho
      const headerData = await fetchHeaderData();
      setLogo(headerData.logo);
      setNavLinks(headerData.navLinks);
      setSocialLinks(headerData.socialLinks);

      // Carrega posts do blog
      const blogPosts = await fetchPosts();
      setPosts(blogPosts);
    };

    // Inicializa o AOS (Animate On Scroll)
    AOS.init({ duration: 600, once: false });
    loadData();
  }, []);

  return (
    <div className='d-flex flex-column min-vh-100'>
      {/* Aplica os estilos globais para a aplicação */}
      <GlobalStyles />

      {/* Componente de Cabeçalho com links de navegação e ícones sociais */}
      <Header navLinks={navLinks} logo={logo} socialLinks={socialLinks} />

      <main className='flex-fill'>
        {/* Componente de Landing Page */}
        <LandingPage />
      </main>

      {/* Componente que exibe os posts do blog */}
      <BlogFeed posts={posts} />

      {/* Formulário de contato */}
      <ContactForm />

      {/* Componente de Rodapé com links de navegação e ícones sociais */}
      <Footer navLinks={navLinks} socialLinks={socialLinks} />

      {/* Botão flutuante do WhatsApp */}
      <FloatingWhatsAppButton />

      {/* Componente de Consentimento de Cookies */}
      <Cookie />
    </div>
  );
}

export default App;
