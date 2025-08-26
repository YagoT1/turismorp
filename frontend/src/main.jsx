import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importa BrowserRouter
import './index.css'
import App from './App.jsx'
import './assets/styles/base.css';
import './assets/styles/style.css';
import './assets/styles/auth.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envuelve tu componente App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)