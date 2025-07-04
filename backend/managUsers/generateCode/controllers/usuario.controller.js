'use strict'
var Usuario = require('../models/usuario');


var fs = require('path');
const path = require('path');

var controller = {
    


    generarCodigoOTP: function (req, res){

        var params = req.body;
        var digitos = params.digitos;
        var otp = "";

        for (let i = 0; i < digitos; i++) {

            otp += Math.floor(Math.random() * 10).toString();

        }

        return res.status(500).send({ otp });

    },

    


}
module.exports = controller;