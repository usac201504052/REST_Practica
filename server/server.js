// Importaciones

// Archivo de configuracion
require('./config/config.js');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/escuela', { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
//     if (err) throw err;
//     Console.log('Base de datos ONLINE');
// })


app.listen(process.env.PORT, () => {
    console.log(`Servidor abierto en puerto ${process.env.PORT}`);
})