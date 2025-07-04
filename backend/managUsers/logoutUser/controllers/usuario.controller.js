'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    


    logout: function(req, res){
        
            return res.status(200).send({ message: "Si valio"});


/*
        req.session.destroy();
        res.redirect('/login');
*/
    },
    


}
module.exports = controller;