import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Dropdown menu state
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Tracks screen size

  // Check for large screen dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // `lg` breakpoint
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Ensure dropdown is closed on large screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false); // Close dropdown on option click
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; // Adjust based on your actual navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
      <div className="w-full flex justify-between items-center px-4 h-15 lg:h-20">
        {/* Hamburger Button (Visible on small screens) */}
        {!isLargeScreen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-500 lg:hidden z-30"
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
              ></path>
            </svg>
          </button>
        )}

        {/* Navbar Links */}
        <ul
          className={`${
            isLargeScreen
              ? "flex flex-row" // Horizontal layout for large screens
              : `absolute top-full left-0 w-full bg-primary transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 visible max-h-screen overflow-y-auto"
                    : "opacity-0 invisible max-h-0"
                }`
          } justify-center items-center list-none m-0 p-0 lg:static`}
        >
          {["about-me", "experience", "Projects", "contact"].map(
            (section) => (
              <li key={section} className="mx-6 my-2 lg:my-0">
                <h2
                  className="text-yellow-500 text-lg lg:text-xl font-bold cursor-pointer hover:text-opacity-80"
                  onClick={() => handleScroll(section)}
                >
                  {section
                    .replace("-", " ")
                    .charAt(0)
                    .toUpperCase() + section.replace("-", " ").slice(1)}
                </h2>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
