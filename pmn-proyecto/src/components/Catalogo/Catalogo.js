import React, { useState } from 'react';
import FiltroCursos from './FiltroCursos';
import './CatalogoCursos.css'; 

function CatalogoCursos() {
  const [filtro, setFiltro] = useState('');

  const cursos = [
    { nombre: 'Curso de React Básico', descripcion: 'Aprende los fundamentos de React.' },
    { nombre: 'Curso de JavaScript Avanzado', descripcion: 'Profundiza en conceptos avanzados de JavaScript.' },
    { nombre: 'Curso de Python para Principiantes', descripcion: 'Introducción a la programación con Python.' },
  ];

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="catalogo-container">
      <h3>Catálogo de cursos disponibles</h3>
      <FiltroCursos filtro={filtro} setFiltro={setFiltro} />

      {cursosFiltrados.length > 0 ? (
        cursosFiltrados.map((curso, index) => (
          <div key={index} className="curso">
            <h4>{curso.nombre}</h4>
            <p>{curso.descripcion}</p>
          </div>
        ))
      ) : (
        <p className="no-result">No se encontraron cursos con ese nombre.</p>
      )}
    </div>
  );
}

export default CatalogoCursos;
