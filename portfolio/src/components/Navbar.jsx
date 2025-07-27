import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);
      if (large) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false); // Close dropdown
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // adjust if needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-md">
      <div className="w-full flex justify-between items-center px-4 h-15 lg:h-20 z-50">
        {/* Hamburger Button */}
        {!isLargeScreen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-500 lg:hidden z-30"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}

        {/* Navigation Links */}
        <ul
          className={`${
            isLargeScreen
              ? "flex flex-row"
              : `absolute top-full left-0 w-full bg-[var(--primary-color)] transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 visible max-h-screen overflow-y-auto"
                    : "opacity-0 invisible max-h-0"
                }`
          } justify-center items-center list-none m-0 p-0 lg:static`}
        >
          {["justin-garvida", "about-me", "experience", "Projects", "contact"].map((section) => (
            <li key={section} className="mx-6 my-2 lg:my-0">
              <h2
                onClick={() => handleScroll(section)}
                className="text-yellow-500 text-lg lg:text-xl font-bold cursor-pointer hover:text-opacity-80"
              >
                {section.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
