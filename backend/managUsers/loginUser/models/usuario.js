'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UsuarioSchema=Schema({

    cedula:Number,
    username:String,
    password:String,
    pregunta:String,
    isNew:Boolean,
    otp: String
    
});
// Usamos mongoose.models para evitar redefinir el modelo si ya ha sido creado
module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);