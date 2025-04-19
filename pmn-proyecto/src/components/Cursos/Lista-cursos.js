import React from 'react';

function Cursos() {
  const cursos = [
    { id: 1, nombre: 'Curso de React Básico', descripcion: 'Aprende los fundamentos de React.js.' },
    { id: 2, nombre: 'Curso de JavaScript Avanzado', descripcion: 'Profundiza en JavaScript para dominar la programación.' },
    { id: 3, nombre: 'Curso de Python para Principiantes', descripcion: 'Introducción a Python desde cero.' },
    { id: 4, nombre: 'Curso de HTML y CSS', descripcion: 'Aprende a crear páginas web con HTML y CSS.' },
  ];

  return (
    <div>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <h4>{curso.nombre}</h4>
            <p>{curso.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cursos;
