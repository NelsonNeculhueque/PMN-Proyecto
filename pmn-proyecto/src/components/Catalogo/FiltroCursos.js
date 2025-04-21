import React from 'react';

function FiltroCursos({ filtro, setFiltro }) {
  return (
    <input
      type="text"
      placeholder="Filtrar cursos..."
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
      className="filtro-input"
    />
  );
}

export default FiltroCursos;
