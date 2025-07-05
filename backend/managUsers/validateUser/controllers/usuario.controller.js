'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    
    verificarUsuario: function (req, res) {
        var params = req.body;
        console.log(params)

        Usuario.findOne(params, (err, usuario) => {
            if (err) return res.status(200).send({ message: 0 });
            if (!usuario) return res.status(200).send({ message: 1 });
            //return res.status(200).send({ message: usuario.isNew });
            return res.status(200).send({ message: usuario.isNew , cedula: usuario.cedula});
        })
    },
    


}
module.exports = controller;