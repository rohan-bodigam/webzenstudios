import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__logo">
                WEBZEN<span className="dot">.</span>
            </div>

            <div className="navbar__links">
                <a href="#services">WHAT WE DO</a>
                <a href="#work">WORK</a>
                <a href="#about">WHO WE ARE</a>
            </div>

            <div className="navbar__cta">
                <a href="#contact"><Button variant="outline">Let's Talk</Button></a>
            </div>
        </nav>
    );
};

export default Navbar;
