import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "./assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-100 shadow-lg w-full px-6 py-3">
      {/* Flex container for logo and navigation */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={image} alt="logo" className="h-10" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className="sm:hidden text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/mental"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Mental Wellness
          </Link>
          <Link
            to="/resource"
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
        </nav>

        {/* Login/Sign Up Button */}
        <Link
          to="/login"
          className="hidden sm:inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Login / Sign Up
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden mt-4 space-y-4 bg-gray-100 shadow-lg px-4 py-2`}
      >
        <Link
          to="/"
          className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/mental"
          className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          onClick={() => setMenuOpen(false)}
        >
          Mental Wellness
        </Link>
        <Link
          to="/resource"
          className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          onClick={() => setMenuOpen(false)}
        >
          Resources
        </Link>
        <Link
          to="/doctor"
          className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          onClick={() => setMenuOpen(false)}
        >
          Locate Clinics
        </Link>
        <Link
          to="/login"
          className="block text-lg font-semibold text-white bg-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => setMenuOpen(false)}
        >
          Login / Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
