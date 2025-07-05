'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    
    getCuentaByCI: function (req, res) {
        //Se entrega la CI del cliente y retorna la cuenta (objeto) o arreglo de objetos si hay mas cuentas en el mismo usuario, si no se encuentra, que retorne el codigo de error
        console.log("Recolectando datos de las cuentas del usuario:")
        var params = req.body;
        var cedula = params.cedula;
        Cuenta.find({ "cedula": cedula }, (err, cuentas) => {
            if (err) return res.status(500).send({ message: 500 });
            if (!cuentas) return res.status(404).send({ message: 404 });
            return res.status(200).send( cuentas );
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