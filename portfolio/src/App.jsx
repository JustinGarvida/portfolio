import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles.css';
import Experience from './pages/Experience';
import JustinGarvida from './pages/JustinGarvida';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JustinGarvida />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
