const express = require('express');
const router = express.Router();
const { connectDB } = require('../mongo');

// POST: Inscribir a un curso
router.post('/inscribir', async (req, res) => {
  const { cursoId } = req.body; // Eliminamos 'usuario' del cuerpo de la solicitud

  if (!cursoId) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
  }

  try {
    const db = await connectDB();
    const cursosCollection = db.collection('cursos');
    const inscripcionesCollection = db.collection('Inscribir');

    // Asegúrate de que cursoId sea del mismo tipo que en la base (número o texto)
    const curso = await cursosCollection.findOne({ id: cursoId });
    if (!curso) {
      return res.status(404).json({ mensaje: 'Curso no encontrado' });
    }

    const nuevaInscripcion = {
      usuario: 'Empleado', // Forzamos que el usuario sea siempre "Empleado"
      cursoId,
      cursoNombre: curso.nombre,
      cursoDescripcion: curso.descripcion,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await inscripcionesCollection.insertOne(nuevaInscripcion);

    return res.status(201).json({ mensaje: 'Inscripción exitosa', inscripcion: nuevaInscripcion });
  } catch (error) {
    console.error('Error al inscribirse:', error);
    return res.status(500).json({ mensaje: 'Error al inscribirse', error: error.message });
  }
});

// GET: Obtener todas las inscripciones
router.get('/inscribir', async (req, res) => {
  try {
    const db = await connectDB();
    const inscripcionesCollection = db.collection('Inscribir');

    const lista = await inscripcionesCollection.find().toArray();

    if (lista.length > 0) {
      res.status(200).json(lista);
    } else {
      res.status(404).json({ mensaje: 'No se encontraron inscripciones' });
    }
  } catch (error) {
    console.error('Error al obtener inscripciones:', error);
    res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
  }
});

module.exports = router;
