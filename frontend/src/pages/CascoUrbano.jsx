import React, { useEffect } from 'react';

const CascoUrbano = () => {
  useEffect(() => {
    // Scrolls to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Section 1: Header with Title and Background Image */}
      <section 
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" 
        style={{ backgroundImage: `url('/casco-urbano-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Casco Urbano</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Descubre el encanto de la arquitectura, la historia y la vida cotidiana que dan identidad a nuestra ciudad.
          </p>
        </div>
      </section>

      {/* Section 2: Introduction to the Urban Area */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700">
            El corazón de Roque Pérez late en su casco urbano, donde cada calle cuenta una historia. Pasea por plazas históricas, admira edificios emblemáticos y disfruta de la calidez de su gente en cafés y comercios locales.
          </p>
        </div>
      </section>

      {/* Section 3: Points of Interest */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Lugares Emblemáticos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Plaza Mitre */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/plaza-mitre.jpg" alt="Plaza Mitre, Roque Pérez" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Plaza Mitre</h3>
                <p className="text-gray-600">
                  El centro social y cultural de la ciudad, ideal para un paseo relajante o para disfrutar de eventos al aire libre.
                </p>
              </div>
            </div>

            {/* Card 2: Palacio Municipal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/palacio-municipal.jpg" alt="Palacio Municipal de Roque Pérez" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Palacio Municipal</h3>
                <p className="text-gray-600">
                  Una joya arquitectónica que refleja la rica historia de la ciudad y su crecimiento a lo largo de los años.
                </p>
              </div>
            </div>

            {/* Card 3: Estación de Tren */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/estacion-tren.jpg" alt="Estación de tren de Roque Pérez" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Antigua Estación de Tren</h3>
                <p className="text-gray-600">
                  Un sitio histórico que evoca los días dorados del ferrocarril, conectando el pasado con el presente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Image Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Galería Urbana</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/urban-gallery-1.jpg" alt="Calle principal de Roque Pérez" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/urban-gallery-2.jpg" alt="Edificios históricos en la ciudad" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/urban-gallery-3.jpg" alt="Vida cotidiana en un café local" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/urban-gallery-4.jpg" alt="Paisaje nocturno de la ciudad" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default CascoUrbano;