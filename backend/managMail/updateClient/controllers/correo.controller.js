'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    actualizarCliente: function (req, res) {
        //parametros 
        var nodemailer = require('nodemailer');
        var params = req.body;
        var correo = params.correo;
        var mensaje1 = "Hola," + '\n\n' + "Has solicitado la actualización de tu correo electrónico. Para hacerlo, simplemente proporcione el siguiente código al ascesor." + '\n\n';
        var mensaje2 = '\n\n' + "Tenga en cuenta que si no verifica su dirección de correo electrónico, su cuenta no estará completamente actualizada y no podrá acceder a todos los servicios en línea que ofrecemos." + '\n\n' + "Si tiene alguna pregunta o necesita ayuda, no dude en ponerse en contacto con nuestro equipo de soporte al cliente. Estamos disponibles las 24 horas del día para ayudarlo en todo lo que necesite." + '\n\n' + "Gracias por elegir BanQuito. Esperamos poder servirle en el futuro." + '\n\n';
        var otp = "";
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
            from: "Banquito - Cambio de correo <sfqaeab@gmail.com>",
            to: correo,
            subject: "Validar correo electrónico",
            text: mensaje1 + '\n' + otp + '\n' + mensaje2
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
                this.actualizarCliente();
            } else {
                res.status("200");
            }

            return res.send(otp);
        })
    },
   
}
module.exports = controller;