// Cursos.jsx
import React, { useState, useEffect } from 'react';
import CursosLista from './Lista-cursos';
import { obtenerInscripciones } from '../../api/Inscripciones';
import './Cursos.css';

function Cursos({ usuario }) {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await obtenerInscripciones();
        console.log('Datos obtenidos de inscripciones:', data);

        // Aquí, estamos forzando que el 'usuario' sea "Empleado"
        const usuarioId = "Empleado"; 

        const misInscripciones = data.filter(ins => ins.usuario === usuarioId); 
        console.log('Mis inscripciones:', misInscripciones);

        const cursosFormateados = misInscripciones.map(ins => ({
          id: ins.cursoId, 
          nombre: ins.cursoNombre,
          descripcion: ins.cursoDescripcion,
          progreso: 0, // Puedes agregar lógica para calcular el progreso si es necesario
        }));

        console.log('Cursos formateados:', cursosFormateados);
        setCursos(cursosFormateados);
      } catch (error) {
        console.error('Error al cargar inscripciones:', error.message);
      }
    };

    cargar();
  }, [usuario]);  // No es necesario que 'usuario' cambie para este caso

  return (
    <div className="dashboard">
      <h3>Mis cursos</h3>
      <CursosLista cursos={cursos} />
    </div>
  );
}

export default Cursos;
