import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Navbar />

            {/*Add Welcome Banner */}

            <About />

             <section id="Experience" className="section">
            <h2>Experience</h2>
                {/* Add your work/education experience here */}
            </section>

            <Projects />


            <section id="resume" className="section">
                <h2>Resume</h2>
                {/* Add resume download or embed here */}
            </section>

            <Contact />
        </div>
    );
}

export default App;
