'use strict'
var express=require('express');
var router=express.Router();
var usuariosController=require('../controllers/usuario.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//validar respuesta
router.post('/verificarPregunta',usuariosController.verificarPregunta);

module.exports=router;