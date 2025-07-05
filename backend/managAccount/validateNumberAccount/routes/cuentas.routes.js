'use strict'
var express=require('express');
var router=express.Router();
var cuentasController=require('../controllers/cuentas.controller');
var multiparty=require('connect-multiparty');
const cuenta = require('../models/cuenta');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});

//ValidacionDeCuenta
router.post('/validarNumeroCuenta',cuentasController.validarNumeroCuenta);


module.exports=router;