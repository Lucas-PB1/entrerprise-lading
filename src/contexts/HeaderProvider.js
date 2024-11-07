// src/contexts/HeaderProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchHeaderData, fetchPosts } from '../api/api.ts';

const HeaderContext = createContext();

export const useHeaderData = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }) => {
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
        <HeaderContext.Provider value={{ logo, navLinks, socialLinks, posts }}>
            {children}
        </HeaderContext.Provider>
    );
};
