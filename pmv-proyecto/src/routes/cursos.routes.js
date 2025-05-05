const express = require('express');
const router = express.Router();
const { connectDB } = require('../mongo');

// Ruta para obtener todos los cursos
router.get('/cursos', async (req, res) => {
  try {
    const db = await connectDB();
    const cursos = db.collection('cursos');  // Aquí asumimos que tienes una colección llamada "cursos"

    const cursosList = await cursos.find().toArray();  // Obtiene todos los cursos

    if (cursosList.length > 0) {
      res.status(200).json(cursosList);  // Devuelve los cursos en formato JSON
    } else {
      res.status(404).json({ mensaje: 'No se encontraron cursos' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor', error });
  }
});

module.exports = router; 