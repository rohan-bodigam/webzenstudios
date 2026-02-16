import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './Work.css';

const projects = [
    { title: 'NEON REALTY', category: 'Web App', color: '#ff0099' },
    { title: 'NEXUS FINANCE', category: 'Fintech', color: '#00f0ff' },
    { title: 'CYBER WEAR', category: 'E-commerce', color: '#ccff00' },
];

const Work: React.FC = () => {
    return (
        <section id="work" className="work">
            <div className="work__header">
                <h2 className="work__title">SELECTED WORKS</h2>
                <Button variant="outline">View All</Button>
            </div>

            <div className="work__grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="project-card__content" style={{ backgroundColor: project.color }}>
                            <div className="project-card__overlay">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Work;
