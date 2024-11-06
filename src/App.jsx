// src/App.js
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogFeed from './components/BlogFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm.js';
import { fetchHeaderData, fetchPosts } from './api/api.ts';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton.js';
import Cookie from './components/Cookie.js';

function App() {
  useEffect(() => { AOS.init({ duration: 600, once: false }); }, []);

  const [logo, setLogo] = useState('');
  const [navLinks, setNavLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadHeaderData = async () => {
      const data = await fetchHeaderData();
      setLogo(data.logo);
      setNavLinks(data.navLinks);
      setSocialLinks(data.socialLinks);
    };
    loadHeaderData();
  }, []);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadBlogPosts();
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
      <Footer navLinks={navLinks} socialLinks={socialLinks}  />
      <FloatingWhatsAppButton />
      <Cookie />
    </div>
  );
}

export default App;
