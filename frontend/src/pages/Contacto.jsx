// src/pages/Contacto.jsx

import React from 'react';

const Contacto = () => {
    return (
        <div className="pt-24 bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl font-extrabold text-[#002D62] mb-4">
                    Contacto
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Estamos aquí para ayudarte. Si tienes preguntas, sugerencias o necesitas información, no dudes en contactarnos.
                </p>
                
                {/* Formulario de Contacto */}
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                    <form className="space-y-6">
                        {/* Campo: Nombre Completo */}
                        <div>
                            <label htmlFor="nombre" className="block text-left text-sm font-medium text-gray-700">
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#002D62] focus:border-[#002D62] sm:text-sm"
                                placeholder="Escribe tu nombre completo"
                            />
                        </div>

                        {/* Campo: Mail */}
                        <div>
                            <label htmlFor="mail" className="block text-left text-sm font-medium text-gray-700">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="mail"
                                name="mail"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#002D62] focus:border-[#002D62] sm:text-sm"
                                placeholder="nombre@ejemplo.com"
                            />
                        </div>

                        {/* Campo: Asunto */}
                        <div>
                            <label htmlFor="asunto" className="block text-left text-sm font-medium text-gray-700">
                                Asunto
                            </label>
                            <input
                                type="text"
                                id="asunto"
                                name="asunto"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#002D62] focus:border-[#002D62] sm:text-sm"
                                placeholder="Escribe el asunto de tu mensaje"
                            />
                        </div>

                        {/* Botón de Enviar */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#002D62] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002D62] transition duration-200"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;