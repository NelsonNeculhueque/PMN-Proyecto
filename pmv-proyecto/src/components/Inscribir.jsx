import './Panel.css';

function Curso({ nombre, descripcion, onInscribir }) {
  const handleInscribir = () => {
    onInscribir(); 
    alert(`Te has inscrito en el curso: ${nombre}`); 
  };

  return (
    <div className="curso-card">
      <h4>{nombre}</h4>
      <p>{descripcion}</p>
      <button className="inscribir-btn" onClick={handleInscribir}>
        Inscribirse
      </button>
    </div>
  );
}

export default Curso;
