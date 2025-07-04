'use strict'
var Usuario = require('../models/usuario');

var fs = require('path');
const path = require('path');

var controller = {
    
    actualizarUsuario: function (req, res){
        console.log("Consola 2")
        var update=req.body;
        var cedula= update.cedula;
        update.isNew = false;
        console.log(update)

        Usuario.findOneAndUpdate({"cedula":cedula},update,{new:true},(err,usuario)=>{
            if (err) return res.status(500).send({message:'Error al actualizar los datos'});
            if(!usuario) return res.status(404).send({message:'El libro no existe para actulizar'});
            return res.status(200).send({usuario});
        })

    },


    


}
module.exports = controller;