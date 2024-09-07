import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "./assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled"); // Debug log
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative flex flex-col sm:flex-row items-center bg-gray-100 shadow-lg w-full px-6 py-3">
      <Link
        to="/"
        className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
      >
        <img src={image} alt="logo" className="h-10 mb-4 sm:mb-0" />
      </Link>
      <nav className="flex flex-1 flex-col sm:flex-row items-center justify-center">
        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-8">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/doctor"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Mental Wellness
          </Link>
          <Link
            to="#"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Resources
          </Link>
          <Link
            to="/doctor"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Locate Clinics
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          onClick={toggleMenu}
          className="sm:hidden text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out mb-4"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-100 shadow-lg mt-2 ${
            menuOpen ? "block" : "hidden"
          } sm:hidden z-50`}
        >
          <Link
            to="/"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/doctor"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Mental Wellness
          </Link>
          <Link
            to="#"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/doctor"
            className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out px-4 py-2 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Locate Clinics
          </Link>
        </div>
      </nav>

      {/* Login/Sign Up Button */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <Link
          to="/login"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Login / Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
