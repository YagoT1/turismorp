// src/components/Servicios.jsx
import React from 'react';

const Servicios = () => {
  const servicios = [
    {
      titulo: 'Qué visitar',
      descripcion: 'aquí encontrarás los mejores lugares turísticos.',
      icono: '/icono-visita.svg',
    },

    {
      titulo: 'Dónde alojarse',
      descripcion: 'Encuentra las mejores opciones de alojamiento en hoteles, cabañas y estancias rurales y casas de familia.',
      icono: '/icono-cama.svg',
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Servicios locales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-[#0034a7] text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={servicio.icono} alt={servicio.titulo} className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-2">{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;