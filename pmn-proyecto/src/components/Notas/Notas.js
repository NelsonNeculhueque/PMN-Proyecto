import React from 'react';
import './Notas.css';
import MisNotas from './Mis-Notas';

function NotasAlumno() {
  return (
    <div className="notas-container">
      <h3>Mis Notas</h3>
      <MisNotas />
    </div>
  );
}

export default NotasAlumno;
