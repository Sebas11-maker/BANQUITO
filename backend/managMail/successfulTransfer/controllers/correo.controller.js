'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    transferenciaExitosa: function (req, res) {
        //parametros 
        var nodemailer = require('nodemailer');
        var params = req.body;
        var correo = params.correo;
        var cuenta1 = params.cuenta1;
        var cuenta2 = params.cuenta2;
        var monto = params.monto;
        var descripcion = params.descripcion;
        var mensaje = "";
        console.log(params);
        cuenta2 = cuenta2.substr(0, 2) + "XXXXXX" + cuenta2.substr(8);
        cuenta1 = cuenta1.substr(0, 2) + "XXXXXX" + cuenta1.substr(8);

        mensaje = "Estimado Cliente" + '\n\n' + "BanQuito le informa que a las: " + getTime() + "se ha realizado un movimiento en su banca web." +
            "A continuación, se detallan los detalles de su transacción: " + '\n\n' + "Cuenta Destino: " + cuenta2 + "\nCuenta Origen: " + cuenta1 +
            "\nMonto transferido: $" + monto + "\nConcepto de la transferencia: " + descripcion + "\n\n Si no realizó esta acción, por favor póngase en contacto con nuestro equipo de soporte al cliente";;
        //fecha y hora
        function getTime() {
            var date = new Date();
            var hr = date.getHours();
            var min = date.getMinutes();
            var seg = date.getSeconds();
            var dia = date.getDay();
            var mes = date.getMonth() + 1;
            var anio = date.getFullYear();

            if (dia <= 9) {
                dia = "0" + dia;
            }
            if (hr <= 9) {
                hr = "0" + hr;
            }
            if (min <= 9) {
                min = "0" + min;
            }
            if (seg <= 9) {
                seg = "0" + seg;
            }
            var hora = hr + ":" + min + ":" + seg + " del " + dia + "/" + mes + "/" + anio;
            return hora;
        }
        //inicializar el correo
        console.log("Email enviado");
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'sfqaeab@gmail.com',
                pass: 'uylohfcmmhhqdonk'
            },
        });
        //Redactar correo
        var mailOptions = {
            from: "Banquito - Resumen <sfqaeab@gmail.com>",
            to: correo,
            subject: "Transferencia Interna Realizada",
            text: mensaje
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                res.status("200");
            }
        })
    },
   
}
module.exports = controller;