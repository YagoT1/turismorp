import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      {/* Contenedor principal del footer */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Sección superior: Logo centrado */}
        <div className="text-center mb-1">
          <img 
            src="/logo-blanco.png" 
            alt="Turismo Roque Pérez" 
            className="h-32 mx-auto" 
          />
                      <p className="text-sm text-contrast">
              © {new Date().getFullYear()} Dirección de Turismo. Todos los derechos reservados.
            </p>
        </div>

        {/* Separador visual (opcional) */}
        <hr className="w-1/2 md:w-1/3 border-gray-600 mb-8" />

        {/* Sección inferior: Contenido a la izquierda y derecha */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Columna izquierda: Redes sociales */}
          <div className="text-left mb-6 md:mb-0">
            <p className="text-contrast">
              Seguinos en nuestras redes sociales:
            </p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-accent">
                Facebook
              </a>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
            </div>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div className="text-center" > 
            <p className="mt-2 text-highlight">📍 Buenos Aires, Argentina</p>
            <p className="mt-1 text-highlight">📞 +54 9 2227 621864</p>
            <p className="mt-1 text-highlight">✉️</p>
            <p className="mt-1 text-highlight">🌐 www.turismorp.tur.ar</p>
          </div>

        </div>
      </div>
    </footer>
  );
}