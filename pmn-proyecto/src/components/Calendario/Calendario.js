import React from 'react';
import './Calendario.css';

const evaluaciones = [5, 12, 18, 25];

function Calendario() {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1); 

  return (
    <div className="calendario-container">
      <h3>📅 Calendario Próximas Evaluaciones</h3>
      <div className="calendario-grid">
        {dias.map((dia) => (
          <div
            key={dia}
            className={`calendario-dia ${evaluaciones.includes(dia) ? 'evaluacion' : ''}`}
          >
            {dia}
            {evaluaciones.includes(dia) && <span className="punto-rojo"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendario;
