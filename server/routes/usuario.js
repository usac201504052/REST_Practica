const express = require('express');
const Usuario = require('../models/usuario'); // Importar el modelo de usuario
const app = express();


// ============PETICIONES============
// GET general
app.get('/usuario', (req, res) => {
    res.json('Usuarioooos');
    console.log("Aqui hay usuarios");
})

// POST
app.post('/usuario', (req, res) => {

    // Obtener los parametros que se envian
    let body = req.body;

    // Instanciar un objeto del esquema Usuario
    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        password: body.password,
        role: body.role

    })

    //Guardar en DB
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
})

// PUT
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json(`Yo actualizare a ${id}`)
})

// DELETE
app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json(`Yo borrare a ${id}`)
})
module.exports = app;