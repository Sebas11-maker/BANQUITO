'use strict'
//const axios = require('axios');
var Cuenta = require('../models/cuenta');
var Transaccion = require('../models/transacciones');


var fs = require('path');
const path = require('path');
var controller = {



    verificarCuentaExterna:  async function (req, res) {
        var params = req.body

        var cuenta = await Cuenta.findOne({ "numero_cuenta": params.numero_cuenta }).exec();

        if (!cuenta) {
            return res.status(404).send({ message: 'No se encontró la cuenta 1' });
        }

        return res.status(404).send(cuenta);

    },



}

async function actualizarCuenta(cuentaActualizada, res) {
    Cuenta.findOneAndUpdate({ "_id": cuentaActualizada._id }, cuentaActualizada, { new: true }, (err, cuenta) => {
        if (err) return res.status(500).send({ message: 'Error al actualizar los datos' });
        if (!cuenta) return res.status(404).send({ message: 'La cuenta no existe para actualizar' });
        //return res.status(200).send(cuenta);
    });
}



async function getCliente(cedula) {

    var Cliente = require('../models/Cliente');
    
    return await Cliente.findOne({ "cedula": cedula }).exec();
    
}


async function conexionTransaccionExterna(numeroCuenta2, monto, cliente) {

   // console.log(numeroCuenta2)
    //console.log(monto)
    //console.log(cliente)

    
    const axios = require('axios');

    //const url1 = 'http://26.19.181.67:3600/verificarCuentaExterna';
    const url2 = 'http://26.19.181.67:3600/realizar-transaccion-externa';

    const params = {
      monto: monto,
      numero_cuenta: numeroCuenta2,
      //aqui el nombre de las variables depende del banco externo
      nombres: cliente.nombres,
      apellidos: cliente.apellidos,
      cedula: cliente.cedula,
      correo_electronico: cliente.correo_electronico

    };
  
    try {
         /*
            

            const params = { numero_cuenta: numeroCuenta2 };
            
            const respuest1=await axios.post(url1, params);

            if(respuesta1 == "false"){

                return "La cuenta no existe"

            }else{

                const params = {
                    monto: monto,
                    numero_cuenta: numeroCuenta2,
                    //aqui el nombre de las variables depende del banco externo
                    nombres: cliente.nombres,
                    apellidos: cliente.apellidos,
                    cedula: cliente.cedula,
                    correo_electronico: cliente.correo_electronico
              
                  };

                return await axios.post(url2, params);

            }
        */


      const response = await axios.post(url2, params);
      return response.data.message;
    } catch (error) {
      console.error(error);
    }
    
  }
 




module.exports = controller;