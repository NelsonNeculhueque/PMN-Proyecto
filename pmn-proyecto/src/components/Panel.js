import React from 'react';
import Curso  from './Inscribir';

function Dashboard() {
  return (
   <div>
      <h3>Panel Empleado</h3>

      <div>
        <Curso 
          nombre="Curso de React Básico" 
          descripcion="Aprende los fundamentos de React."
        />
      </div>

      <div>
        <Curso 
          nombre="Curso de JavaScript Avanzado" 
          descripcion="Profundiza en conceptos avanzados de JavaScript."
        />
      </div>
    </div>
  );
}
export default Dashboard;
