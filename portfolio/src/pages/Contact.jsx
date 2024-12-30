import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="section p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            Let's connect! I'm currently looking for Fall 2025, Summer 2026, and part-time internship opportunities!
          </p>
        </div>

        <div className="flex justify-center gap-8 mt-4">
          <a href="https://github.com/JustinGarvida" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center transition-transform transform hover:translate-y-[-5px]">
            <FontAwesomeIcon icon={faGithub} className="text-3xl mb-2" />
            <span className="text-sm">GitHub</span>
          </a>
          
          <a href="https://linkedin.com/in/justingarvida" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center transition-transform transform hover:translate-y-[-5px]">
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl mb-2" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;