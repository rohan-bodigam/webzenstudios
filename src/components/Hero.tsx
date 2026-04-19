"use client"
import React from 'react';
import './Hero.css';
const Hero: React.FC = () => {
    return (
        <section className="hero">
            <img src='/WEBZEN.png' alt="Hero" className="hero__image" />

            <div className="hero__bottom-text">
                <span className="hero__brand-left">WEBZEN</span>
                <span className="hero__brand-right">STUDIOS</span>
            </div>
        </section>
    );
};

export default Hero;
