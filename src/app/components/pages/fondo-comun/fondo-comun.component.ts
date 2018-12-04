import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { GrupoService } from "../../../services/grupo.service";


@Component({
  selector: 'app-fondo-comun',
  templateUrl: './fondo-comun.component.html',
  styleUrls: ['./fondo-comun.component.css']
})
export class FondoComunComponent implements OnInit {

  idGrupo:any;
  monto: any;

  constructor(
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router: Router,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {    
    this.idGrupo=this._grupoService.getIdActual();    
    this._grupoService.getMonto(this.idGrupo).subscribe(
      rta => {
        this.monto = rta;
        console.log(rta);
      },
      err => {
        console.log(err);
      }
    );
  }

  egresar(data: any) {

  }
  

}
