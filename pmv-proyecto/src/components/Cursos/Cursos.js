import React, { useState, useEffect } from 'react';
import CursosLista from './Lista-cursos';
import './Cursos.css';

function Cursos() {
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    const storedInscripciones = localStorage.getItem('inscripciones');
    if (storedInscripciones) {
      setInscripciones(JSON.parse(storedInscripciones));
    }
  }, []); 

  return (
    <div className="dashboard">
      <h3>Mis cursos</h3>
      <CursosLista cursos={inscripciones} />
    </div>
  );
}

export default Cursos;
