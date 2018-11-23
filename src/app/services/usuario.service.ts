import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;

  constructor(public http:HttpClient,public router:Router) {
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

  logout(){
    this.token='';
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  estaLogueado(){
    return (this.token.length > 5 ) ? true : false;
  }

  register(usuario:Usuario):Observable<any>{
    let url= "http://travlrsipii.herokuapp.com/api/v1/AccountApi/Register";
    return this.http.post(url,usuario);
  }

}
