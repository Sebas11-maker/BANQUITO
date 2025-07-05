'use strict'
var express=require('express');
var router=express.Router();
/*
var clientesController=require('../controllers/cliente.controller');
*/
var correoController= require('../controllers/correo.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//login exitoso
router.post('/login-exitoso',correoController.loginExitoso);

module.exports=router;