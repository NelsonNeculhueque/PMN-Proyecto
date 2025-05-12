import React, { useState, useEffect } from 'react';
import Curso from './Inscribir';  // Asegúrate de que el nombre del archivo sea 'Curso.js' y no 'Inscribir.js'
import { inscribirCurso } from '../api/Inscripciones';
import { fetchCursos } from '../api/cursos';
import './Panel.css';

const Dashboard = () => {
  // Definir el usuario como "Empleado"
  const usuario = { nombre: "Empleado", id: "empleado1" };  // Puedes personalizar el id si es necesario

  const [cursos, setCursos] = useState([]);

  // Cargar los cursos disponibles
  useEffect(() => {
    const cargarCursos = async () => {
      try {
        const cursosData = await fetchCursos();
        setCursos(cursosData);  // Almacenar los cursos en el estado
      } catch (error) {
        console.error('Error al obtener cursos:', error.message);
      }
    };

    cargarCursos();
  }, []); // Solo se ejecuta una vez al cargar el componente

  // Manejar la inscripción de un curso
  const onInscribir = async (curso) => {
    if (!usuario) {
      alert('Por favor, inicie sesión primero.');
      return;
    }

    try {
      const datosInscripcion = {
        usuario: usuario,  
        cursoId: Number(curso.id),  
      };

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
            onInscribir={() => onInscribir(curso)}  
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
