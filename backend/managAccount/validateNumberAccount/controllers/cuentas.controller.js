'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    
    validarNumeroCuenta: function (req, res) {
        //Retorna verdadero si se encuentra una cuenta dentro de la base de datos con un numero de cuenta dado=>params, o si existe un error de conexion.
        var params = req.body;
        console.log(params);
        var numero_cuenta = params.numero_cuenta;
        //console.log(cedula);
        Cuenta.findOne({ "numero_cuenta": numero_cuenta }, (err, guardarCuenta) => {
            if (err) return res.status(200).send(true);
            if (!guardarCuenta) return res.status(200).send(false);
            return res.status(200).send(true);
        })
    },

   

}


async function actualizarCuenta(cuentaActualizada, res) {
    Cuenta.findOneAndUpdate({ "_id": cuentaActualizada._id }, cuentaActualizada, { new: true }, (err, cuenta) => {
        if (err) return res.status(500).send({ message: 'Error al actualizar los datos' });
        if (!cuenta) return res.status(404).send({ message: 'La cuenta no existe para actualizar' });
        //return res.status(200).send(cuenta);
    });
}


module.exports = controller;