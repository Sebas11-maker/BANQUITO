'use strict'
var Cliente = require('../models/cliente');
var fs = require('path');
const path = require('path');

var controller = {
    
    getCliente: function (req, res) {
        var params = req.body;
        console.log("Parametros en la funcion getCliente:");
        //console.log(params);
        var cedula = params.cedula;
        Cliente.findOne({ "cedula": cedula }, (err, cliente) => {
            if (err) return res.status(200).send({message:500});
            if (!cliente) return res.status(200).send({message:404});
            return res.status(200).send(cliente);
        })
    },
   
}

module.exports = controller;