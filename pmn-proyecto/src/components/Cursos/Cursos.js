import React from 'react';
import CursosLista from './Lista-cursos';
import './Cursos.css';

function Cursos() {
  return (
    <div className="dashboard">
      <h3>Mis cursos</h3>
      <CursosLista />
    </div>
  );
}

export default Cursos;
