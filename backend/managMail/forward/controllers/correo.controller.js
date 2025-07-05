'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    //caso 4
    reenviar: function (req, res) {
        //Parametros
        var nodemailer = require('nodemailer');
        var params = req.body;
        var username = params.username;
        var pass = params.pass;
        var correo = params.correo;
        var pregunta = params.pregunta;
        var credenciales = "\n\n\t Username: " + username + "\n\n\t Password: " + pass + "\n\n\t Pregunta: " + pregunta;
        var mensaje1 = "Estimado cliente," + '\n\n' + "BanQuito le informa: a las " + getTime() + " se ha solicitado el reenvio de sus creedenciales para acceder a la Banca Web.\n\nPara que puedas acceder a tu cuenta en la nuestra Banca Web utiliza estas credenciales:";
        var mensaje2 = '\n\n' + "Tenga en cuenta que estas credenciales son temporales y debe actualizarlas ingresando por primera ves a la Banca Web.\n\nNuestro equipo de expertos en servicios financieros estará disponible para ayudarte en todo momento. Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros. Nos complace ayudarte en todo lo que necesites.\n\n¡Gracias por confiar en nosotros!";
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
            from: "Banquito - Condifencial <sfqaeab@gmail.com>",
            to: correo,
            subject: "Reenvio de credenciales",
            text: mensaje1 + credenciales + mensaje2
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
                this.reenviar();
            } else {
                res.status("200");
            }
        })
    },
    
}
module.exports = controller;