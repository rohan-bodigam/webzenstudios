import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        title: 'Custom Web Apps',
        description: 'Tailor-made solutions for complex business needs. Scalable, secure, and built for performance.',
        icon: '⚡',
        color: 'var(--color-primary)'
    },
    {
        title: 'Shopify & E-commerce',
        description: 'High-converting online stores. Custom themes and headless implementations that drive sales.',
        icon: '🛍️',
        color: 'var(--color-secondary)'
    },
    {
        title: 'Android Applications',
        description: 'Native and cross-platform mobile experiences that users love. Smooth, fast, and feature-rich.',
        icon: '📱',
        color: 'var(--color-accent)'
    },
    {
        title: 'Dynamic Websites',
        description: 'Interactive, motion-rich websites that tell your story and capture attention.',
        icon: '✨',
        color: '#ffdd00'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="services">
            <div className="services__header">
                <motion.h2
                    className="services__title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    OUR EXPERTISE
                </motion.h2>
                <div className="services__line"></div>
            </div>

            <div className="services__grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{ '--card-color': service.color } as React.CSSProperties}
                    >
                        <div className="service-card__icon">{service.icon}</div>
                        <h3 className="service-card__title">{service.title}</h3>
                        <p className="service-card__description">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
