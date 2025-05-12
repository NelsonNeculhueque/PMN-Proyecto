const mongoose = require('mongoose');

const inscripcionSchema = new mongoose.Schema({
  usuario: { type: String, required: true },
  cursoId: { type: String, required: true },
  cursoNombre: { type: String, required: true },
  cursoDescripcion: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Inscripcion', inscripcionSchema, 'inscribir');
