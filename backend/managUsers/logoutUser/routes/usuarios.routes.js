'use strict'
var express=require('express');
var router=express.Router();
var usuariosController=require('../controllers/usuario.controller');
var multiparty=require('connect-multiparty');
var mutipartyMiddleWare=multiparty({uploadDir:'./uploads'});


//logout usuario
router.get('/logoutn-usuario',usuariosController.logout);

req.session.destroy(); 
res.redirect('/login');

module.exports=router;