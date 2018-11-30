import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _usuarioService:UsuarioService,public router:Router) { }

  ngOnInit() {
    init_plugins();
  }

  confirmar(form:NgForm){
    if(form.invalid){
      console.log("error");
      return;
    }
    let usuario=new Usuario(form.value.nombre,form.value.password,form.value.email,form.value.nick,false);
    this._usuarioService.register(usuario).subscribe(
      res=>{
        console.log("Registro exitoso");
        console.log(res);
        this.router.navigate(['/login']);
      },
      err=>{
        console.log("Error en el registro");
      }
    )
  }

}
