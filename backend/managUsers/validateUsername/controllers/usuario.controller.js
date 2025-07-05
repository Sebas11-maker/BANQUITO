'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    

    validarUsername:function (req, res) {
        var params = req.body;
        var user = params.username;
        console.log(user);
        Usuario.findOne({ "username": user }, (err, user) => {
            if (err) return res.status(200).send({message: true});
            if (!user) return res.status(200).send({message: false});
            return res.status(200).send({message: true});
        })
    },

    


}
module.exports = controller;