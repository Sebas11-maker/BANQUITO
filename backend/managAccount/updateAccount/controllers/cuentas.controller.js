'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    
    actualizarCuenta: function (req, res) {
        //se recibe un onbjeto->{idCuenta,cuenta}
        var params= req.body;
        var idCuenta = params.idCuenta
        var cuenta= params.cuenta
        console.log(idCuenta)
        Cuenta.findOneAndUpdate({ "_id": idCuenta}, cuenta, { new: true }, (err, cuenta) => {
            if (err) return res.status(200).send({ message: 404 });
            if (!cuenta) return res.status(200).send({ message: 404 });
            return res.status(200).send({ message: 200 });
        });
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