import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul className="nav-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
