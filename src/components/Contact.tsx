import React from 'react';
import Button from './Button';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <h2 className="contact__title">LET'S TALK</h2>

                <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" placeholder="NAME" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="EMAIL" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="TELL US ABOUT YOUR PROJECT" rows={4} required></textarea>
                    </div>
                    <Button variant="primary" type="submit">SEND IT</Button>
                </form>

                <div className="contact__socials">
                    <a href="#" className="social-link">INSTAGRAM</a>
                    <a href="#" className="social-link">TWITTER / X</a>
                    <a href="#" className="social-link">TIKTOK</a>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} WEBZEN STUDIOS. ALL RIGHTS RESERVED.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
