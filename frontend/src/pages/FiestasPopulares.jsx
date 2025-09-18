import React, { useEffect } from 'react';

const FiestasPopulares = () => {
  useEffect(() => {
    // Scrolls to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Section 1: Header with Title and Background Image */}
      <section 
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" 
        style={{ backgroundImage: `url('/fiestas-populares-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Fiestas Populares</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Vive la alegría y la tradición en los eventos que celebran nuestra cultura, música y gastronomía.
          </p>
        </div>
      </section>

      {/* Section 2: Introduction to the Festivals */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Roque Pérez es sinónimo de celebración. A lo largo del año, la comunidad se une en diversas fiestas que reflejan nuestra identidad. Desde festivales gastronómicos hasta encuentros musicales, siempre hay una razón para celebrar.
          </p>
        </div>
      </section>

      {/* Section 3: Featured Festivals */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Eventos Destacados</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Festival de la Galleta de Campo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/galleta-de-campo.jpg" alt="Festival de la Galleta de Campo" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Festival de la Galleta de Campo</h3>
                <p className="text-gray-600">
                  Un evento único que rinde homenaje a la tradicional galleta de campo, con degustaciones, música y actividades para toda la familia.
                </p>
              </div>
            </div>

            {/* Card 2: Fiesta del Salame y el Vino */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/salame-y-vino.jpg" alt="Fiesta del Salame y el Vino" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Fiesta del Salame y el Vino</h3>
                <p className="text-gray-600">
                  Celebra los sabores locales con stands de productores artesanales, shows en vivo y una oportunidad para disfrutar de los mejores embutidos y vinos de la región.
                </p>
              </div>
            </div>

            {/* Card 3: Aniversario de la Ciudad */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/aniversario.jpg" alt="Aniversario de la Ciudad" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Aniversario de la Ciudad</h3>
                <p className="text-gray-600">
                  Cada año, Roque Pérez se viste de fiesta para conmemorar su fundación con desfiles, espectáculos artísticos y actividades comunitarias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Image Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#002D62]">Momentos de Celebración</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/fiesta-gallery-1.jpg" alt="Gente bailando en una fiesta popular" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/fiesta-gallery-2.jpg" alt="Stand de comida en un festival" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/fiesta-gallery-3.jpg" alt="Show musical en vivo" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/fiesta-gallery-4.jpg" alt="Desfile de carrozas en el aniversario" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default FiestasPopulares;