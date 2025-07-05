'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    
    getCuentas: function (req, res) {
        Cuenta.find({}).sort().exec((err, cuentas) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!cuentas) return res.status(404).send({ message: 'No hay usuarios para mostrar' });
            return res.status(200).send({ cuentas });
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