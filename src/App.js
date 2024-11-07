// src/App.js
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { fetchHeaderData, fetchPosts } from './api/api.ts';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogFeed from './components/BlogFeed';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import ContactForm from './components/ContactForm';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Cookie from './components/Cookie';

function App() {
  const [logo, setLogo] = useState('');
  const [navLinks, setNavLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const headerData = await fetchHeaderData();
      setLogo(headerData.logo);
      setNavLinks(headerData.navLinks);
      setSocialLinks(headerData.socialLinks);

      const blogPosts = await fetchPosts();
      setPosts(blogPosts);
    };

    AOS.init({ duration: 600, once: false });
    loadData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <GlobalStyles />
      <Header navLinks={navLinks} logo={logo} socialLinks={socialLinks} />
      <main className="flex-fill">
        <LandingPage />
      </main>
      <BlogFeed posts={posts} />
      <ContactForm />
      <Footer navLinks={navLinks} socialLinks={socialLinks} />
      <FloatingWhatsAppButton />
      <Cookie />
    </div>
  );
}

export default App;
