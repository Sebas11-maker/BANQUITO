'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    actualizar: function (req, res) {
        //Parametros
        var nodemailer = require('nodemailer');
        var params = req.body;
        var correo = params.correo;
        var mensaje1 = "Estimado cliente," + '\n\n' + "BanQuito le informa: a las " + getTime() + " se han actualizado sus datos. \n\n Si no realizó esta acción, por favor póngase en contacto con nuestro equipo de soporte al cliente";
        //Funcion para mostrar la fecha y hora actual para el correo
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
        getTime();
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
            from: "Banquito - Actualización Exitoso <sfqaeab@gmail.com>",
            to: correo,
            subject: "Tus credenciales están al día",
            text: mensaje1
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (!error) {
                res.status(500).send(error.message);
                this.actualizar();
            } else {
                res.status("200");
            }
        })
    },
    
}
module.exports = controller;