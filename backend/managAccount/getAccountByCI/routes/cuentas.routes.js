'use strict'
var express=require('express');
var router=express.Router();
var cuentasController=require('../controllers/cuentas.controller');
var multiparty=require('connect-multiparty');
const cuenta = require('../models/cuenta');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//Obtener una cuenta a partir de un numero de cedula.
router.post('/get-Cuenta-byCI',cuentasController.getCuentaByCI);

module.exports=router;