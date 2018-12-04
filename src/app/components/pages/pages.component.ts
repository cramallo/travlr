import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {
  
  usuario:Usuario=new Usuario("","","","",false);

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this._usuarioService.getUser().subscribe(
      rta=>{              
        this.usuario=new Usuario(rta.userName,"",rta.email,rta.nickName,false);               
      },
      err=>{
        console.log("Error me");
      }
    );
  }

}
