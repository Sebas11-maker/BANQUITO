'use strict'
var express=require('express');
var router=express.Router();
var clientesController=require('../controllers/cliente.controller');
/*
var correoController= require('../controllers/correo.controller');
*/
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//obtener Cliente
router.post('/cliente',clientesController.getCliente);

module.exports=router;