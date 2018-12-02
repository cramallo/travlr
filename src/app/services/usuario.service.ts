import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/*const httpGetOptions ={   
    withCredentials: true,
};*/

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;

  constructor(public http:HttpClient,public router:Router, private cookieService: CookieService) {
    this.cargarStorage();    
   }

  cargarStorage(){
    this.cookieService.set('.AspNetCore.Identity.Application',localStorage.token);
    if(localStorage.getItem('token')) {
      this.token=localStorage.getItem('token');      
    }else{
      this.token='';
    }
    console.log(this.cookieService.get('.AspNetCore.Identity.Application'));
  }

  login(usuario:Usuario):Observable<any>{
    localStorage.removeItem('token');
    this.cookieService.delete('.AspNetCore.Identity.Application');
    console.log("supuestamente borre el token"+localStorage.getItem('token'));
    //let url= "http://travlrsipii.herokuapp.com/api/v1/AccountApi/SignIn";    
    let url= "https://travlrsipii.herokuapp.com/api/v1/AccountApi/SignIn"   
    //console.log(JSON.stringify(usuario));    
    let usuarioLogin=new Login("charly","charly@gmail.com","123456",true);   
    return this.http.post<any>(url,usuarioLogin);
  }

  logout(){
    this.token='';
    localStorage.removeItem('token');
    this.cookieService.delete('.AspNetCore.Identity.Application');
    this.router.navigate(['/login']);
  }

  estaLogueado(){
    return (this.token.length > 5 ) ? true : false;
  }

  register(usuario:Usuario):Observable<any>{
    let url= "http://travlrsipii.herokuapp.com/api/v1/AccountApi/Register";
    return this.http.post(url,usuario);
  }

  getUser(){
    let url= "https://travlrsipii.herokuapp.com/api/v1/AccountApi/Me";
    return this.http.get<any>(url,httpOptions);
  }

}
