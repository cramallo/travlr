import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {
  

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this._usuarioService.getUser().subscribe(
      rta=>{
        console.log("Datos usuario:"+rta);
      },
      err=>{
        console.log("Error me");
      }
    );
  }

}
