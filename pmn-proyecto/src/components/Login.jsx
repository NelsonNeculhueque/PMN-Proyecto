// frontend/Login.js
import React, { useState } from 'react';
import './Login.css';
import { login } from '../api/auth';  // Importa la función de login

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar el error anterior
    setIsLoading(true); // Indicamos que está cargando la solicitud

    try {
      const data = await login(usuario, contraseña);  // Llama a la función de login

      onLogin(); // Si el login es exitoso, llamamos a onLogin
    } catch (error) {
      setError(error.message); // Muestra el error si la solicitud falla
    } finally {
      setIsLoading(false); // Terminamos el loading después de la petición
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Usuario" 
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
