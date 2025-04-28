import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'; 
import Panel from './components/Panel';
import Cursos from './components/Cursos/Cursos';
import Calendario from './components/Calendario/Calendario';
import CatalogoCursos from './components/Catalogo/Catalogo';
import NotasAlumno from './components/Notas/Notas';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cargar el estado de inicio de sesión desde localStorage
  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('inscripciones'); 
    alert('Has cerrado sesión');
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {isLoggedIn && (
          <aside className="sidebar">
            <h1>CapacitApp</h1>
            <nav>
              <Link to="/panel">Panel</Link>
              <Link to="/cursos">Cursos</Link>
              <Link to="/calendario">Calendario</Link>
              <Link to="/catalogo">Catálogo de Cursos</Link>
              <Link to="/notas">Notas</Link>  
            </nav>
          </aside>
        )}

        <main className="main-content">
        {isLoggedIn && (
            <div className="logout-container">
              <button onClick={handleLogout} className="logout-button">
                Cerrar sesión
              </button>
            </div>
        )}
          <Routes>
            <Route path="/" element={
              isLoggedIn ? <Navigate to="/panel" /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/panel" element={
              isLoggedIn ? <Panel /> : <Navigate to="/" />
            } />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/calendario" element={<Calendario />} /> 
            <Route path="/catalogo" element={<CatalogoCursos />} />
            <Route path="/notas" element={<NotasAlumno />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
