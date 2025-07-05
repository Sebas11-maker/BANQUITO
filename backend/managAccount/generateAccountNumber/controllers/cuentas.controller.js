'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var fs = require('path');
const path = require('path');
var controller = {
    
    generarNumeroCuenta: async function (req, res) {

        try {
            var params = req.body;
            var ahorro = params.ahorro;
            var digitos = params.digitos;
            var bucle = "ture";

            var numero = null;
            var cuenta;

            do {
                if (ahorro == true) {
                    numero = '10';
                } else if(ahorro == false){
                    numero = '20';
                }
                for (let i = 0; i < digitos - 2; i++) {
                    numero += Math.floor(Math.random() * 10).toString();
                }

                cuenta = await Cuenta.findOne({ "numero_cuenta": numero }).exec();

                if (cuenta == null) {
                    //bucle = "false";
                    return res.status(200).send({ numero });
                    
                }
            } while (bucle)
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Error al generar el numero' });
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