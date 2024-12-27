import React from 'react';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            
            <section id="home" className="section">
                <h1>Welcome</h1>
                {/* Add your hero content here */}
            </section>

            <section id="about" className="section">
                <h2>About Me</h2>
                {/* Add your about content here */}
            </section>

            <section id="Projects" className="section">
                <h2>Projects</h2>
                {/* Add your projects grid/list here */}
            </section>

            <section id="Experience" className="section">
                <h2>Experience</h2>
                {/* Add your work/education experience here */}
            </section>

            <section id="resume" className="section">
                <h2>Resume</h2>
                {/* Add resume download or embed here */}
            </section>

            <section id="contact" className="section">
                <h2>Contact</h2>
                {/* Add contact form or contact information here */}
            </section>
        </div>
    );
}

export default App;
