import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    WE BUILD THE <br />
                    <span className="text-highlight">WEB OF TOMORROW</span>
                </motion.h1>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    High-voltage web experiences for brands that dare to be different.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Button variant="primary">Start Project</Button>
                    <Button variant="outline">View Work</Button>
                </motion.div>
            </div>

            <div className="hero__background">
                <div className="orb orb--1"></div>
                <div className="orb orb--2"></div>
            </div>
        </section>
    );
};

export default Hero;
