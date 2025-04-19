import React from 'react';

function FiltroCursos({ filtro, setFiltro }) {
  return (
    <input
      type="text"
      placeholder="Filtrar cursos..."
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
      style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
    />
  );
}

export default FiltroCursos;
