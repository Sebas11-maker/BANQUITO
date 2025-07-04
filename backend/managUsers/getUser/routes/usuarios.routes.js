'use strict'
var express=require('express');
var router=express.Router();
var usuariosController=require('../controllers/usuario.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});

//Creado por SB
//Obtener un usuario
router.post('/getUsuario',usuariosController.getUsuario);

module.exports=router;