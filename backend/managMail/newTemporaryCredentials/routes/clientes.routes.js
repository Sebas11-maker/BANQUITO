'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//enviar correo por nuevas credenciales temporales del cliente
router.post('/nuevas-temp',correoController.nuevasCredencialesTemp);

module.exports=router;