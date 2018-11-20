import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService, public router:Router){}

  canActivate(){    
    if(this._usuarioService.estaLogueado()){
      console.log("Paso el guard");
      return true;
    }else{
      console.log("bloqueado por el guard");
      this.router.navigate(['/login']);
      return false;
    }    
  }
}
