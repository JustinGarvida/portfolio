import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      
      <div className="contact-content">
        <div className="contact-text">
          <p>Let's connect! Feel free to reach out through any of my social platforms.</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            <span>GitHub</span>
          </a>
          
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <span>LinkedIn</span>
          </a>
          
          <a href="mailto:your.email@example.com">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;