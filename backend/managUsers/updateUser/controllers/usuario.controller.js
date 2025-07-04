'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    
    configurarCuenta: function (req, res) {
        //se recibe un onbjeto->{idCuenta,cuenta}
        var params= req.body;
        var idusuario = params.idusuario
        var usuario= params.usuario
        Usuario.findOneAndUpdate({ "_id": idusuario}, usuario, { new: true }, (err, usuario) => {
            if (err) return res.status(200).send({ message: 404 });
            if (!usuario) return res.status(200).send({ message: 404 });
            return res.status(200).send({ message: 200 });
        });
    },
   


}
module.exports = controller;