'use strict'
var Cliente = require('../models/cliente');
var fs = require('path');
const path = require('path');

var controller = {
    
    actualizarCliente: function (req, res) {
        //se recibe un onbjeto->{idCliente,cliente}
        var params= req.body;
        var idCliente = params.idCliente
        var cliente = params.cliente
        Cliente.findOneAndUpdate({ "_id": idCliente}, cliente, { new: true }, (err, cliente) => {
            if (err) return res.status(500).send({ message: 404 });
            if (!cliente) return res.status(404).send({ message: 404 });
            return res.status(200).send({ message: 200 });
        });
    }
}

module.exports = controller;