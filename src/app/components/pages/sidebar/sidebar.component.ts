import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    //init_plugins();
  }

  logout(){
    this._usuarioService.logout();
  }

}
