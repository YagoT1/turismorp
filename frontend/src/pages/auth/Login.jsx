// Login.jsx
// Este componente maneja el formulario de inicio de sesión.
import { useState } from 'react'; // 'React' eliminado de la importación
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './../assets/styles/Login.module.css';
 // <<-- RUTA CORREGIDA: Asume que styles/ está directamente en src/

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor, ingresa tu usuario y contraseña.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/login', { username, password });

      if (response.status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error de inicio de sesión:', err);
      if (err.response) {
        setError(err.response.data.message || 'Credenciales incorrectas. Intenta de nuevo.');
      } else if (err.request) {
        setError('No se pudo conectar con el servidor. Por favor, intenta de nuevo más tarde.');
      } else {
        setError('Ocurrió un error inesperado. Por favor, intenta de nuevo.');
      }
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center text-white p-4 ${styles.animatedBackground}`}>
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-teal-400 text-center mb-8 tracking-wide">Acceder</h2>
        <form onSubmit={handleSubmit} className="space-y-7">
          {error && <p className="text-red-500 text-center text-sm mb-4 font-semibold">{error}</p>}
          <div>
            <label htmlFor="username" className="block text-gray-200 text-base font-semibold mb-2">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-200 text-base font-semibold mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-extrabold py-3 px-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-8 text-center text-gray-400 text-sm">
          ¿No tienes una cuenta?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-teal-400 hover:text-teal-300 font-bold focus:outline-none transition duration-200"
          >
            Regístrate aquí
          </button>
        </p>
        <p className="mt-4 text-center text-gray-400 text-sm">
          ¿Olvidaste tu contraseña?{' '}
          <button
            onClick={() => navigate('/forgot-password')}
            className="text-teal-400 hover:text-teal-300 font-bold focus:outline-none transition duration-200"
          >
            Restablecer
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
