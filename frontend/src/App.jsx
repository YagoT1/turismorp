// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DondeComer from './pages/servicios/DondeComer';
import DondeAlojarse from './pages/servicios/DondeAlojarse';
import HistoriaCompleta from './pages/HistoriaCompleta';
import QueVisitar from './pages/servicios/QueVisitar';
import Contacto from './pages/servicios/Contacto';
import ComoLlegar from './pages/servicios/ComoLlegar';
import ScrollToTop from './components/ScrollToTop';
import ParajesRurales from './pages/Turismo/ParajesRurales';
import CarlosBeguerie from './pages/Turismo/CarlosBeguerie';
import CascoUrbano from './pages/Turismo/CascoUrbano';
import FiestasPopulares from './pages/Turismo/FiestasPopulares';
import LaPaz from './pages/Turismo/LaPaz';
import LaPazChica from './pages/Turismo/LaPazChica';
import Forastieri from './pages/Turismo/Forastieri';

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia-completa" element={<HistoriaCompleta />} />
          <Route path="/donde-comer" element={<DondeComer />} />
          <Route path="/donde-alojarse" element={<DondeAlojarse />} />
          <Route path="/que-visitar" element={<QueVisitar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/como-llegar" element={<ComoLlegar />} />
          <Route path="/parajes-rurales" element={<ParajesRurales />} />
          <Route path="/carlos-beguerie" element={<CarlosBeguerie />} />
          <Route path="/casco-urbano" element={<CascoUrbano />} />
          <Route path="/fiestas-populares" element={<FiestasPopulares />} />
          <Route path="/parajes-rurales/la-paz" element={<LaPaz />} />
          <Route path="/parajes-rurales/la-paz-chica" element={<LaPazChica />} />
          <Route path="/parajes-rurales/forastieri" element={<Forastieri />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;