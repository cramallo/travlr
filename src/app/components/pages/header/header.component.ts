import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('usuario')usuario:any;

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }

  ngOnChanges(){
    this.cargargarDatos();
  }

  logout(){
    this._usuarioService.logout();
  }

  cargargarDatos(){
    
  }

}
