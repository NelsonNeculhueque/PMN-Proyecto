import mongoose from 'mongoose';

const inscripcionSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
  },
  cursoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso',
    required: true,
  },
  fechaInscripcion: {
    type: Date,
    default: Date.now,
  },
});

const Inscripcion = mongoose.model('Inscripcion', inscripcionSchema);
export default Inscripcion;
