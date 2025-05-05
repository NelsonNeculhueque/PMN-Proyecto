const express = require('express');
const router = express.Router();
const Inscripcion = require('../models/Inscripcion'); // Asegúrate de que la ruta sea correcta

router.post('/inscribir', async (req, res) => {
  const { usuario, cursoId } = req.body;

  // Validación de los campos obligatorios
  if (!usuario || !cursoId) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
  }

  try {
    // Verificar si ya está inscrito en el curso
    const existente = await Inscripcion.findOne({ usuario, cursoId }); // Asegúrate de usar el modelo correctamente
    if (existente) {
      return res.status(409).json({ mensaje: 'Ya estás inscrito en este curso' });
    }

    // Crear una nueva inscripción
    const nuevaInscripcion = new Inscripcion({ usuario, cursoId });
    await nuevaInscripcion.save(); // Guarda la inscripción en la base de datos

    return res.status(201).json({ mensaje: 'Inscripción exitosa', inscripcion: nuevaInscripcion });
  } catch (error) {
    console.error('Error al inscribirse:', error);
    return res.status(500).json({ mensaje: 'Error al inscribirse', error: error.message });
  }
});

module.exports = router;
