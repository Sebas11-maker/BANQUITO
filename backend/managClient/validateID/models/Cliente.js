'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({

    nombres: String,
    apellidos: String,
    cedula: Number,
    codigo_dactilar: String,
    fecha_nacimiento: String,
    correo_electronico: String,
    direccion: String,
    ocupacion: String,
    numero_telefono: String,
    state: Boolean
});
const Cliente = mongoose.models.Cliente || mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;