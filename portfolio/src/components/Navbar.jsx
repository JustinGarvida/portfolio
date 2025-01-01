import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
      <div className="w-full flex justify-center items-center px-4 h-15 lg:h-20">
        <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-500 lg:hidden z-30">
          {/* Hamburger Icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className={`flex flex-col lg:flex-row justify-center items-center list-none m-0 p-0 bg-primary w-full absolute lg:static transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'top-[calc(100%-1px)] lg:top-0 h-auto max-h-[calc(100vh-60px)]' : 'top-[-1000px] h-0'}`}>
          {['about me', 'experience', 'Projects', 'resume', 'contact'].map((section) => (
            <li key={section} className="mx-6 my-2 lg:my-0">
              <h2
                className="text-yellow-500 text-lg lg:text-xl font-bold cursor-pointer hover:text-opacity-80"
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
