import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';



function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      
      <div className="contact-content">
        <div className="contact-text">
          <p>Let's connect! I'm currently looking for Fall 2025, Summer 2026, and part-time internship opportunities! </p>
        </div>

        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;