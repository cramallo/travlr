import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    localStorage.removeItem('token');
    console.log("supuestamente borre el token"+localStorage.getItem('token'));
    let url= "http://travlrsipii.herokuapp.com/api/v1/AccountApi/SignIn";    
    //let usuario2={Email:usuario.Email,Password:usuario.Password};
    console.log(JSON.stringify(usuario));
    //let objeto={Email:"charly@gmail.com",Password:"123456"}; 
    let usuarioLogin=new Login("charly@gmail.com","123456");   
    return this.http.post<any>(url,usuarioLogin,httpOptions);
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
