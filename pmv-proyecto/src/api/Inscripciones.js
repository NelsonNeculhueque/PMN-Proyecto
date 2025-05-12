// api/Inscripciones.js
export const inscribirCurso = async (datosInscripcion) => {
  try {
    const response = await fetch('https://pmv-desarrollo.onrender.com/api/inscribir/inscribir', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosInscripcion), // Datos de la inscripción
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.mensaje || 'Error al inscribirse');
    }

    const data = await response.json(); // Asegúrate de que recibes la respuesta de éxito
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const obtenerInscripciones = async () => {
  try {
    const response = await fetch('https://pmv-desarrollo.onrender.com/api/inscribir/inscribir');
    if (!response.ok) {
      throw new Error('Error al obtener los cursos');
    }
    const data = await response.json();
    return data;  // Devuelve los cursos obtenidos
  } catch (error) {
    throw new Error('No se pudieron cargar los cursos.');
  }
};
