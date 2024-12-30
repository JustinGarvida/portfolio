import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles.css';
import { Experience } from './pages/Experience';

function App() {
    return (
        <div className="App">
            <Navbar />

            {/*Add Welcome Banner */}
            <About />

            <Experience/>

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
