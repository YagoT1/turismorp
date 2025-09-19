import React from 'react';

const CineClubColon = () => {
  return (
    <div className="bg-gray-100 py-16 pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Cine Club Colón</h1>
        
        {/* Contenido en formato de tarjeta */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            El único cine rural de la provincia en funcionamiento. Edificio histórico que data de 1934, su estructura aún conserva su encanto de antaño. Ofrece una experiencia cultural única en un entorno rural, siendo un verdadero vínculo con la historia y la comunidad local.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CineClubColon;