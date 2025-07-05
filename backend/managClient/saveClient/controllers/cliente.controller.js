'use strict'
var Cliente = require('../models/cliente');
var fs = require('path');
const path = require('path');

var controller = {
    saveCliente: function (req, res) {
        var cliente = new Cliente();
        var params = req.body;

        cliente.nombres = params.nombres;
        cliente.apellidos = params.apellidos;
        cliente.cedula = params.cedula;
        cliente.codigo_dactilar = params.codigo_dactilar;
        cliente.fecha_nacimiento = params.fecha_nacimiento;
        cliente.correo_electronico = params.correo_electronico;
        cliente.direccion = params.direccion;
        cliente.ocupacion = params.ocupacion;
        cliente.numero_telefono = params.numero_telefono;
        cliente.state = params.state;

        console.log(cliente);
        cliente.save((err, clienteGuardado) => {
            if (err) return res.status(500).send({ message: 500 });
            if (!clienteGuardado) return res.status(404).send({ message: 404 });
            return res.status(200).send({ message: 200 });
        })

    },
    
}

module.exports = controller;