import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Sebastian Garcia. All rights reserved.</p> {/* Año dinámico */}
                <ul className="footer-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/in/sebastian-garcia-dev" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/SzK14" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fa fa-github"></i> GitHub
                    </a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;