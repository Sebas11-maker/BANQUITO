'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var  loginUser = require('./managUsers/loginUser/routes/usuarios.routes');
var  generateCode = require('./managUsers/generateCode/routes/usuarios.routes');
var getUser = require('./managUsers/getUser/routes/usuarios.routes');
var saveUser = require('./managUsers/saveUser/routes/usuarios.routes');
/*
var logoutUser = require('./managUsers/logoutUser/routes/usuarios.routes');
*/
var updateOneUser = require('./managUsers/updateOneUser/routes/usuarios.routes');
var updateUser = require('./managUsers/updateUser/routes/usuarios.routes');
var validateAnswer = require('./managUsers/validateAnswer/routes/usuarios.routes');
var validateUser = require('./managUsers/validateUser/routes/usuarios.routes');
var validateUsername = require('./managUsers/validateUsername/routes/usuarios.routes');

var generateAccountNumber = require('./managAccount/generateAccountNumber/routes/cuentas.routes');
var getAccount = require('./managAccount/getAccount/routes/cuentas.routes');
var getAccountAll = require('./managAccount/getAccountAll/routes/cuentas.routes');
var getAccountByCI = require('./managAccount/getAccountByCI/routes/cuentas.routes');
var internalTransaction = require('./managAccount/internalTransaction/routes/cuentas.routes');
var saveAccount = require('./managAccount/saveAccount/routes/cuentas.routes');
var updateAccount = require('./managAccount/updateAccount/routes/cuentas.routes');
var validateNumberAccount = require('./managAccount/validateNumberAccount/routes/cuentas.routes');

var externalTransaction = require('./managExternalTransactions/externalTransaction/routes/transaccionesExternas.routes');
var verifyexternalTransaction = require('./managExternalTransactions/verifyexternalAccount/routes/transaccionesExternas.routes');

var getAccounts = require('./managClient/getAccounts/routes/clientes.routes');
var getClient = require('./managClient/getClient/routes/clientes.routes');
var saveCliente = require('./managClient/saveClient/routes/clientes.routes');
var update = require('./managClient/update/routes/clientes.routes');
var validateID = require('./managClient/validateID/routes/clientes.routes');

var confirmTransfer = require('./managMail/confirmTransfer/routes/clientes.routes');
var forward = require('./managMail/forward/routes/clientes.routes');
var loginFailed = require('./managMail/loginFailed/routes/clientesRoutes');
var loginSuccessful = require('./managMail/loginSuccessful/routes/clientes.routes');
var newTemporaryCredentials = require('./managMail/newTemporaryCredentials/routes/clientes.routes');
var successfulTransfer = require('./managMail/successfulTransfer/routes/clientes.routes');
var update = require('./managMail/update/routes/clientes.routes');
var updateClient = require('./managMail/updateClient/routes/clientes.routes');
var updateUser = require('./managMail/updateUser/routes/clientes.routes');
var validateMail = require('./managMail/validateMail/routes/clientes.routes');
var verifyMailLogin = require('./managMail/verifyMailLogin/routes/clientes.routes');
var welcomeBanquito = require('./managMail/welcomeBanquito/routes/clientes.routes');


