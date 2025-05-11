// src/api/api.js
export const fetchCursos = async () => {
  try {
    const response = await fetch('https://pmv-backend.vercel.app/api/cursos/cursos');
    if (!response.ok) {
      throw new Error('Error al obtener los cursos');
    }
    const data = await response.json();
    return data;  // Devuelve los cursos obtenidos
  } catch (error) {
    throw new Error('No se pudieron cargar los cursos.');
  }
};
