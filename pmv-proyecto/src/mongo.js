// backend/mongo.js
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nelson2005abner:NelsonNecu@cluster0.na0ud8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    return client.db('CapacitApp'); // Reemplaza con el nombre real de tu base de datos
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    throw error;
  }
};

module.exports = { connectDB };
