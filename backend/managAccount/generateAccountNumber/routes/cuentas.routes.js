'use strict'
var express=require('express');
var router=express.Router();
var cuentasController=require('../controllers/cuentas.controller');
var multiparty=require('connect-multiparty');
const cuenta = require('../models/cuenta');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});

//generar numero de cuenta (12digitos)aleatorio
router.post('/generarNumero',cuentasController.generarNumeroCuenta);


module.exports=router;