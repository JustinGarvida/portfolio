import React from 'react';

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--primary-color)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    navItems: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      height: '60px',
    },
    navItem: {
      margin: '0 1.5rem',
    },
    button: {
      all: 'unset', // Reset default button styles
      color: 'var(--secondary-color)',
      fontSize: '1.1rem',
      fontFamily: "'Nero', Arial, sans-serif",
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    buttonHover: {
      color: 'white',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <ul style={styles.navItems}>
          {['home', 'about', 'experience', 'projects', 'resume', 'contact'].map((section) => (
            <li key={section} style={styles.navItem}>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.color = styles.buttonHover.color)}
                onMouseOut={(e) => (e.target.style.color = 'var(--secondary-color)')}
                onClick={() => handleScroll(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
