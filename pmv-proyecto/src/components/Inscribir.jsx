import './Panel.css';

function Curso({ nombre, descripcion, onInscribir }) {
  return (
    <div className="curso-card">
      <h4>{nombre}</h4>
      <p>{descripcion}</p>
      <button className="inscribir-btn" onClick={onInscribir}>
        Inscribirse
      </button>
    </div>
  );
}

export default Curso;
