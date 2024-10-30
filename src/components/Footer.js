import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons

const Footer = () => (
    <footer className="footer">
        <p>Music Streaming App © 2024</p>
        <div className="social-icons">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
        </div>
    </footer>
);

export default Footer;
