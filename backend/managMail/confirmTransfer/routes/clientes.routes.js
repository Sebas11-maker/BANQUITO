'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//confirmar codigo previo a realizar una transferencia
router.post('/confirmar-transferencia',correoController.confirmarTransferencia);

module.exports=router;