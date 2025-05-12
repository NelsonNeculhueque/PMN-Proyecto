const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/auth.routes');
const cursosRoutes = require('./routes/cursos.routes');
const inscripcionesRoutes = require('./routes/Inscripciones.routes');   // Ruta de cursos

// Usa las rutas
app.use('/api/auth', authRoutes);  
app.use('/api/cursos', cursosRoutes);  
app.use('/api/inscribir', inscripcionesRoutes);

// Iniciar servidor
app.listen(4000, () => {
  console.log('🚀 Servidor backend escuchando');
});
