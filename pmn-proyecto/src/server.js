// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/auth.routes');
app.use('/', authRoutes);

// Iniciar servidor
app.listen(4000, () => {
  console.log('🚀 Servidor backend escuchando en http://localhost:4000');
});
