'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    confirmarTransferencia: function (req, res) {
        //parametros 
        var nodemailer = require('nodemailer');
        var params = req.body;
        var correo = params.correo;
        var mensaje1 = "Estimado Cliente" + '\n\n' + "BanQuito le informa que a las: " + getTime() + "se ha solicitado una petición para efectuar una trnasferencia. Su código para la Banca Virtual es: \n\n "
        var mensaje2 = "\n\n Si no realizó esta acción, por favor póngase en contacto con nuestro equipo de soporte al cliente";
        var otp = "";
        console.log(params);
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
        //generacion del número de validacion
        for (let i = 0; i < 6; i++) {
            if (i == 0) {
                var aux = Math.floor(Math.random() * 10 + 1).toString();
                if (aux == "10") {
                    otp += "9";
                }
            }
            otp += Math.floor(Math.random() * 10).toString();
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
            from: "Banquito - Confirmar Transferencias <sfqaeab@gmail.com>",
            to: correo,
            subject: "Transferencia Interna",
            text: mensaje1 + otp + mensaje2
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
                this.validarCorreo();
            } else {
                res.status("200");
            }

            return res.send(otp);
        })
    },
    
}
module.exports = controller;