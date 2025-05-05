// src/api/api.js
export const login = async (usuario, contraseña) => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contraseña }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.mensaje || 'Credenciales incorrectas');
      }
  
      return data; // Retorna los datos de la respuesta
    } catch (error) {
      throw new Error(error.message || 'Hubo un error en la conexión con el servidor');
    }
  };
  