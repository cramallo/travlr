import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { GrupoService } from "../../../services/grupo.service";

@Component({
  selector: "app-detalle-grupo",
  templateUrl: "./detalle-grupo.component.html",
  styleUrls: ["./detalle-grupo.component.css"]
})
export class DetalleGrupoComponent implements OnInit {

  objeto: any;
  idGrupo: any;
  nombreGrupo: string;
  integrantes: any;

  constructor(
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("en detalle id" + id);
    this._grupoService.getDetalleGrupo(+id).subscribe(rta => {
      this.objeto = rta;
      this.idGrupo = this.objeto.grupoID;
      this.nombreGrupo = this.objeto.nombreGrupo;
      this.integrantes = this.objeto.usuarios;
      console.log(rta);
    }, err => { });

    //HARDCODEO
    this.cargarDetalle();
  }

  dejarGrupo() {
    this._grupoService.dejarGrupo(this.idGrupo).subscribe(
      rta => {
        this._router.navigate(['/grupos']);
      },
      err => {
        console.log("Se produjo un error al dejar el grupo");
      }
    );
  }

  //HARDCODEO
  cargarDetalle() {


  }
}
