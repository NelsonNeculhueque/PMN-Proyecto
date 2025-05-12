
import React from 'react';
import './Cursos.css';

function CursosLista({ cursos }) {
  return (
    <div className="cursos-container">
      {cursos.length > 0 ? (
        cursos.map((curso) => (
          <div className="curso-card" key={curso.id}>
            <h4>{curso.nombre}</h4>
            <p>{curso.descripcion}</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${curso.progreso}%` }}
              ></div>
            </div>
            <p className="curso-progreso">{curso.progreso}% completado</p>
          </div>
        ))
      ) : (
        <p>No te has inscrito en ningún curso aún.</p>
      )}
    </div>
  );
}

export default CursosLista;
