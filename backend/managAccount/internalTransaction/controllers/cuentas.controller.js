'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    

    transaccionInterna: async function (req, res) {
        try {
            var params = req.body;
            var monto = params.monto;
            var numeroCuenta1 = params.cuenta1;
            var numeroCuenta2 = params.cuenta2;

            var cuenta1 = await Cuenta.findOne({ "numero_cuenta": numeroCuenta1 }).exec();
            if (!cuenta1) {
                return res.status(404).send({ message: 'No se encontró la cuenta 1' });
            }

            if (cuenta1.monto_inicial <= monto) {

                return res.status(404).send({ message: 'No tienes suficientes fondos' });

            }

            if (cuenta1.monto_maximo <= monto) {

                return res.status(404).send({ message: 'No puede transferir mas de 5000 en un solo dia' });

            }
            

            var cuenta2 = await Cuenta.findOne({ "numero_cuenta": numeroCuenta2 }).exec();
            if (!cuenta2) {
                return res.status(404).send({ message: 'No se encontró la cuenta 2' });
            }

            cuenta2.monto_inicial = cuenta2.monto_inicial + parseInt(monto);
            cuenta1.monto_inicial = cuenta1.monto_inicial - parseInt(monto);

            await actualizarCuenta(cuenta1, res)
            await actualizarCuenta(cuenta2, res)

            return res.status(200).send({ message: 'Transacción realizada con éxito' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Error al procesar la transacción' });
        }
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