'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransaccionSchema = Schema({

    cedula: Number,
    nombres: String,
    apellidos: String,
    tipo_cuenta: String,
    monto: Number,

    cedulaReceptor: Number,
    nombresReceptor: String,
    apellidosReceptor: String,
    tipo_cuentaReceptor: String

});

const Transaccion = mongoose.models.Transaccion || mongoose.model('Transaccion', transaccionSchema);

module.exports = Transaccion;