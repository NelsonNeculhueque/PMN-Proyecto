// MisNotas.tsx
import React from 'react';
import { cursos } from '../../data/cursos';       
import { Curso } from '../../types/Cursos';
import './Notas.css';                        

const MisNotas: React.FC = () => {
  return (
    <div className="notas-container">
      {cursos.map((curso: Curso) => (
        <div key={curso.id} className="curso-notas">
          <h4>{curso.nombre}</h4>
          <ul>
            {curso.evaluaciones.map((evalItem, idx) => (
              <li key={idx}>
                <strong>{evalItem.descripcion}</strong> {' '}
                {new Date(evalItem.fecha).toLocaleDateString('es-ES', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}: {evalItem.nota}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MisNotas;
