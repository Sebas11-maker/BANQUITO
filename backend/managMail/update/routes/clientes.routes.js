'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//enviar correo notificando que se actualizo la informacion del cliente
router.post('/actualizar',correoController.actualizar);


module.exports = router; 
