import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grupo } from '../models/grupo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http:HttpClient) { }

  getGrupos(){
    return this.http.get("http://travlrsipii.herokuapp.com/api/v1/GruposApi");
  }

  getDetalleGrupo(id:number){
    return this.http.get<any[]>("http://travlrsipii.herokuapp.com/api/v1/GruposApi/detalles?id="+id);
  }

  crear(nombreGrupo:string){
    let objeto={nombre:nombreGrupo};
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/GruposApi/Create",objeto);
  }

  unirse(idGrupo:number){
    let objeto={grupoID:idGrupo};
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/GruposApi/Unirse",objeto);
  }

  dejarGrupo(id:number){
    let objeto={grupoID:id};
    return this.http.post("https://travlrsipii.herokuapp.com/api/v1/GruposApi/DejarGrupo",objeto);
  }
}
