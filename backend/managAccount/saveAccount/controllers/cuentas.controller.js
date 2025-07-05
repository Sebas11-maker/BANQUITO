'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    
    saveCuenta: function (req, res) {
        var cuenta = new Cuenta();
        var params = req.body;

        cuenta.cedula = params.cedula;
        cuenta.tipo_cuenta = params.tipo_cuenta;
        cuenta.monto_inicial = params.monto_inicial;
        cuenta.ingreso_promedio = params.ingreso_promedio;
        cuenta.numero_cuenta = params.numero_cuenta;
        cuenta.state = params.state;
        cuenta.monto_maximo= 5000;

        cuenta.save((err, cuentaGuardado) => {
            if (err) return res.status(500).send({ message: 500 });
            if (!cuentaGuardado) return res.status(404).send({ message: 404 });
            return res.status(200).send({ message: 200 });
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