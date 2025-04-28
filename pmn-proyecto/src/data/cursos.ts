import { Curso } from '../types/Cursos';

export const cursos: Curso[] = [
  { 
    id: 1, 
    nombre: 'Curso de React Básico', 
    descripcion: 'Aprende los fundamentos de React.', 
    evaluaciones: [
      { fecha: '2025-06-10', descripcion: 'Examen Final', nota: 3.0 },
      { fecha: '2025-06-05', descripcion: 'Prueba Parcial', nota: 6.9 }
    ]
  },
  { 
    id: 2, 
    nombre: 'Curso de JavaScript Avanzado', 
    descripcion: 'Profundiza en conceptos avanzados de JavaScript.',
    evaluaciones: [
      { fecha: '2025-07-12', descripcion: 'Examen Final', nota: 4.6 },
      { fecha: '2025-07-08', descripcion: 'Prueba Parcial', nota: 7.0}
    ]
  },
  { 
    id: 3, 
    nombre: 'Curso de Python para Principiantes', 
    descripcion: 'Domina los fundamentos de Python y la programación.', 
    evaluaciones: [
      { fecha: '2025-05-20', descripcion: 'Examen Final', nota: 1.0}
    ]
  },
  { 
    id: 4, 
    nombre: 'Curso de Desarrollo Web', 
    descripcion: 'Aprende a crear sitios web completos desde cero.', 
    evaluaciones: [
      { fecha: '2025-08-15', descripcion: 'Examen Final', nota: 3.5 }
    ]
  },
  { 
    id: 5, 
    nombre: 'Curso de Node.js para Backend', 
    descripcion: 'Aprende a crear APIs RESTful con Node.js.', 
    evaluaciones: [
      { fecha: '2025-06-30', descripcion: 'Examen Final', nota: 5.8 }
    ]
  },
  { 
    id: 6, 
    nombre: 'Curso de Diseño Web con Figma', 
    descripcion: 'Aprende a diseñar interfaces de usuario con Figma.', 
    evaluaciones: [
      { fecha: '2025-09-05', descripcion: 'Examen Final', nota: 6.9 }
    ]
  },
  { 
    id: 7, 
    nombre: 'Curso de Machine Learning Básico', 
    descripcion: 'Introduce al mundo del aprendizaje automático.', 
    evaluaciones: [
      { fecha: '2025-07-25', descripcion: 'Examen Final', nota: 2.3 }
    ]
  },
  { 
    id: 8, 
    nombre: 'Curso de Bases de Datos Relacionales', 
    descripcion: 'Aprende a diseñar y gestionar bases de datos con SQL.', 
    evaluaciones: [
      { fecha: '2025-06-18', descripcion: 'Examen Final', nota: 7.0 }
    ]
  },
  { 
    id: 9, 
    nombre: 'Curso de Git y GitHub', 
    descripcion: 'Aprende control de versiones con Git y cómo usar GitHub.', 
    evaluaciones: [
      { fecha: '2025-06-22', descripcion: 'Examen Final', nota: 6.5}
    ]
  },
];
