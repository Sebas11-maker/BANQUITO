'use strict'
var Cliente = require('../models/cliente');
var fs = require('path');
const path = require('path');

var controller = {
    
    validarCedula: function (req, res) {
        var params = req.body;
        console.log(params);
        var cedula = params.cedula;
        console.log(cedula);
        Cliente.findOne({ "cedula": cedula }, (err, guardarcliente) => {
            if (err) return res.status(200).send(true);
            if (!guardarcliente) return res.status(200).send(false);
            return res.status(200).send(true);
        })
    }
}

module.exports = controller;