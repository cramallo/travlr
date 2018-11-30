import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }

  logout(){
    this._usuarioService.logout();
  }

}
