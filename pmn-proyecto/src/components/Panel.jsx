import React, { useState, useEffect } from 'react';
import Curso from './Inscribir';
import { inscribirCurso } from '../api/Inscripciones'; // Importa solo la función necesaria para inscribir
import { fetchCursos } from '../api/cursos'; // Asegúrate de que esta sea la función para obtener los cursos
import './Panel.css';

const Dashboard = ({ usuario }) => {
  const [cursos, setCursos] = useState([]); // Estado para almacenar los cursos

  // Cargar los cursos desde la API
  useEffect(() => {
    const cargarCursos = async () => {
      try {
        const cursosData = await fetchCursos(); // Llamamos a fetchCursos para obtener los cursos
        setCursos(cursosData); // Guardamos los cursos en el estado
      } catch (error) {
        console.error('Error al obtener cursos:', error.message);
      }
    };

    cargarCursos();
  }, []); // Solo se ejecuta una vez al cargar el componente

  // Manejar la inscripción de un curso
  const handleInscripcion = async (curso) => {
    // Verificamos si el usuario y su id están definidos
    if (!usuario || !usuario.id) {
      return; // Si no es válido, no seguimos adelante con la inscripción
    }

    try {
      // Preparar los datos para la inscripción (incluyendo nombre y descripción)
      const datosInscripcion = {
        usuarioId: usuario.id, // Asumiendo que el objeto usuario tiene un id
        cursoId: curso.id,
        cursoNombre: curso.nombre, // Nombre del curso
        cursoDescripcion: curso.descripcion, // Descripción del curso
      };

      // Llamar a la API para inscribir al usuario, pasando los datos completos
      await inscribirCurso(datosInscripcion);
      alert(`Te has inscrito en el curso: ${curso.nombre}`);
    } catch (error) {
      alert(`Error al inscribirse: ${error.message}`);
    }
  };

  return (
    <div className="dashboard">
      <h3>Panel Empleado</h3>

      <div className="curso-container">
        {cursos.map((curso) => (
          <Curso
            key={curso.id}
            nombre={curso.nombre}
            descripcion={curso.descripcion}
            onInscribir={() => handleInscripcion(curso)} // Llamamos a la función de inscripción
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
