// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full transition-colors duration-300 z-50 ${scrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo-blanco.png" alt="Turismo Roque Pérez" className="h-32 w-auto" />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex space-x-6 font-medium text-white">
          <a href="#visitar" className="hover:text-blue-600">Qué visitar</a>
          <a href="#hospedajes" className="hover:text-blue-600">Hospedajes</a>
          <a href="#gastronomia" className="hover:text-blue-600">Gastronomía</a>
          <a href="#eventos" className="hover:text-blue-600">Eventos</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;