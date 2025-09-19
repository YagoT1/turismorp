import React from 'react';

const Forastieri = () => {
  return (
    <div className="bg-gray-100 py-16 pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Forastieri</h1>
        
        {/* Contenido en formato de tarjeta */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Un rincón histórico que evoca la vida rural de antaño. Forastieri es conocido por su antigua estación de tren y las historias que guarda, siendo un lugar de interés para quienes buscan un viaje al pasado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forastieri;