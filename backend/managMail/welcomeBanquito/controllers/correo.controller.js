'use strict'

var fs = require('path');
const path = require('path');

var controller = {
    
    bienvenidoBanquito: function (req, res) {
        //parametros 
        var nodemailer = require('nodemailer');
        var params = req.body;
        var username = params.username;
        var pass = params.pass;
        var correo = params.correo;
        var mensaje1 = "¡Bienvenido/a a BanQuito!" + '\n\n' + "Estamos muy contentos de que hayas decidido abrir una cuenta con nosotros. Sabemos que la elección de una institución financiera es una decisión importante y estamos comprometidos en ofrecerte el mejor servicio posible.\n\nNos aseguraremos de que el proceso de apertura de cuenta sea sencillo y rápido, y que te sientas seguro/a y cómodo/a en todo momento. Queremos que te sientas en confianza al confiar en nosotros con tus finanzas.\n\nPara que puedas acceder a tu cuenta en la nuestra Banca Web utiliza estas credenciales:";
        var credenciales = "\n\n\t Username: " + username + "\n\n\t Password: " + pass;
        var mensaje2 = '\n\n' + "Tenga en cuenta que estas credenciales son temporales y debe actualizarlas ingresando por primera ves a la Banca Web.\n\nNuestro equipo de expertos en servicios financieros estará disponible para ayudarte en todo momento. Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros. Nos complace ayudarte en todo lo que necesites.\n\n¡Gracias por confiar en nosotros!";

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
            from: "Banquito - Registro Exitoso <sfqaeab@gmail.com>",
            to: correo,
            subject: "Bienvenido a tu nueva Banca Web",
            text: mensaje1 + '\n' + credenciales + '\n' + mensaje2
        }
        //enviar correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
                this.bienvenidoBanquito();
            } else {
                res.status("200");
            }
        })
    },
    
}
module.exports = controller;