import React from 'react';

const LaPaz = () => {
  return (
    <div className="bg-gray-100 py-16 pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">La Paz</h1>
        
        {/* Contenido en formato de tarjeta */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Un paraje sereno y tranquilo, ideal para desconectar y disfrutar de la naturaleza. Conocido por sus vastos campos y la calma que ofrece a sus visitantes, La Paz es el lugar perfecto para un día de campo o una caminata relajante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaPaz;