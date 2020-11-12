const express = require('express');
const app = express();

// RUTAS
app.use(require('./usuario'));

module.exports = app;