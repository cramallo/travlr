import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;

  constructor(public http:HttpClient) {
    this.cargarStorage();
   }

  cargarStorage(){
    if( localStorage.getItem('token')) {
      this.token=localStorage.getItem('token');
    }else{
      this.token='';
    }
  }

  login(usuario:Usuario):Observable<any>{

    let url= "http://travlrsipii.herokuapp.com/api/v1/AccountApi/SignIn";
    return this.http.post(url,usuario);
  }

  estaLogueado(){
    return (this.token.length > 5 ) ? true : false;
  }

}
