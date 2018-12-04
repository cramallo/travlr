import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {  

  @Input('usuario') usuario:any;

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    //init_plugins();
  }

  ngOnChanges(){    
    this.cargarDatos();
  }

  logout(){
    this._usuarioService.logout();
  }

  cargarDatos(){

  }

}
