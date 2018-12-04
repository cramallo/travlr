import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {
  
  usuario:any;

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this._usuarioService.getUser().subscribe(
      rta=>{
        this.usuario=rta;
        console.log(JSON.stringify(rta));
      },
      err=>{
        console.log("Error me");
      }
    );
  }

}
