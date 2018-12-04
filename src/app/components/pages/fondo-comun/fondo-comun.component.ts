import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { GrupoService } from "../../../services/grupo.service";
import { CalendarComponent } from "ng-fullcalendar";
import { Options } from "fullcalendar";
import { EventService } from "../../../services/event.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { map } from "rxjs/operators";

//MODELS
import { Monto } from '../../../models/monto';



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

    start() {
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
  

  ngOnInit() {
    this.start()
  }

  egresar(data: any) {
    this.idGrupo=this._grupoService.getIdActual();
    let monto = new Monto(this.idGrupo, data.monto*-1);
    this._grupoService.setMonto(monto).subscribe(
      rta => {
        this.monto = rta;
        console.log(rta);
        document.getElementById("cancelar").click();
        this.start();

      },
      err => {
        console.log(err);
        document.getElementById("cancelar").click();

      }
    );
  }

  ingresar(data: any) {
    this.idGrupo=this._grupoService.getIdActual();
    let monto = new Monto(this.idGrupo, data.monto);
    this._grupoService.setMonto(monto).subscribe(
      rta => {
        this.monto = rta;
        console.log(rta);
        document.getElementById("cancelar2").click();
        this.start();

      },
      err => {
        console.log(err);
        document.getElementById("cancelar2").click();

      }
    );
  }
  

}
