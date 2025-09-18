// src/components/VisitaGuiada.jsx

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const VisitaGuiada = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          alert('Tu solicitud ha sido enviada con éxito!');
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
      });
  };

  return (
    <section className="bg-white py-12 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Solicitá una Visita Guiada</h2>
        <form ref={form} onSubmit={sendEmail} className="p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="user_name" placeholder="Tu Nombre" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="user_email" placeholder="Tu Email" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <input type="text" name="user_phone" placeholder="Tu Teléfono" className="p-3 border rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" placeholder="¿Qué te gustaría visitar?" rows="4" className="p-3 border rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <button type="submit" className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </section>
  );
};

export default VisitaGuiada;