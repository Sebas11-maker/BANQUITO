'use strict'
var express=require('express');
var router=express.Router();
var transaccionesExternasController=require('../controllers/transaccionesExternas.controllers');
var multiparty=require('connect-multiparty');
const cuenta = require('../models/cuenta');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});



//verificar cuenta externa
router.post('/verificar-cuenta-externa',transaccionesExternasController.verificarCuentaExterna);



module.exports=router;