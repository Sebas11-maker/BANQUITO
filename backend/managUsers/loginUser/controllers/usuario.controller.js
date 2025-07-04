'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    
    login: function(req, res){

        var params = req.body;
        console.log(params)

        var session = req.session;
        console.log(session)

        Usuario.findOne(params, (err, usuario) => {
            if (err) return res.status(200).send({ message: 0 });
            if (!usuario) return res.status(200).send({ message: 1 });
            session.req.session;
            session.username= req.body.username;
            //session.password= req.body.password;
            session.cedula= usuario.cedula;


            return res.status(200).send({ message: usuario.isNew , cedula: usuario.cedula});
        })

    },

    


}
module.exports = controller;