  import React, { useState, useEffect } from 'react';
  import Curso from './Inscribir'; 
  import { cursos } from '../data/cursos'; 
  import { Curso as CursoType } from '../types/Cursos';
  import './Panel.css';

  const Dashboard: React.FC = () => {
    const [inscripciones, setInscripciones] = useState<CursoType[]>([]);


    useEffect(() => {
      const storedInscripciones = localStorage.getItem('inscripciones');
      if (storedInscripciones) {
        setInscripciones(JSON.parse(storedInscripciones));
      }
    }, []); 

  
    const handleInscripcion = (curso: CursoType) => {
      const yaInscrito = inscripciones.some((c) => c.id === curso.id);
      if (!yaInscrito) {
        const updatedInscripciones = [...inscripciones, curso];
        setInscripciones(updatedInscripciones);
        localStorage.setItem('inscripciones', JSON.stringify(updatedInscripciones));
        alert(`Te has inscrito en el curso: ${curso.nombre}`);
      } else {
        alert(`Ya estás inscrito en el curso: ${curso.nombre}`);
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
              onInscribir={() => handleInscripcion(curso)}
            />
          ))}
        </div>
      </div>
    );
  }

  export default Dashboard;
