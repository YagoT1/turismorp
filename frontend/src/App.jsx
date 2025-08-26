// src/App.js
import React from 'react';
import HomeWrapper from './components/HomeWrapper'; // Importa el HomeWrapper
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col">
      {/* El HomeWrapper contiene el Navbar y el Hero, y maneja el fondo */}
      <HomeWrapper /> 

      {/* Aquí irían tus otras secciones de contenido */}
      <main className="flex-grow">
        {/* <OtherSection /> Si tienes otras secciones después del hero, colócalas aquí */}
        {/* Por ejemplo, tus componentes ServicesSection, HistorySection, etc. */}
      </main>

      <Footer />
    </div>
  );
}