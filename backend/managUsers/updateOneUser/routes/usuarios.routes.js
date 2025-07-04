'use strict'
var express=require('express');
var router=express.Router();
var usuariosController=require('../controllers/usuario.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//actualizar un usuario
router.post('/actualizarUsuario',usuariosController.actualizarUsuario);

module.exports=router;