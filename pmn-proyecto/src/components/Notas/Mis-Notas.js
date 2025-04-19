import React from 'react';

function NotasAlumno() {
  const notas = [
    { curso: 'React Básico', nota: 5.5 },
    { curso: 'JavaScript Avanzado', nota: 4.6 },
    { curso: 'Python para Principiantes', nota: 7.0 },
  ];

  return (
    <div>
      <ul>
        {notas.map((nota, index) => (
          <li key={index}>
            <strong>{nota.curso}</strong>: {nota.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotasAlumno;
