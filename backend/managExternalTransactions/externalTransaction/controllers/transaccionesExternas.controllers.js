'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var Transaccion = require('../models/transacciones');


var fs = require('path');
const path = require('path');
var controller = {

    transaccionExterna:  async function (req, res) {


        try {
            
            //var clientesController=require('../controllers/cliente.controller');
            
            var params = req.body;
            var monto = params.monto;
            var numeroCuenta1 = params.numeroCuenta1;
            var numeroCuenta2 = params.numeroCuenta2;
            console.log(numeroCuenta1);
            console.log(numeroCuenta2);
            console.log(monto);

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
            
            //retorna el clinte por su numero de cedula
            const cliente = await getCliente(cuenta1.cedula)
            //console.log(cliente)





            const resultado= await conexionTransaccionExterna(numeroCuenta2,monto, cliente)

           
            console.log(resultado);


            
            

            return res.status(200).send({ message: resultado , cliente});
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Error al procesar la transacción' });
        }
    },

   
    
  }
 








  



module.exports = controller;