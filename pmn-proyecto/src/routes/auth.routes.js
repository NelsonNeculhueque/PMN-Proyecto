// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { connectDB } = require('../mongo'); // ✅ Corrige esta ruta si estaba mal

router.post('/login', async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const db = await connectDB();
    const usuarios = db.collection('usuarios');

    const user = await usuarios.findOne({ usuario, contraseña });

    if (user) {
      res.status(200).json({ mensaje: 'Login exitoso' });
    } else {
      res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor', error });
  }
});

module.exports = router;
