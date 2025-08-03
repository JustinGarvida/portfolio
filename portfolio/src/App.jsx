import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles.css';
import Experience from './pages/Experience';
import JustinGarvida from './pages/JustinGarvida';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JustinGarvida />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
