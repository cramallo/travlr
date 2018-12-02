import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GrupoService } from '../../../services/grupo.service';

@Component({
  selector: 'app-detalle-grupo',
  templateUrl: './detalle-grupo.component.html',
  styleUrls: ['./detalle-grupo.component.css']
})
export class DetalleGrupoComponent implements OnInit {

  integrantes:any[];

  constructor(private _grupoService:GrupoService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    console.log("en detalle id"+id);
    this._grupoService.getDetalleGrupo(+id).subscribe(
      rta=>{
          
    },
    err=>{

    }
    )

  }

}
