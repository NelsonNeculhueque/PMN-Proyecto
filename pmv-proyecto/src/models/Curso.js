const mongoose = require('mongoose');

const evaluacionSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  fecha: { type: Date, required: true },
  nota: { type: Number, required: true }
});

const cursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  evaluaciones: [evaluacionSchema]  // Un curso tiene varias evaluaciones
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;
