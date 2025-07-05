'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//resumen de la transferencia exitosa
router.post('/resumen',correoController.transferenciaExitosa);

module.exports=router;