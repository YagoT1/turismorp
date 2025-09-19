// src/pages/DondeComer.jsx

import React, { useEffect } from 'react';
import Card from '../../components/Tarjeta';

const foodSections = {
  "Parrillas": [
    {
      title: 'PARRILLA EL 2X4',
      description: 'Pra. Junta - 2227 625564 - Viernes a Domingo',
      address: 'Pra. Junta, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'PARRILLA LA FAMILIA',
      description: 'Sarmiento 1976 - 2227 615673 - Miércoles a lunes',
      address: 'Sarmiento 1976, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'PARRILLA FELO',
      description: 'Ruta 205 km 134 - 2227 504479 - Lunes a Lunes',
      address: 'Ruta 205 km 134, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'PARRILLA EL PORRA',
      description: 'Ruta 205 km 194 - 2227 571034 - Martes a Sábado',
      address: 'Ruta 205 km 194, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    }
  ],
  "Pastelerías y Cafeterías": [
    {
      title: 'DULCE MARIA',
      description: 'Mitre - 6394220426 - Lunes a Lunes',
      address: 'Mitre, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: 'https://www.instagram.com/dulcemariaroqueperez/',
      facebookUrl: ''
    },
    {
      title: 'HOY HAY',
      description: 'PASTELERIA Y CAFE - Tarigo 1285 - 2227 458665 - Martes a Sábado',
      address: 'Tarigo 1285, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'MERCEDES BUSCIONI',
      description: 'PASTELERIA ARTESANAL - Lamadrid 1597 - 2227 619180 - Martes a Sábado',
      address: 'Lamadrid 1597, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    }
  ],
  "Restaurantes y Bares": [
    {
      title: 'BLUEMOON',
      description: 'Belgrano 386 - 2227 677624 - Jueves a Domingo',
      address: 'Belgrano 386, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'DONI',
      description: 'Mitre 1416 - 2227 524025 - Miércoles a Domingo',
      address: 'Mitre 1416, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'J BURGERS',
      description: 'Acc. Gutiérrez - Contry Club - 2227 563398 - Miércoles a domingo',
      address: 'Acc. Gutiérrez - Contry Club, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'LA TABERNA',
      description: 'Sarmiento 2084 - 2227527008 - Jueves a Domingo',
      address: 'Sarmiento 2084, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'LA TERMINAL',
      description: 'Acc. Gutierrez - 2227 466792 - Viernes a domingo',
      address: 'Acc. Gutierrez, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'PARADOR 205',
      description: 'Ruta 205 - 2227 675115 - Lunes a Lunes',
      address: 'Ruta 205, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'ROB AND ROB',
      description: 'Berro 215',
      address: 'Berro 215, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
    {
      title: 'EL PALACIO DE LA PIZZA',
      description: 'Berro 220 - 2227 625156 - Lunes a Lunes',
      address: 'Berro 220, Roque Pérez',
      image: '/images/placeholder.jpg',
      linkText: '',
      linkUrl: '',
      instagramUrl: '',
      facebookUrl: ''
    },
  ]
};

// Generamos el enlace de Google Maps para cada tarjeta
Object.values(foodSections).forEach(section => {
  section.forEach(card => {
    if (card.address) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.address + ', Roque Pérez')}`;
      card.mapsUrl = mapsUrl;
    }
  });
});

const DondeComer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-[#002D62] mb-4 text-center">Dónde Comer</h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Descubrí la variada oferta gastronómica de Roque Pérez. Desde los sabores tradicionales del campo hasta propuestas modernas para disfrutar en la ciudad.
        </p>
        
        {Object.keys(foodSections).map((sectionTitle, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-4xl font-bold text-[#002D62] mb-6">{sectionTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {foodSections[sectionTitle].map((option, cardIndex) => (
                <Card
                  key={cardIndex}
                  title={option.title}
                  description={option.description}
                  image={option.image}
                  linkText={option.linkText}
                  linkUrl={option.linkUrl}
                  instagramUrl={option.instagramUrl}
                  facebookUrl={option.facebookUrl}
                  // Pasamos los nuevos campos al componente Card
                  address={option.address}
                  mapsUrl={option.mapsUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DondeComer;