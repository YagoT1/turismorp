import React from 'react';
import { Link } from 'react-router-dom';

const LaPazChica = () => {
  const paraje = [
    {
      title: 'Cine Club Colon',
      description: 'Unico Cine Rural de la Provincia en funcionamiento. Edificio historico que data de 1934.',
      image: 'https://via.placeholder.com/1200x600?text=Imagen+de+La+Paz',
      linkTo: '/cine-club-colon'
    },
    {
      title: 'Almacen de campo La Paz Chica',
      description: 'Gastronomía tradicional que invita a los visitantes a revivir la cultura rural. Es un punto de encuentro y un lugar para disfrutar de productos locales y la calidez de los vecinos del lugar.',
      image: 'https://via.placeholder.com/1200x600?text=Imagen+de+La+Paz',
      linkTo: '/almacen-la-paz-chica'
    },
    {
      title: 'Antiguo almacen "San Francisco"',
      description: 'Antiguo edificio que sigue en pie, testimonio de la rica historia del lugar. Es un sitio de gran valor arquitectónico y cultural.',
      image: 'https://via.placeholder.com/1200x600?text=Imagen+de+La+Paz',
      linkTo: '/san-francisco'
    },
  ];

  return (
    <div className="bg-gray-100 py-16 pt-36 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">La Paz Chica</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paraje.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">{item.description}</p>
              {item.linkTo && (
                <Link 
                  to={item.linkTo} 
                  className="mt-auto inline-block bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-200"
                >
                  Ver más
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaPazChica;