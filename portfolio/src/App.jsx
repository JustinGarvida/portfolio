import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import { Resume } from './pages/Resume';
import './styles.css';
import { Experience } from './pages/Experience';

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Experience/>
            <Projects />
            <Resume/>
            <Contact />
        </div>
    );
}

export default App;
