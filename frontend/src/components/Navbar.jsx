// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    // Función dinámica para desplazarse a cualquier sección en la página de inicio
    const handleScrollToSection = (id) => {
        setIsMenuOpen(false);
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const homePageSections = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Historia', id: 'historia-resumen' },
        { name: 'Qué visitar', id: 'que-visitar' },
        { name: 'Cómo llegar', id: 'como-llegar' },
    ];

    const tourismItems = [
        { name: 'Dónde comer', path: '/donde-comer' },
        { name: 'Dónde alojarse', path: '/donde-alojarse' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#002D62] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center flex-grow">
                        <NavLink to="/" className="flex-shrink-0">
                            <img src="/logo-blanco.png" alt="Turismo Roque Pérez" className="h-24 w-auto" />
                        </NavLink>
                        <div className="relative flex-grow flex justify-center mx-4">
                            <div className="relative flex items-center bg-white rounded-full px-4 py-2 text-gray-800 focus-within:ring-2 focus-within:ring-blue-500 w-full max-w-lg">
                                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-transparent outline-none ml-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {homePageSections.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => handleScrollToSection(item.id)}
                            className="block py-2 px-3 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                        >
                            {item.name}
                        </div>
                    ))}
                    <div
                        onClick={toggleSubMenu}
                        className="block py-2 px-3 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                    >
                        Servicios Locales
                    </div>
                    <div className="pl-4 space-y-1">
                    </div>
                    {isSubMenuOpen && (
                        <div className="pl-4 space-y-1">
                            {tourismItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 px-3 text-white rounded-md hover:bg-blue-700"
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                    <NavLink
                        to="/contacto"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 px-3 text-white rounded-md hover:bg-blue-700"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;