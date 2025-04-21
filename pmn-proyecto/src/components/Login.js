import React from 'react';
import './Login.css';

function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Usuario" 
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
