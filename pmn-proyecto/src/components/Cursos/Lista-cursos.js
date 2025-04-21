import React from 'react';
import './Cursos.css';

function CursosLista() {
  const cursos = [
    { id: 1, nombre: 'Curso de React Básico', descripcion: 'Aprende los fundamentos de React.js.', progreso: 70 },
    { id: 2, nombre: 'Curso de JavaScript Avanzado', descripcion: 'Profundiza en JavaScript para dominar la programación.', progreso: 40 },
    { id: 3, nombre: 'Curso de Python para Principiantes', descripcion: 'Introducción a Python desde cero.', progreso: 85 },
    { id: 4, nombre: 'Curso de HTML y CSS', descripcion: 'Aprende a crear páginas web con HTML y CSS.', progreso: 60 },
    { id: 5, nombre: 'Curso de Node.js', descripcion: 'Curso de desarrollo con Node.js.', progreso: 55 },
    { id: 6, nombre: 'Curso de Bases de Datos', descripcion: 'Aprende sobre SQL y bases de datos relacionales.', progreso: 30 },
    { id: 7, nombre: 'Curso de Diseño Web', descripcion: 'Diseño web con HTML5, CSS3 y JavaScript.', progreso: 90 },
    { id: 8, nombre: 'Curso de C++ Avanzado', descripcion: 'Enfocado en conceptos avanzados de C++.', progreso: 20 },
    { id: 9, nombre: 'Curso de Git y GitHub', descripcion: 'Domina el control de versiones con Git.', progreso: 75 },
  ];

  return (
    <div className="cursos-container">
      {cursos.map((curso) => (
        <div className="curso-card" key={curso.id}>
          <h4>{curso.nombre}</h4>
          <p>{curso.descripcion}</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${curso.progreso}%` }}></div>
          </div>
          <p className="curso-progreso">{curso.progreso}% completado</p>
        </div>
      ))}
    </div>
  );
}

export default CursosLista;
