'use strict'
var Cliente = require('../models/cliente');
var fs = require('path');
const path = require('path');

var controller = {
    
    getClientes: function (req, res) {
        Cliente.find({}).sort().exec((err, clientes) => {
            if (err) return res.status(500).send({ message: 'Error al recuperar los datos' });
            if (!clientes) return res.status(404).send({ message: 'No hay clientes para mostrar' });
            return res.status(200).send({ clientes });
        })

    },
    
}

module.exports = controller;