'use strict'
var express=require('express');
var router=express.Router();
var cuentasController=require('../controllers/cuentas.controller');
var multiparty=require('connect-multiparty');
const cuenta = require('../models/cuenta');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});

//ver todas las cuentas
router.get('/cuentas',cuentasController.getCuentas);

module.exports=router;