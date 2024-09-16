import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import image from "./assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative flex flex-col font-semibold sm:flex-row items-center bg-gray-100 shadow-lg w-full px-6 py-3">
      {/* Logo */}
      <NavLink to="/" className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
        <img src={image} alt="logo" className="h-10 mb-4 sm:mb-0" />
      </NavLink>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex flex-1 flex-col sm:flex-row items-center justify-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition duration-300 ease-in-out`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mental"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition duration-300 ease-in-out`
          }
        >
          Mental Wellness
        </NavLink>
        <NavLink
          to="/resource"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition duration-300 ease-in-out`
          }
        >
          Resources
        </NavLink>
        <NavLink
          to="/doctor"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition duration-300 ease-in-out`
          }
        >
          Locate Clinics
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle Menu"
        onClick={toggleMenu}
        className="sm:hidden text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Login/Sign Up Button (Desktop) */}
      <Link
        to="/login"
        className="hidden sm:inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Login / Sign Up
      </Link>

      {/* Mobile Dropdown Menu */}
      <div className={`${
        menuOpen ? "block" : "hidden"
      } sm:hidden mt-4 space-y-4 bg-gray-100 shadow-lg px-4 py-2`}>
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
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
