import React, { useState } from 'react';

function Curso({ nombre, descripcion }) {
  const [inscrito, setInscrito] = useState(false);

  const handleInscribir = () => {
    setInscrito(true);
    alert(`${nombre} inscrito exitosamente`);  
  };

  return (
    <div>
      <h4>{nombre}</h4>
      <p>{descripcion}</p>
      <button onClick={handleInscribir} disabled={inscrito}>
        {inscrito ? 'Inscrito' : 'Inscribir'}
      </button>
    </div>
  );
}

export default Curso;
