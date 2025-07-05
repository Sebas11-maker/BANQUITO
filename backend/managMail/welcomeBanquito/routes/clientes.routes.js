'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//enviar por correo credenciales al cliente
router.post('/bienvenido',correoController.bienvenidoBanquito);

module.exports=router;