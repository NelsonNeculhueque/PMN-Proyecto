const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Empleado: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);
