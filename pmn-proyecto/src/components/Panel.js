import React from 'react';
import Curso from './Inscribir';

function Dashboard() {
  return (
    <div className="dashboard">
      <h3>Panel Empleado</h3>

      <div className="curso-container">
        <Curso 
          nombre="Curso de React Básico" 
          descripcion="Aprende los fundamentos de React."
        />
        
        <Curso 
          nombre="Curso de JavaScript Avanzado" 
          descripcion="Profundiza en conceptos avanzados de JavaScript."
        />

        <Curso 
          nombre="Curso de Python para Principiantes" 
          descripcion="Domina los fundamentos de Python y la programación."
        />
        
        <Curso 
          nombre="Curso de Desarrollo Web" 
          descripcion="Aprende a crear sitios web completos desde cero."
        />

        <Curso 
          nombre="Curso de Node.js para Backend" 
          descripcion="Aprende a crear APIs RESTful con Node.js."
        />
        
        <Curso 
          nombre="Curso de Diseño Web con Figma" 
          descripcion="Aprende a diseñar interfaces de usuario con Figma."
        />

        <Curso 
          nombre="Curso de Machine Learning Básico" 
          descripcion="Introduce al mundo del aprendizaje automático."
        />

        <Curso 
          nombre="Curso de Bases de Datos Relacionales" 
          descripcion="Aprende a diseñar y gestionar bases de datos con SQL."
        />
        
        <Curso 
          nombre="Curso de Git y GitHub" 
          descripcion="Aprende control de versiones con Git y cómo usar GitHub."
        />
      </div>
    </div>
  );
}

export default Dashboard;