/*
var managClient = require('./managClient/saveCliente/routes/clientesRoutes');
var managCedula = require('./managClient/validarCedula/routes/clientesRoutes');
var managActu = require('./managClient/actualizar/routes/clientesRoutes');
var managGet = require('./managClient/getClient/routes/clientesRoutes');
var managAccou = require('./managClient/getAccount/routes/clientesRoutes');

var confirTrans = require('./managMail/confirmTransfer/routes/clientesRoutes');
var forward = require('./managMail/forward/routes/clientesRoutes');
var loginFailed = require('./managMail/loginFailed/routes/clientesRoutes');
var loginSuccess = require('./managMail/loginSuccessful/routes/clientesRoutes');
var credentialsTemp = require('./managMail/newTemporaryCredentials/routes/clientesRoutes');
var successTrans = require('./managMail/successfulTransfer/routes/clientesRoutes');
var update = require('./managMail/update/routes/clientesRoutes');
var upClient = require('./managMail/updateClient/routes/clientesRoutes');
var upUser = require('./managMail/updateUser/routes/clientesRoutes');
var valiMail = require('./managMail/validateMail/routes/clientesRoutes');
var veriMailLog = require('./managMail/verifyMailLogin/routes/clientesRoutes');
var welBan = require('./managMail/welcomeBanquito/routes/clientesRoutes');

var generateAccoNum = require('./managAccount/generateAccountNumber/routes/cuentasRoutes');
var getAccount = require('./managAccount/getAccount/routes/cuentasRoutes');
var getAccountAll = require('./managAccount/getAccountAll/routes/cuentasRoutes');
var getAccountCI = require('./managAccount/getAccountByCI/routes/cuentasRoutes');
var internalTrans = require('./managAccount/internalTransaction/routes/cuentasRoutes');
var saveAccount = require('./managAccount/saveAccount/routes/cuentasRoutes');
var updateAccount = require('./managAccount/updateAccount/routes/cuentasRoutes');
var validateAccount = require('./managAccount/validateNumberAccount/routes/cuentasRoutes');

var externalTrans = require('./managExternalTrasactions/externalTransaction/routes/transaccionesExternasRoutes');
var verifyTrans = require('./managExternalTrasactions/verifyexternalTransaction/routes/transaccionesExternasRoutes');

var generateCod = require('./managUser/generateCode/routes/usuariosRoutes');
var getUser = require('./managUser/getUser/routes/usuariosRoutes');
var loginUser = require('./managUser/loginUser/routes/usuariosRoutes');
var logoutUser = require('./managUser/logoutUser/routes/usuariosRoutes');
var saveUser = require('./managUser/saveUser/routes/usuariosRoutes');
var updateOneUser = require('./managUser/updateOneUser/routes/usuariosRoutes');
var updateUser = require('./managUser/updateUser/routes/usuariosRoutes');
var validateAnswer = require('./managUser/validateAnswer/routes/usuariosRoutes');
var validateUser = require('./managUser/validateUser/routes/usuariosRoutes');
var validateUsername = require('./managUser/validateUsername/routes/usuariosRoutes');


//para clientes
var clientesRoutes=require('./routes/clientes.routes');

//para el usuario
var usuariosRoutes=require('./routes/usuarios.routes');

//para las cuentas
var cuentasRoutes=require('./routes/cuentas.routes');

//para respuesta
//var respuestasRoutes=require('./routes/respuestas.routes');

//para correos
var enviarCorreo=require('./routes/correo.routes');

//para transacciones externas
var transaccionesExternasRoutes=require('./routes/transaccionesExternas.routes');

*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

//rutas
/*app.get('/',(req,res)=>{
    res.status(404).send(
        "<h1>Hola, bienvenido</h1>"
    )
})*/


//agregado para las seciones
var sessions=require('express-session');
const cookieParser = require('cookie-parser');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "miclave1234564asdasdvfgcdfgvszdfsdfdsf",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
 
app.use(cookieParser());


app.use('/',loginUser);
app.use('/',generateCode);
app.use('/',getUser);
app.use('/',saveUser);
/*
app.use('/',logoutUser);
*/
app.use('/',updateOneUser);
app.use('/',updateUser);
app.use('/',validateAnswer);
app.use('/',validateUser);
app.use('/',validateUsername);

app.use('/',generateAccountNumber);
app.use('/',getAccount);
app.use('/',getAccountAll);
app.use('/',getAccountByCI);
app.use('/',internalTransaction);
app.use('/',saveAccount);
app.use('/',updateAccount);
app.use('/',validateNumberAccount);

app.use('/',externalTransaction);
app.use('/',verifyexternalTransaction);

app.use('/',getAccounts);
app.use('/',getClient);
app.use('/',saveCliente);
app.use('/',update);
app.use('/',validateID);

app.use('/',confirmTransfer);
app.use('/',forward);
app.use('/',loginFailed);
app.use('/',loginSuccessful);
app.use('/',newTemporaryCredentials);
app.use('/',successfulTransfer);
app.use('/',update);
app.use('/',updateClient);
app.use('/',updateUser);
app.use('/',validateMail);
app.use('/',verifyMailLogin);
app.use('/',welcomeBanquito);

/*
app.use('/',update);
app.use('/',getClient);
app.use('/',managClient);
app.use('/',validateID);
app.use('/',getAccounts);

app.use('/',confirmTransfer);
app.use('/',forward);
app.use('/',loginFailed);
app.use('/',loginSuccess);
app.use('/',newTemporaryCredentials);
app.use('/',successfulTransfer);
app.use('/',update);
app.use('/',updateClient);
app.use('/',updateUser);
app.use('/',validateMail);
app.use('/',verifyMailLogin);
app.use('/',welcomeBanquito);

app.use('/',generateAccountNumber);
app.use('/',getAccount);
app.use('/',getAccountAll);
app.use('/',getAccountByCI);
app.use('/',internalTransaction);
app.use('/',saveAccount);
app.use('/',updateAccount);
app.use('/',validateNumberAccount);

app.use('/',externalTrans);
app.use('/',verifyexternalTransaction);

app.use('/',generateCod);
app.use('/',getUser);
app.use('/',loginUser);
app.use('/',logoutUser);
app.use('/',saveUser);
app.use('/',updateOneUser);
app.use('/',updateUser);
app.use('/',validateAnswer);
app.use('/',validateUser);
app.use('/',validateUsername);


app.use('/',usuariosRoutes);
app.use('/',clientesRoutes);
app.use('/',enviarCorreo);
app.use('/',cuentasRoutes);
app.use('/',transaccionesExternasRoutes);
*/
module.exports=app;
