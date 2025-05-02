import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 right-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Aditya's Portfolio
        </h1>

        {/* Hamburger Button (visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop Menu (visible on large screens) */}
        <ul className="hidden lg:flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-lg hover:text-red-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-500 after:transition-all"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isOpen && (
        <div className="lg:hidden px-6 py-4 bg-black w-full">
          <ul className="space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block py-2 text-lg hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
