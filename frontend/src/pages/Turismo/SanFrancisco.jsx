import React from 'react';

const SanFrancisco = () => {
  return (
    <div className="bg-gray-100 py-16 pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Antiguo Almacén "San Francisco"</h1>
        
        {/* Contenido en formato de tarjeta */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Antiguo edificio que sigue en pie, testimonio de la rica historia del lugar. Es un sitio de gran valor arquitectónico y cultural, y un recordatorio de la vida rural de antaño.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SanFrancisco;