import React from 'react';
import { useParams } from 'react-router-dom';

function CursoDetalle() {
  const { id } = useParams();
  return <h3>Detalles del curso con ID: {id}</h3>;
}

export default CursoDetalle;
