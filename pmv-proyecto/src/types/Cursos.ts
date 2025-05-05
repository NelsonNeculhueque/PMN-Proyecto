export interface Evaluacion {
    fecha: string; 
    descripcion: string; 
    nota: number;  
  }
  
  
  export interface Curso {
    id: number;
    nombre: string;
    descripcion: string;
    evaluaciones: Evaluacion[];
  }