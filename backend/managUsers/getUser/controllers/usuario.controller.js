'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    
    getUsuario: function (req, res) {
        var params = req.body;
        var cedula = params.cedula;
        console.log(params);
        Usuario.findOne({ "cedula": cedula }, (err, usuario) => {
            if (err) return res.status(200).send({message:500});
            if (!usuario) return res.status(200).send({message:404});
            return res.status(200).send(usuario);
        })
    },

    


}
module.exports = controller;