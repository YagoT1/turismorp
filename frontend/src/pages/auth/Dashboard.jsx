// Dashboard.jsx
// Componente de ejemplo para el dashboard (página protegida).
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Elimina los datos del usuario (o token)
    setIsAuthenticated(false); // Actualiza el estado de autenticación
    navigate('/login'); // Redirige a la página de login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold text-teal-400 mb-8">¡Bienvenido a tu Dashboard!</h2>
        <p className="text-lg text-gray-300 mb-6">
          Aquí podrás gestionar la información de tu oficina de turismo.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
