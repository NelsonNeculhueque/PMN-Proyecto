import React from 'react';
import { useParams } from 'react-router-dom';

function NotasAlumno() {
  const { alumnoId } = useParams();
  return <h3>Notas del alumno con ID: {alumnoId}</h3>;
}

export default NotasAlumno;
