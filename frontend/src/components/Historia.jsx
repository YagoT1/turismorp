// src/components/Historia.jsx

import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalImage from "react-modal-image";

const Historia = () => {
  const navigate = useNavigate();
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      // Simula un clic en el enlace para activar el scroll
      linkRef.current.click();
    }
  }, []);

  return (
    // Se mantiene el color de fondo celeste y la posición relativa para el SVG
    <section 
      id="historia" 
      className="bg-[#2f5c9e] text-white py-20 px-6 pt-20 relative overflow-hidden" 
    >
      {/* Formas abstractas de fondo rellenas */}
      <div className="absolute inset-0 z-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 1000" 
          className="w-full h-full"
        >
          {/* Forma 1 */}
          <path
            fill="#6d9ee2" // Color de la forma (un celeste más claro)
            opacity="0.3" // Opacidad baja
            d="M935.9,461.5c-19-140-109-224-219-242s-227-24-345-31s-219,30-295,123s-143,260-17,458s307,267,495,206s341-285,178-439Z"
            transform="scale(1.2) rotate(15) translate(20 -20)"
          />
          
          {/* Forma 2 */}
          <path
            fill="#a1c9f4" // Otro color celeste más claro
            opacity="0.2"
            d="M748.2,746.5c-48.4,72.4-124.5,108.5-223.1,108.5c-143.5,0-239.1-137.9-225-273.7c14.1-135.8,111.9-203.7,210.6-203.7c130.6,0,217.4,136.9,203.3,272.7C700.5,650.5,796.6,674.1,748.2,746.5Z"
            transform="scale(0.8) rotate(220) translate(-30 50)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Columna de Texto */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <h4 className="text-xl md:text-xl font-bold mb-2">La historia de</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Roque Pérez</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Fundada en 1884, nuestra ciudad "Roque Pérez". Es una ciudad que ha sabido crecer y desarrollarse gracias al esfuerzo y la unión de sus habitantes. Sus orígenes rurales y su espíritu comunitario la convierten en un lugar con una identidad propia y una rica historia.
          </p>
          <Link
            to="/historia-completa"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Leer historia completa.
          </Link>
        </div>

        {/* Columna de Imágenes */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <ModalImage
                small="lugares/iglesia.jpg"
                large="lugares/iglesia.jpg"
                alt="Iglesia de Roque Pérez"
                className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <ModalImage
                small="lugares/capilla.jpg"
                large="lugares/capilla.jpg"
                alt="Capilla de Roque Pérez"
                className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <ModalImage
                small="lugares/estacion.jpg"
                large="lugares/estacion.jpg"
                alt="Estación de Roque Pérez"
                className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <ModalImage
                small="lugares/entrada.jpg"
                large="lugares/entrada.jpg"
                alt="Entrada a Roque Pérez"
                className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;