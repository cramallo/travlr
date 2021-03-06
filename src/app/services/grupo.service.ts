import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grupo } from '../models/grupo';
import { Observable } from 'rxjs/internal/Observable';
import { Actividad } from '../models/actividad';
import { Monto } from '../models/monto';

import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  idGrupoActual:any;

  constructor(private http:HttpClient) { }

  getGrupos(){   
    return this.http.get<any>("https://travlrsipii.herokuapp.com/api/v1/GruposApi/Grupos",httpOptions);
  }

  getDetalleGrupo(id:number){
    return this.http.get<any[]>("https://travlrsipii.herokuapp.com/api/v1/GruposApi/detalles?id="+id,httpOptions);
  }

  crear(nombreGrupo:string){
    let objeto={nombre:nombreGrupo};
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/GruposApi/Create",objeto.nombre,httpOptions);
  }

  unirse(GrupoID:number){
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/GruposApi/Unirse",GrupoID,httpOptions);
  }

  dejarGrupo(id:number){    
    return this.http.get("https://travlrsipii.herokuapp.com/api/v1/GruposApi/DejarGrupo?id="+id,httpOptions);
  }

  getActividades(id:number){
    return this.http.get<any[]>("https://travlrsipii.herokuapp.com/api/v1/ActividadesApi/ListaActividades?id="+id,httpOptions);
  }

  crearActividad(actividad:Actividad){
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/ActividadesApi/CrearActividad",actividad,httpOptions);
  }

  getMonto(id:number){
    return this.http.get("https://travlrsipii.herokuapp.com/api/v1/ManejoFondosApi/ManejoFondos?id="+id,httpOptions);
  }

  setMonto(monto:Monto){
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/ManejoFondosApi/ManejoFondos",monto,httpOptions);
  }

  setIdActual(id:any){
    this.idGrupoActual=id;
  }
  getIdActual(){
    return  this.idGrupoActual;
  }
}
