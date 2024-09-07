import React, { useState } from "react";
import image from "./assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="relative flex flex-col sm:flex-row items-center bg-gray-100 shadow-lg w-full px-6 py-3">
      <img src={image} alt="logo" className="h-10 mb-4 sm:mb-0" />
      <nav className="flex flex-1 justify-center sm:space-x-8">
        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-8">
          <button
            aria-label="Home"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </button>
          <button
            aria-label="Mental Wellness"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Mental Wellness
          </button>
          <button
            aria-label="Resources"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Resources
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          onClick={toggleMenu}
          className="sm:hidden text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-100 shadow-lg mt-2 ${
            menuOpen ? "block" : "hidden"
          } sm:hidden`}
        >
          <button
            aria-label="Home"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-left"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </button>
          <button
            aria-label="Mental Wellness"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-left"
            onClick={() => setMenuOpen(false)}
          >
            Mental Wellness
          </button>
          <button
            aria-label="Resources"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-left"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
