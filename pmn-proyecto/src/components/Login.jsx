// frontend/Login.js
import React, { useState } from 'react';
import './Login.css';

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
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contraseña }),
      });

      const data = await response.json();

      if (response.ok) { // Verificamos si el status es 200-299
        onLogin(); // Si la respuesta es exitosa, llamamos a onLogin
      } else {
        setError(data.mensaje || 'Credenciales incorrectas'); // Muestra el mensaje de error
      }
    } catch (error) {
      setError('Hubo un error en la conexión con el servidor');
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
