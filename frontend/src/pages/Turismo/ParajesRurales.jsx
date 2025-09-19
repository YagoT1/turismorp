import React from 'react';
import Card from '../../components/Tarjeta'; // Asegúrate de importar el componente Card

const ParajesRurales = () => {
  const parajes = [
    {
      title: 'La Paz',
      description: 'Un paraje sereno y tranquilo, ideal para desconectar y disfrutar de la naturaleza.',
      image: 'https://via.placeholder.com/1200x600?text=Imagen+de+La+Paz',
      linkTo: '/parajes-rurales/la-paz'
    },
    {
      title: 'La Paz Chica',
      description: 'A solo unos kilómetros de La Paz, este paraje ofrece un encanto similar con su atmósfera pacífica y paisajes pintorescos.',
      image: 'https://via.placeholder.com/1200x600?text=Imagen+de+La+Paz+Chica',
      linkTo: '/parajes-rurales/la-paz-chica'
    },
    {
      title: 'Forastieri',
      description: 'Un rincón histórico que evoca la vida rural de antaño. Forastieri es conocido por su antigua estación de tren y las historias que guarda.',
      image: 'https://via.placeholder.com/1200x600?text=Imagen+de+Forastieri',
      linkTo: '/parajes-rurales/forastieri'
    },
  ];

  return (
    <div className="bg-gray-100 py-16 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Parajes Rurales</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {parajes.map((paraje, index) => (
            <Card
              key={index}
              title={paraje.title}
              description={paraje.description}
              image={paraje.image}
              linkTo={paraje.linkTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParajesRurales;