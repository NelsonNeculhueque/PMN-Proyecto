import { useState } from 'react';
import { cursos } from '../../data/cursos'; 
import { Curso } from '../../types/Cursos'; 
import './Calendario.css';


const getEvaluacionesForMonth = (month: number) => {
  return cursos.flatMap((curso: Curso) => 
    curso.evaluaciones
      .filter((evaluacion) => new Date(evaluacion.fecha).getMonth() === month)  
      .map((evaluacion) => new Date(new Date(evaluacion.fecha).setDate(new Date(evaluacion.fecha).getDate() + 1)).getDate()) 
  );
};

function Calendario() {

  const [mes, setMes] = useState<number>(new Date().getMonth());
  
  const dias = Array.from({ length: new Date(2025, mes + 1, 0).getDate() }, (_, i) => i + 1);

  const evaluaciones = getEvaluacionesForMonth(mes);

  const siguienteMes = () => {
    if (mes < 11) {
      setMes(mes + 1);
    } else {
      setMes(0); 
    }
  };

  const mesAnterior = () => {
    if (mes > 0) {
      setMes(mes - 1);
    } else {
      setMes(11);
    }
  };

  return (
    <div className="calendario-container">
      <h3>📅 Calendario de Evaluaciones - {new Date().getFullYear()}</h3>
      <h4>Mes: {new Date(2025, mes).toLocaleString('es-ES', { month: 'long' })}</h4>

      <div className="calendario-navegacion">
        <button onClick={mesAnterior}>◀ Mes Anterior</button>
        <button onClick={siguienteMes}>Mes Siguiente ▶</button>
      </div>
      
      <div className="calendario-grid">
        {dias.map((dia) => (
          <div
            key={dia}
            className={`calendario-dia ${evaluaciones.includes(dia) ? 'evaluacion' : ''}`}
          >
            {dia}
            {evaluaciones.includes(dia) && <span className="punto-rojo"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendario;
