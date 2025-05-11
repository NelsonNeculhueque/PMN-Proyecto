// Asegúrate de que la BASE_URL esté correctamente definida, por ejemplo:
// const BASE_URL = "http://localhost:4000/api/inscribir";

// Función para inscribir a un usuario en un curso
export const inscribirCurso = async (usuario, cursoId) => {
    try {
      // Verifica que el usuario y el cursoId sean válidos antes de hacer la solicitud
      if (!usuario || !cursoId) {
        throw new Error('Datos del usuario o del curso son inválidos');
      }
  
      // Realiza la solicitud POST para inscribir al usuario
      const response = await fetch("https://pmv-desarrollo.onrender.com/api/inscribir/inscribir", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId: usuario.id, cursoId }), // Asumiendo que 'usuario' tiene un id
      });
  
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        const errorData = await response.json(); // Asegúrate de que la respuesta sea JSON
        throw new Error(errorData.mensaje || 'Error al inscribirse');
      }
  
      // Retorna la respuesta si la inscripción fue exitosa
      return await response.json();
    } catch (error) {
      // Lanza un error si algo sale mal
      throw new Error(error.message);
    }
  };
  
  // Función para obtener las inscripciones
  export const obtenerInscripciones = async () => {
    try {
      // Realiza la solicitud GET para obtener las inscripciones
      const response = await fetch("http://localhost:4000/api/inscribir/obtener");
  
      // Verifica si la respuesta es exitosa
      if (!response.ok) throw new Error('Error al obtener inscripciones');
  
      // Retorna las inscripciones obtenidas
      return await response.json();
    } catch (error) {
      // Lanza un error si algo sale mal
      throw new Error(error.message);
    }
  };
  