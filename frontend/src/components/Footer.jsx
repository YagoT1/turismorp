// src/components/Footer.jsx

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacto');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0e2133] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Columna 1: Logo y Redes Sociales */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <NavLink to="/">
            <img src="/logo-blanco.png" alt="Turismo Roque Pérez" className="h-32 w-auto mb-4" />
          </NavLink>
          <p className="mb-8">
            Destino rural con encanto, historia y naturaleza.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/svg/facebook.svg" alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/svg/instagram.svg" alt="Instagram" className="h-8 w-8" />
            </a>
          </div>
          <p className="mb-3">
            Seguinos en nuestras redes sociales para más novedades.
          </p>
        </div>

        {/* Columna 2: Enlaces - Solo esta sección fue modificada */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Conocenos</h3>
          <ul>
            <li className="mb-2">
              <NavLink 
                to="/como-llegar"
                // Agregamos el scroll al hacer clic
                onClick={() => window.scrollTo(0, 0)}
              >
                Cómo llegar
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink 
                to="/donde-alojarse"
                // Agregamos el scroll al hacer clic
                onClick={() => window.scrollTo(0, 0)}
              >
                Dónde dormir
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink 
                to="/donde-comer"
                // Agregamos el scroll al hacer clic
                onClick={() => window.scrollTo(0, 0)}
              >
                Dónde comer
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink 
                to="/que-visitar"
                // Agregamos el scroll al hacer clic
                onClick={() => window.scrollTo(0, 0)}
              >
                Qué visitar
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Columna 3: Información de Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <ul>
            <li className="mb-2">Buenos Aires, Argentina</li>
            <li className="mb-2">+54 9 2227 621864</li>
            <li className="mb-2">www.turismorp.ar</li>
            <li className="mb-2">
              <a href="#" onClick={handleClick}>¿Dudas o consultas? Contactanos</a>
            </li>
          </ul>
        </div>
        
        {/* Columna 4: Suscripción */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Suscribite</h3>
          <p className="mb-4">
            Recibí actualizaciones sobre alojamientos, próximos eventos y más.
          </p>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Suscribite a novedades
            </button>
          </form>
        </div>

      </div>

      {/* Derechos de autor y logos inferiores */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm">
        <p>
          © 2025 Dirección de Turismo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;