'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});



//enviar correo por cambio de correo en actualizacion del cliente
router.post('/actualizar-correo',correoController.actualizarCliente);

module.exports=router;