import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('usuario')usuario:Usuario=new Usuario("","","","",false);

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }

  ngOnChanges(){
    console.log("hola");
    console.log(this.usuario);
  }

  logout(){
    this._usuarioService.logout();
  }

  cargargarDatos(){
    
  }

}
