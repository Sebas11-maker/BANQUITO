'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    

    verificarPregunta:function (req, res) {
        var params = req.body;
        var cedula = params.cedula;
        var pregunta = params.pregunta;

        
        Usuario.findOne({ "cedula": cedula }, (err, user) => {
            if (err) return res.status(200).send({message: "Error al encontar el usuario"});
            if (!user) return res.status(200).send({message: "Nose encontro el usuario"});
            if(user.pregunta == pregunta){
                return res.status(200).send({message: "true"});
            }else{
                return res.status(200).send({message: "La respuesta a la pregunta de seguridad no coincide"});
            }
        })
    }


}
module.exports = controller;