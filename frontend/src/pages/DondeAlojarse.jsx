import React from 'react';

// Función auxiliar para generar el enlace a Google Maps
const getGoogleMapsLink = (address) => {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};

const DondeAlojarse = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Dónde Alojarse
        </h1>
        
        {/* Sección de Alojamientos en Roque Pérez */}
        <div className="mb-12">
          <h2 className="text-5xl font-semibold text-gray-700 mb-6">en Roque Pérez</h2>
          
          {/* Subsección de Hoteles */}
          <h3 className="text-2xl font-medium text-gray-600 mt-8 mb-4">Hoteles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hotel Mayoral</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Acceso Pedro Gutiérrez 2451
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 681062
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Acceso Pedro Gutiérrez 2451, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>

          {/* Subsección de Hosterías */}
          <h3 className="text-2xl font-medium text-gray-600 mt-8 mb-4">Hosterías</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hostel “Lo de Nela”</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Acceso Pedro Gutiérrez 2645
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 467505
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Acceso Pedro Gutiérrez 2645, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>
          
          {/* Subsección de Casas de Familia */}
          <h3 className="text-2xl font-medium text-gray-600 mt-8 mb-4">Casas de Familia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Gladys Graziosi</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Cabral 33
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 011 32148379
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Cabral 33, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">María Cantani</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> 9 de Julio 869
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 418979
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('9 de Julio 869, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Lo de Gaby</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Acceso Pedro Gutiérrez 2649
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 615700
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Acceso Pedro Gutiérrez 2649, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>

          {/* Subsección de Departamentos y Casas */}
          <h3 className="text-2xl font-medium text-gray-600 mt-8 mb-4">Departamentos y Casas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Casa de Campo Roque Pérez</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Presidente Perón 192
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 528486
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Presidente Perón 192, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Alojamiento Delfina</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Chacabuco 649
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 4748239
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Chacabuco 649, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hospedaje Lo de Lucy</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Antártida Argentina e/ Tarigo y Alsina
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 624902
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Antártida Argentina, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Becasina Alojamientos</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Berro 302, Esquina Alem
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 481457
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Berro 302, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hospedaje Temporario</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Irigoyen 373
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2226 502987
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Irigoyen 373, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Peter Pan</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Albanesi 464
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 440991
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Albanesi 464, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Apart Hotel Marino</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Alsina 1661
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 403180
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Alsina 1661, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Lo de Gra</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Malvinas Argentinas 239
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 623579
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Malvinas Argentinas 239, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hospedaje La Casita</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Güemes 376
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 624882
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Güemes 376, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">“M&M”</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Lamadrid 1491
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 614013
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Lamadrid 1491, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Marta Peralta</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Além 421
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 448651
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Além 421, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Monoambiente Claudia</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Avellaneda 210
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 621957
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Avellaneda 210, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">El Viejo Molino</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> 25 De Mayo Y Alsina
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 480419
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('25 De Mayo Y Alsina, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Departamentos Roque Pérez</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Sabatté 2181
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 410951
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Sabatté 2181, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Lo de Miriam</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Paulino Lanz 455
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 551172
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Paulino Lanz 455, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Laura Gatti</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Rivadavia 260
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 465422
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Rivadavia 260, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Quincho La Mari</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Alem 1951
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 465733
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Alem 1951, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">“Las Lilas Apart”</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Alem 1974 - 1982 - 1900 y 1998
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 611611
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Alem 1974, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">“Las moras”</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Sabatte 2582
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 611611
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Sabatte 2582, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>

          {/* Subsección de Bases para Acampar */}
          <h3 className="text-2xl font-medium text-gray-600 mt-8 mb-4">Bases para Acampar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Predio del Bicentenario</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Luis María Campos S/N
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 570802
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Luis María Campos S/N, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>
          
          {/* Subsección de Casas de Campo */}
          <h3 className="text-2xl font-medium text-gray-600 mt-8 mb-4">Casas de Campo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Quinta de Nelly</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Cuartel VI
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 472505
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Cuartel VI, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Los Troncos</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Km 148,5 de Ruta Nacional N°205
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 011 40420828
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Ruta Nacional 205 km 148.5, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Estancia Los Álamos</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Tucumán 1300 (sección V)
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 011 23192009
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Tucumán 1300, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">María Jimena Carballeda</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Paraje La Paz Chica
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 471707
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Paraje La Paz Chica, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">La Herradura</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Paraje Forastieri
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2345 528144
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Paraje Forastieri, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Las Abelias</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Fournier 1688
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 614567
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Fournier 1688, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">La Desconocida</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Los Médanos
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 449423
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Los Médanos, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Alojamientos en Carlos Beguerie */}
        <div className="mb-12">
          <h2 className="text-5xl font-semibold text-gray-700 mb-6">en Carlos Beguerie</h2>
          
          {/* Subsección de Hosterías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hostería La Casona de Ventos</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Bozzano 950, Carlos Beguerie
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 011 58203182
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Bozzano 950, Carlos Beguerie, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Alojamiento El Rebusque</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Yapeyú e/ 17 de Agosto Y Grasetti, Carlos Beguerie
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 610664
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Yapeyú, Carlos Beguerie, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hospedaje La Sarita</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Homero Fernández, Carlos Beguerie
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 549957
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Homero Fernández, Carlos Beguerie, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Alojamiento “Lo de Toto”</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Carlos Beguerie
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 524012
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Carlos Beguerie, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Quinta Timón</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Circunvalación - Carlos Beguerie
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 011 56399844
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Circunvalación, Carlos Beguerie, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Base de campamento La Perla del Provincial</h4>
              <p className="text-gray-600">
                <span className="font-medium">Dirección:</span> Predio Estación
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Teléfono:</span> 2227 621864
              </p>
              <p className="text-gray-600 pt-6">
                <a 
                  href={getGoogleMapsLink('Galpón del Ferrocarril, Carlos Beguerie, Roque Pérez, Buenos Aires')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ¿No sabes cómo llegar? Hacé clic acá
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DondeAlojarse;