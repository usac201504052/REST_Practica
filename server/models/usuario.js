// MODELO DE LOS USUARIOS

const mongoose = require('mongoose');

// Obtener propiedades de Schema
let Schema = mongoose.Schema;

// Creacion del esquema
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'TEACHER_ROLE',
        required: [true, 'El rol es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

// Exportar el modelo
module.exports = mongoose.model('Usuario', usuarioSchema); // 'Usuario' tendra las propiedades de usuarioSchema