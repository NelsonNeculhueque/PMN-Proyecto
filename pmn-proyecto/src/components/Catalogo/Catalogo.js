import React, { useState, useEffect } from 'react';
import FiltroCursos from './FiltroCursos';
import { cursos } from '../../data/cursos'; 
import './CatalogoCursos.css';

function CatalogoCursos() {
  const [filtro, setFiltro] = useState('');
  const [cursosFiltrados, setCursosFiltrados] = useState(cursos); 
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 1500);
  }, []);

  useEffect(() => {
    
    setCursosFiltrados(
      cursos.filter((curso) =>
        curso.nombre.toLowerCase().includes(filtro.toLowerCase())
      )
    );
  }, [filtro]); 

  return (
    <div className="catalogo-container">
      <h3>Catálogo de cursos disponibles</h3>
      <FiltroCursos filtro={filtro} setFiltro={setFiltro} />

      {cargando ? (
        <p>Cargando cursos...</p>
      ) : cursosFiltrados.length > 0 ? (
        cursosFiltrados.map((curso) => (
          <div key={curso.id} className="curso">
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
