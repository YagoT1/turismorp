// src/components/Hero.jsx

import React from 'react';

export default function Hero() {
  return (
    <section 
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('lugares/bgrp.png')" }}
    >
      {/* Opcional: una ligera superposición para mejorar el contraste del texto en la imagen */}
      <div className="absolute inset-0 bg-black/30"></div> 
      
      {/* El texto HTML se elimina ya que está en la imagen */}
      {/* Puedes mantener un div vacío si necesitas centrar algún elemento invisible o un pequeño pie de foto */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Aquí puedes añadir el texto pequeño "Más cerca de lo que crees..." si no está en la imagen principal */}
        <p className="text-lg md:text-xl font-light drop-shadow-lg max-w-4xl mx-auto mt-24">
          Más cerca de lo que imaginás. Más único de lo que pensás.
        </p>
      </div>
    </section>
  );
}