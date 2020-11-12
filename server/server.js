// Importaciones
require('./config/config.js'); // Archivo de configuracion
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Procesar peticiones 
app.use(bodyParser.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(bodyParser.json()); // json

// Usar rutas
app.use(require('./routes/index'));

// Conexion con DB
mongoose.connect('mongodb://localhost:27017/escuela', { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
})

// Escuchar en el puerto indicado
app.listen(process.env.PORT, () => {
    console.log(`Servidor abierto en puerto ${process.env.PORT}`);
})