import { Component, OnInit, Input } from '@angular/core';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { ComponentRef } from '@angular/core/src/render3';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  @Input()idGrupo:any;

  constructor() { }

  ngOnInit() {
  }

  onActivate(ComponentRef){
    ComponentRef.cargarDatos(5);
  }

}
