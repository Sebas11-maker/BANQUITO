import { HttpClient } from "@angular/common/http";
import { core } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Obj } from "@popperjs/core";
import { Observable } from "rxjs";
import { Cliente } from "src/app/models/clientes";

@Injectable({

    providedIn: 'root'


})
export class ClienteService {
    url = "http://localhost:3600/guardar-cliente/";
    urlVerificar = "http://localhost:3600/validarCedula/";
    urlObtenerCliente = "http://localhost:3600/cliente/";
    urlActualizarCliente = "http://localhost:3600/actualizar-cliente/";
    urlCorreo = "http://localhost:3600/validar-email/";
    urlCorreoLogin = "http://localhost:3600/verificar-email";
    urlRegistroExitoso = "http://localhost:3600/bienvenido";
    urlReenviar = "http://localhost:3600/reenviar";
    urlNuevasTempo = "http://localhost:3600/nuevas-temp";
    urlActualizarUsuario = "http://localhost:3600/actualizar-usuario";
    urlActualizarCorreoCliente = "http://localhost:3600/actualizar-correo";
    urlActualizar="http://localhost:3600/actualizar";
    urlConfirmarCorreo ="http://localhost:3600/confirmar-transferencia";
    urlResumen = "http://localhost:3600/resumen";
    urlLoginExitoso = "http://localhost:3600/login-exitoso";
    urlLoginFallido = "http://localhost:3600/login-fallido";

    constructor(
        private http: HttpClient
    ) { }
    guardarCliente(cliente: Cliente): Observable<any> {
        return this.http.post(this.url, cliente);
    }
    validarCliente(cliente: Cliente): Observable<any> {
        return this.http.post(this.urlVerificar, cliente);
    }
    obtenerCliente(cedula:object):Observable<any>{
        return this.http.post(this.urlObtenerCliente, cedula);
    }
    actualizarCliente(cliente: object): Observable<any> {
        return this.http.post(this.urlActualizarCliente, cliente);
    }
    validarCorreo(correo:Object){
        return this.http.post(this.urlCorreo, correo);
    }
    validarCorreoLogin(correo:Object){
        return this.http.post(this.urlCorreoLogin, correo);
    }
    enviarCredenciales(credenciales:Object){
        return this.http.post(this.urlRegistroExitoso, credenciales);
    }
    reenviarCredenciales(credenciales:Object){
        return this.http.post(this.urlReenviar, credenciales);
    }
    nuevasCredencialesTempo(credenciales:Object){
        return this.http.post(this.urlNuevasTempo, credenciales);
    }
    actualizarUsuario(credenciales:Object){
        return this.http.post(this.urlActualizarUsuario, credenciales);
    }
    actualizarCorreoCliente(correo:Object){
        return this.http.post(this.urlActualizarCorreoCliente, correo);
    }
    actualizar(correo:Object){
        return this.http.post(this.urlActualizar, correo);
    }
    confirmarTransferencia(correo:Object){
        return this.http.post(this.urlConfirmarCorreo, correo);
    }
    resumen(correo:Object){
        return this.http.post(this.urlResumen, correo);
    }
    loginExitoso(correo:Object){
        return this.http.post(this.urlLoginExitoso, correo);
    }
    loginFallido(correo:Object){
        return this.http.post(this.urlLoginFallido, correo);
    }
}