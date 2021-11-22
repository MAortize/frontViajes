import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/shared/models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/'
  private apikey='AIzaSyA_oMYKkNAxjftUQMbRgffgs2NP7X8tLhA'

  private userToken = 'user';
  
  //Crear un nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  //Entrar con usuario
  ///https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.leerToken();
  }


  logout(){
    localStorage.removeItem('token');
  }

  login(usuario:UsuarioModel){
    const authData={
      email:usuario.email,
      password:usuario.password,
      returnSecureToken:true
    };

    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map((resp:any)=>{
        console.log("entro en el map del rxjs");
        
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

    
  }

  registrarNuevoUsuario(usuario:UsuarioModel){ 

    const authData={
      email:usuario.email,
      password:usuario.password,
      returnSecureToken:true
    };

    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map((resp:any)=>{
        console.log("entro en el map del rxjs");
        
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  private guardarToken(idToken:string){

    this.userToken=idToken;
    localStorage.setItem('token',idToken)

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());


  }

  leerToken(){
    if (localStorage.getItem('token')) {
      this.userToken!=localStorage.getItem('token')?.toString();
    }else{
      this.userToken='';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean{

    if (this.userToken.length<2) {
      return false
    }
      
    const expira = Number(localStorage.getItem('expira'));
    const hoy = new Date();

    hoy.setTime(expira);

    if (hoy>new Date()) {
      return true;
    }else{
      return false
    }
    
  }
}
