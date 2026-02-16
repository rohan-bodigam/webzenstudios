import React from 'react';
import './Team.css';

const Team: React.FC = () => {
    return (
        <section id="about" className="team">
            <div className="team__container">
                <h2 className="team__title">THE CREW</h2>
                <p className="team__subtitle">
                    We are a collective of digital natives, code poets, and aesthetic obsessives.
                    <br />
                    Building the future, one pixel at a time.
                </p>

                <div className="team__stats">
                    <div className="stat">
                        <span className="stat__number">100+</span>
                        <span className="stat__label">Projects</span>
                    </div>
                    <div className="stat">
                        <span className="stat__number">Design</span>
                        <span className="stat__label">& Dev Experts</span>
                    </div>
                    <div className="stat">
                        <span className="stat__number">24/7</span>
                        <span className="stat__label">Hustle</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
