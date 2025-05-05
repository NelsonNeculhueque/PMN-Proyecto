import React, { useState, useEffect } from 'react';
import { fetchCursos } from '../../api/cursos';  // Importa la función de la API
import FiltroCursos from './FiltroCursos';
import './CatalogoCursos.css';

function CatalogoCursos() {
  // Estados
  const [filtro, setFiltro] = useState('');
  const [cursosFiltrados, setCursosFiltrados] = useState([]);
  const [cursos, setCursos] = useState([]);  // Estado para almacenar los cursos obtenidos de la API
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCursos = async () => {
      try {
        const data = await fetchCursos();  // Llama a la función que hace la petición
        console.log(data);  // Verifica la estructura de los datos
        setCursos(data);  // Guarda los cursos obtenidos
        setCargando(false);
      } catch (error) {
        setError('No se pudieron cargar los cursos.');
        setCargando(false);
      }
    };

    loadCursos();  // Llama a la función cuando el componente se monta
  }, []);  // Se ejecuta solo una vez cuando el componente se monta

  useEffect(() => {
    setCursosFiltrados(
      cursos.filter((curso) =>
        curso.nombre.toLowerCase().includes(filtro.toLowerCase())  // Filtra por nombre
      )
    );
  }, [filtro, cursos]);  // Actualiza los cursos filtrados cuando el filtro o los cursos cambian

  return (
    <div className="catalogo-container">
      <h3>Catálogo de cursos disponibles</h3>
      <FiltroCursos filtro={filtro} setFiltro={setFiltro} /> {/* Componente para el filtro */}

      {cargando ? (
        <p>Cargando cursos...</p>  // Muestra mensaje de carga
      ) : error ? (
        <p className="error">{error}</p>  // Muestra mensaje de error si hay un problema
      ) : cursosFiltrados.length > 0 ? (
        cursosFiltrados.map((curso) => (
          <div key={curso._id} className="curso">  {/* Usamos _id si es MongoDB */}
            <h4>{curso.nombre}</h4>
            <p>{curso.descripcion}</p>
          </div>
        ))
      ) : (
        <p className="no-result">No se encontraron cursos con ese nombre.</p>  // Si no hay resultados
      )}
    </div>
  );
}

export default CatalogoCursos;
