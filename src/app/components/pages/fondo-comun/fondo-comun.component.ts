import { Component, OnInit } from '@angular/core';
import { GrupoService } from "../../../services/grupo.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-fondo-comun',
  templateUrl: './fondo-comun.component.html',
  styleUrls: ['./fondo-comun.component.css']
})
export class FondoComunComponent implements OnInit {

  constructor(
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router: Router) { }
  monto: any;

  ngOnInit() {
    console.log("entroo");
    let id = this.route.snapshot.paramMap.get("id");
    this._grupoService.getMonto(id).subscribe(
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
