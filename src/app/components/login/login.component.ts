import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;

  constructor(public _usuarioService:UsuarioService,public router:Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar(form:NgForm){
    if(form.invalid){
      console.log("error");
      return;
    }
    let usuario=new Usuario("",form.value.password,form.value.email,"",this.recuerdame);   
    this._usuarioService.login(usuario).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        console.log(localStorage.getItem('token'));
        this._usuarioService.cargarStorage();
        this.router.navigate(['/grupos']);
      },
      err=>{
        
      }
    );
  }

}
