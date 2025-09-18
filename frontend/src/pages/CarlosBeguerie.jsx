import React, { useEffect } from 'react';

const CarlosBeguerie = () => {
  useEffect(() => {
    // Scrolls to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Section 1: Header with Title and Background Image */}
      <section 
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" 
        style={{ backgroundImage: `url('/carlos-beguerie-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Carlos Beguerie</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Un pueblo rural que te invita a viajar en el tiempo, conocido por su estación de tren y la tranquilidad de su entorno.
          </p>
        </div>
      </section>

      {/* Section 2: Introduction to Carlos Beguerie */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700">
            A pocos kilómetros de Roque Pérez, se encuentra Carlos Beguerie, un pueblo que conserva su esencia rural y la calidez de su gente. Es un destino perfecto para una escapada tranquila, donde podrás disfrutar de un ritmo de vida más pausado y de la belleza del paisaje.
          </p>
        </div>
      </section>

      {/* Section 3: Points of Interest */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Qué visitar</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Estación de Tren */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/beguerie-estacion.jpg" alt="Estación de tren de Carlos Beguerie" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Antigua Estación de Tren</h3>
                <p className="text-gray-600">
                  Un ícono del pueblo que te transporta a otra época. Es el lugar perfecto para tomar fotografías y aprender sobre la historia del ferrocarril.
                </p>
              </div>
            </div>

            {/* Card 2: Capilla San José */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/beguerie-capilla.jpg" alt="Capilla San José en Carlos Beguerie" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Capilla San José</h3>
                <p className="text-gray-600">
                  Una pintoresca capilla que es un símbolo de la fe y la comunidad en el pueblo. Su arquitectura simple y su entorno pacífico la hacen un lugar de visita obligada.
                </p>
              </div>
            </div>

            {/* Card 3: Plaza Principal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/beguerie-plaza.jpg" alt="Plaza principal de Carlos Beguerie" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Plaza Principal</h3>
                <p className="text-gray-600">
                  El punto de encuentro de los vecinos, donde podrás sentarte a descansar y disfrutar de la tranquilidad del lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Image Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Galería de Carlos Beguerie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/beguerie-gallery-1.jpg" alt="Calles de Carlos Beguerie" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/beguerie-gallery-2.jpg" alt="Panorámica del pueblo" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/beguerie-gallery-3.jpg" alt="Vista de campos cercanos" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/beguerie-gallery-4.jpg" alt="Detalle de un edificio histórico" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default CarlosBeguerie;