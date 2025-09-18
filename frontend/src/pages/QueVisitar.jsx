// src/components/QueVisitar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const QueVisitar = () => {
  const lugares = [
    {
      titulo: 'Parajes Rurales',
      descripcion: 'Disfrutá de caminatas, paseos en bicicleta y la tranquilidad del campo.',
      imagen: 'lugares/Parajes.png', 
      ruta: 'parajes_rurales',
    },
    {
      titulo: 'Casco Urbano',
      descripcion: 'Conocé la arquitectura y la historia que dan identidad a nuestra ciudad.',
      imagen: 'lugares/CascoUrbano.png',
      ruta: 'casco-urbano',
    },
    {
    titulo: 'Carlos Beguerie',
    descripcion: 'Un Pueblo rural con encanto, ideal para quienes buscan tranquilidad y contacto con la naturaleza.',
    imagen: 'lugares/CarlosBeguerie.jpeg',
    ruta: 'carlos-beguerie',
    }, 
    {
      titulo: 'Fiestas populares',
      descripcion: 'Eventos únicos que celebran la tradición, la música y la gastronomía. Todo en un solo lugar',
      imagen: 'lugares/FPopulares.png', // Corregí el nombre de la imagen aquí
      ruta: 'fiestas-populares',
    },
  ];

  return (
    <section id="que-visitar" className="py-32 bg-gray-100 text-gray-800 relative overflow-hidden">
        {/* Fondo de patrón de puntos */}
        <div className="absolute inset-0 z-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid slice" 
            className="w-full h-full"
            style={{ backgroundImage: "radial-gradient(circle, #a1c9f4 1px, transparent 1px)", backgroundSize: "30px 30px" }}
          ></svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Qué visitar</h2>
          
          {/* CAMBIO AQUÍ: de md:grid-cols-3 a md:grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {lugares.map((lugar, index) => (
              <Link 
                  to={`/que-visitar/${lugar.ruta}`}
                  key={index} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden block transform hover:scale-105 transition-transform duration-300"
              >
                <img src={lugar.imagen} alt={lugar.titulo} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{lugar.titulo}</h3>
                  <p className="text-gray-600">{lugar.descripcion}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  );
};

export default QueVisitar;