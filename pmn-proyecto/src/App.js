  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  import './App.css'; 
  import Panel from './components/Panel';
  import Cursos from './components/Cursos';
  import CursoDetalle from './components/Detalle-Cursos';
  import Calendario from './components/Calendario';
  import CatalogoCursos from './components/Catalogo';
  import NotasAlumno from './components/Notas';
  import Login from './components/Login';

  function App() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <aside className="sidebar">
            <h1>CapacitApp</h1>
            <nav>
              <Link to="/panel">Panel</Link>
              <Link to="/cursos/">Cursos</Link>
              <Link to="/calendario">Calendario</Link>
              <Link to="/catalogo">Catalogo de Cursos</Link>
              <Link to="/notas/123">Notas</Link>  
              <Link to="/Login">Login</Link>
            </nav>
          </aside>

          <main className="main-content">
            <Routes>
              <Route path="/panel" element={<Panel />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/curso/:id" element={<CursoDetalle />} />
              <Route path="/calendario" element={<Calendario />} /> 
              <Route path="/catalogo" element={<CatalogoCursos />} />
              <Route path="/notas/:alumnoId" element={<NotasAlumno />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
