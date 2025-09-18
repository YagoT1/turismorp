// src/pages/ParajesRurales.jsx

import React, { useEffect } from 'react';

const ParajesRurales = () => {
  useEffect(() => {
    // Al cargar la página, hacemos un scroll hacia la parte superior.
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Sección 1: Encabezado con Título e Imagen de Fondo */}
      <section 
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" 
        style={{ backgroundImage: `url('/parajes-rurales-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Parajes Rurales</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Descubre la tranquilidad y la belleza de la vida de campo en los pintorescos parajes de Roque Pérez.
          </p>
        </div>
      </section>

      {/* Sección 2: Introducción al Tema */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Roque Pérez te invita a desconectarte de la rutina y sumergirte en la naturaleza. Aquí, el tiempo parece detenerse, permitiéndote disfrutar de paisajes serenos, la hospitalidad de su gente y actividades al aire libre.
          </p>
        </div>
      </section>

      {/* Sección 3: Destinos o Puntos de Interés */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Destinos Destacados</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1: La Paz */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/la-paz.jpg" alt="La Paz, Roque Pérez" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">La Paz</h3>
                <p className="text-gray-600">
                  Un paraje ideal para la pesca y los paseos en bote, conocido por su tranquilidad y sus hermosos atardeceres.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: La Esperanza */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/la-esperanza.jpg" alt="La Esperanza, Roque Pérez" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">La Esperanza</h3>
                <p className="text-gray-600">
                  Ubicado a pocos kilómetros del pueblo, es un lugar perfecto para caminatas y picnics familiares.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Fortín Vigilancia */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/fortin-vigilancia.jpg" alt="Fortín Vigilancia, Roque Pérez" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Fortín Vigilancia</h3>
                <p className="text-gray-600">
                  Un sitio con rica historia, ideal para los amantes del pasado y los espacios abiertos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Galería de Imágenes */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Galería de Parajes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/rural-gallery-1.jpg" alt="Paisaje rural de Roque Pérez" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/rural-gallery-2.jpg" alt="Caminos de tierra en el campo" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/rural-gallery-3.jpg" alt="Fauna local" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/rural-gallery-4.jpg" alt="Atardecer en el campo" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default ParajesRurales;