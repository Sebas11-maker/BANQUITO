'use strict'
var express=require('express');
var router=express.Router();
var cuentasController=require('../controllers/cuentas.controller');
var multiparty=require('connect-multiparty');
const cuenta = require('../models/cuenta');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});

//actualizar Cuenta
router.post('/actualizar-cuenta',cuentasController.actualizarCuenta);


module.exports=router;