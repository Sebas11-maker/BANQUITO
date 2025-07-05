'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    //Caso 1
    nuevasCredencialesTemp: function (req, res) {
        //Parametros
        var nodemailer = require('nodemailer');
        var params = req.body;
        var correo = params.correo;
        var username = params.username;
        var pass = params.pass;
        var pregunta = params.pregunta;
        var mensaje1 = "Estimado cliente," + '\n\n' + "BanQuito le informa: a las " + getTime() + " se han solicitado el reseteo de sus credenciales para acceder a la Banca Web. \n\n Si no realizó esta acción, por favor póngase en contacto con nuestro equipo de soporte al cliente.\n\nPara que puedas acceder a tu cuenta en la nuestra Banca Web utiliza estas credenciales:";
        var credenciales = "\n\n\t Username: " + username + "\n\n\t Password: " + pass + "\n\n\t Pregunta: " + pregunta;
        var mensaje2 = '\n\n' + "Tenga en cuenta que estas credenciales son temporales y debe actualizarlas ingresando por primera ves a la Banca Web.\n\nNuestro equipo de expertos en servicios financieros estará disponible para ayudarte en todo momento. Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros. Nos complace ayudarte en todo lo que necesites.\n\n¡Gracias por confiar en nosotros!";
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
            from: "Banquito - Nuevas Credenciales <sfqaeab@gmail.com>",
            to: correo,
            subject: "Se ha generado sus nuevas credenciales",
            text: mensaje1 + credenciales + mensaje2
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
                this.nuevasCredencialesTemp();
            } else {
                res.status("200");
            }
        })
    },
    
}
module.exports = controller;