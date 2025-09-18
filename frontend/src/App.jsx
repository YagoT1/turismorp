// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DondeComer from './pages/DondeComer';
import DondeAlojarse from './pages/DondeAlojarse';
import HistoriaCompleta from './pages/HistoriaCompleta';
import QueVisitar from './pages/QueVisitar';
import Contacto from './pages/Contacto';
import ComoLlegar from './pages/ComoLlegar';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia-completa" element={<HistoriaCompleta />} />
          <Route path="/donde-comer" element={<DondeComer />} />
          <Route path="/donde-alojarse" element={<DondeAlojarse />} />
          {/* Agregamos las rutas faltantes */}
          <Route path="/que-visitar" element={<QueVisitar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/como-llegar" element={<ComoLlegar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;