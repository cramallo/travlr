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
}
