// src/pages/ComoLlegar.jsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../assets/styles/animations.css'; 

const mapApiKey = 'AIzaSyANFFrsE2iF-GeJdOWyXruLLRuKhIaPVeI'; 

const center = {
  lat: -35.39993180510601,
  lng: -59.33586136956802
};
const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const ComoLlegar = () => {
  return (
    <div className="pt-16">
      <div className="bg-white py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002D62] mb-4">
            Planificá tu 
            <span className="relative inline-block mx-2">
              viaje
            </span> 
            ahora
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Roque Pérez se ubica en el corazón de la provincia de Buenos Aires, a tan solo 
            <strong className="text-blue-800"> 135 km de la Capital Federal</strong>. 
            Utiliza el mapa interactivo a continuación para trazar la ruta más conveniente.
          </p>

          <div className="w-full border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg mb-6">
            <LoadScript googleMapsApiKey={mapApiKey}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          
          {/* Contenedor de botones con espacio horizontal */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://maps.app.goo.gl/nvDGZ2BkHrDGDsdi9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#002D62] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Ir a Roque Pérez
            </a>
            <a 
              href="https://maps.app.goo.gl/fSJuREvSoxYJ9haY7"
              target='_blank'
              rel='noopener noreferrer'
              className="inline-block bg-[#002D62] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Ir a Carlos Beguerie
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#002D62]">Detalles de tu recorrido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Rutas de Acceso</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://maps.app.goo.gl/yDYEJq1HdkpYHyL88" target='_blank'>Desde CABA: RN 205 (135 km)</a></li>
                <li><a href="https://maps.app.goo.gl/3DrCwYocfRgkrZZh8" target='_blank'>Desde La Plata: RP 215 a RP 6 y RN 205 (159 km)</a></li>
                <li>Desde el sur: RP 51 y RN 205</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Transporte Público</h3>
              <p>Varias líneas de colectivos y servicios de combis conectan Roque Pérez con la Capital Federal y otras ciudades cercanas.</p>
              <p className="mt-2 text-sm text-gray-500">Consulta horarios y empresas en las terminales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoLlegar;