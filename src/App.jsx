// src/App.js
import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchHeaderData, fetchPosts } from './api/api.ts';
import BlogFeed from './components/BlogFeed';
import ContactForm from './components/ContactForm.js';

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
      <BlogFeed posts={posts} /> {/* Passando apenas as postagens para o BlogFeed */}
      <ContactForm />
      <Footer navLinks={navLinks} />
    </div>
  );
}

export default App;
