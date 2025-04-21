import React from 'react';

function MisNotas() {
  const notas = [
    { curso: 'React Básico', nota: 5.5 },
    { curso: 'JavaScript Avanzado', nota: 4.6 },
    { curso: 'Python para Principiantes', nota: 7.0 },
  ];

  return (
    <ul className="lista-notas">
      {notas.map((nota, index) => (
        <li key={index}>
          <strong>{nota.curso}</strong>: {nota.nota}
        </li>
      ))}
    </ul>
  );
}

export default MisNotas;
