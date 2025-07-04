'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    
    saveUsuario: function (req, res) {
        var usuario = new Usuario();
        var params = req.body;

        usuario.cedula = params.cedula;
        usuario.username = params.username;

        usuario.password = params.password;
        usuario.pregunta = params.pregunta;
        usuario.isNew = params.isNew;
        usuario.otp = params.otp;

        usuario.save((err, usuarioGuardado) => {
            if (err) return res.status(200).send({ message: 500 });
            if (!usuarioGuardado) return res.status(200).send({ message: 404 });
            return res.status(200).send({ message: 200 });
        })

    },
    


}
module.exports = controller;