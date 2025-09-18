// src/components/Card.jsx

import React from 'react';

const Card = ({ title, description, image, linkText, linkUrl, instagramUrl, facebookUrl, mapsUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#002D62] mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{description}</p>
        
        {/* Agregamos los íconos de redes sociales */}
        <div className="flex justify-center space-x-4 mb-4">
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <img src="/svg/igazul.svg" alt="Instagram" className="w-8 h-8" />
            </a>
          )}
          {facebookUrl && (
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <img src="/svg/fbazul.svg" alt="Facebook" className="w-8 h-8" />
            </a>
          )}
        </div>

        {/* Agregamos el botón "Cómo llegar" */}
        {mapsUrl && (
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Cómo llegar
            </a>
          )}

        {linkText && linkUrl && (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#002D62] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors duration-200 mt-2"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;