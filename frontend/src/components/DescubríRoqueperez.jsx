// src/components/DescubriRoquePerez.jsx

import React from 'react';

const DescubriRoquePerez = () => {
  return (
    <div className="relative bg-blue-600 w-full h-80 flex items-center justify-center p-6 overflow-hidden">
      {/* Capa de la forma abstracta en el fondo */}
      <div className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2 -rotate-12 bg-blue-500 opacity-50"></div>
      <div className="absolute top-1/2 left-0 w-full h-full transform translate-x-1/4 -translate-y-1/2 -rotate-12 bg-blue-400 opacity-50"></div>
      
      {/* Contenedor del texto - Posicionamiento para que esté en el frente */}
      <div className="relative z-10 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-2">Descubrí</h2>
        <h1 className="text-6xl md:text-7xl font-bold">Roque Pérez</h1>
      </div>
    </div>
  );
};

export default DescubriRoquePerez;