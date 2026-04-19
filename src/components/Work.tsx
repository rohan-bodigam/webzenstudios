import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './Work.css';


const projects = [
    {
        title: 'KRIO ENERGY',
        category: 'Ecommerce Website',
        color: '#ff0099',
        url: 'https://krioenergy.com/',
        img: '/krio-mockup.png'
    },
    {
        title: 'SWATHI BUILDTECH',
        category: 'Construction',
        color: '#00f0ff',
        url: 'https://swathibuildtech.in/',
        img: '/swathi-mockup.png'
    },
    {
        title: 'GAYATRI DEVI PLAY SCHOOL',
        category: 'Education',
        color: '#ccff00',
        url: 'https://gayatrideviplayschool.in/',
        img: '/school-mockup.png'
    },
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
                    <motion.a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div
                            className="project-card__content"
                            style={{ backgroundImage: `url(${project.img})` }}
                        >
                            <div className="project-card__overlay">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Work;
