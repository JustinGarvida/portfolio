import React from 'react';

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; // Adjust this value to match the height of your navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the position of the element
      window.scrollTo({
        top: elementPosition - navbarHeight, // Scroll to the element position minus the navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex justify-center items-center list-none m-0 p-0 h-15 lg:h-20">
          {['about me', 'experience', 'Projects', 'resume', 'contact'].map((section) => (
            <li key={section} className="mx-6">
              <h2
                className="text-secondary text-lg lg:text-xl font-bold cursor-pointer hover:text-white transition-colors duration-300"
                onClick={() => handleScroll(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
