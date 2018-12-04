import { Component, OnInit } from "@angular/core";
import { GrupoService } from '../../../services/grupo.service';
import { Grupo } from "../../../models/grupo";
import { Router } from '@angular/router';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

declare function init_plugins();
declare var swal:any;

@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styleUrls: ["./grupos.component.css"]
})
export class GruposComponent implements OnInit {
  grupos: any = [];
  gruposDetalle: any = [];

  constructor(private _grupoService: GrupoService,private _router:Router) {}

  ngOnInit() {
    //init_plugins();
    this.getGrupos();
  }

  getGrupos() {
    this._grupoService.getGrupos().subscribe(res=>{
      console.log(res);
    })
    // this._grupoService.getGrupos().subscribe(
    //   rta => {
    //     console.log(rta);
    //     this.grupos = rta;
    //   },
    //   err => {        
        /*Hardcodeo*/
    //     this.grupos = [
    //       {
    //         grupoID: 2,
    //         nombre: "LauchaTeam",
    //         fondoComun: null,
    //         actividades: null,
    //         encuestas: null,
    //         fechasDisponibilidad: null,
    //         usuarioGrupos: null,
    //         administrador: null,
    //         monto: 0,
    //         encuesta: null,
    //         opciones: null,
    //         opcionSelect: 0,
    //         actividad: null,
    //         fechaDisponibilidad: null
    //       },
    //       {
    //         grupoID: 5,
    //         nombre: "playa 2018",
    //         fondoComun: null,
    //         actividades: null,
    //         encuestas: null,
    //         fechasDisponibilidad: null,
    //         usuarioGrupos: null,
    //         administrador: null,
    //         monto: 0,
    //         encuesta: null,
    //         opciones: null,
    //         opcionSelect: 0,
    //         actividad: null,
    //         fechaDisponibilidad: null
    //       }
    //     ];
    //     this.cargarDetallesGrupo();
    //   }
    // );
  }

  detalle(id:number) {
    this._router.navigate(['/grupos/detalle/'+id]);
  }

  cargarDetallesGrupo() {
    //for (let grupo in this.grupos) {
    //this._grupoService.getDetalleGrupo(grupo.grupoID);
    //}

    /*HARDCODEO*/
    this.gruposDetalle = [
      {
        grupoID: 1,
        nombreGrupo: "LauchaTeam",
        isAdmin: false,
        usuarios: [
          {
            id: "feb0893e-2f5f-4eef-9598-bfed2e5fa8bd",
            nombre: null,
            password: null,
            email: "laucha@gmail.com",
            nickName: "Aureus",
            gruposAdmin: null,
            usuarioGrupos: null,
            userName: "Laucha",
            normalizedUserName: "LAUCHA",
            normalizedEmail: "LAUCHA@GMAIL.COM",
            emailConfirmed: false,
            passwordHash:
              "AQAAAAEAACcQAAAAEBoPDPlvIyIyRVyd3DTIy26/F/0RHSHGfG6beKX1omd52G+nWnWDNxmnck6RBS1zuA==",
            securityStamp: "WA3ZYKFXTMLRMA322RTAMAA53HF4M5DG",
            concurrencyStamp: "6847747d-fb49-4185-b222-c3f9bad2fd96",
            phoneNumber: null,
            phoneNumberConfirmed: false,
            twoFactorEnabled: false,
            lockoutEnd: null,
            lockoutEnabled: true,
            accessFailedCount: 0
          },
          {
            id: "6cbf89c7-845d-42e5-ab05-3a8cac787b08",
            nombre: null,
            password: null,
            email: "marcosrios@gmail.com",
            nickName: "Marcos",
            gruposAdmin: null,
            usuarioGrupos: null,
            userName: "Marcos",
            normalizedUserName: "MARCOS",
            normalizedEmail: "MARCOSRIOS@GMAIL.COM",
            emailConfirmed: false,
            passwordHash:
              "AQAAAAEAACcQAAAAEC7pp4BGkPHxvRg/JO9i73QlrCcLTsAwaz9BRVAwhNLPXbr5RFk6QTiyeUykaAfEnQ==",
            securityStamp: "ZRL5MBR662O456OB6QMT5NQVNFCJJ3JO",
            concurrencyStamp: "a4dbced1-8e66-4272-9bf1-8b4c8243fbbd",
            phoneNumber: null,
            phoneNumberConfirmed: false,
            twoFactorEnabled: false,
            lockoutEnd: null,
            lockoutEnabled: true,
            accessFailedCount: 0
          }
        ]
      },

      {
        grupoID: 0,
        nombreGrupo: "playa 2018",
        isAdmin: false,
        usuarios: [
          {
            id: "feb0893e-2f5f-4eef-9598-bfed2e5fa8bd",
            nombre: null,
            password: null,
            email: "laucha@gmail.com",
            nickName: "Aureus",
            gruposAdmin: null,
            usuarioGrupos: null,
            userName: "Laucha",
            normalizedUserName: "LAUCHA",
            normalizedEmail: "LAUCHA@GMAIL.COM",
            emailConfirmed: false,
            passwordHash:
              "AQAAAAEAACcQAAAAEBoPDPlvIyIyRVyd3DTIy26/F/0RHSHGfG6beKX1omd52G+nWnWDNxmnck6RBS1zuA==",
            securityStamp: "WA3ZYKFXTMLRMA322RTAMAA53HF4M5DG",
            concurrencyStamp: "6847747d-fb49-4185-b222-c3f9bad2fd96",
            phoneNumber: null,
            phoneNumberConfirmed: false,
            twoFactorEnabled: false,
            lockoutEnd: null,
            lockoutEnabled: true,
            accessFailedCount: 0
          }
        ]
      }
    ];
  }

  unirse(data:any){
    console.log(data);
    this._grupoService.unirse(data).subscribe(
      rta=>{
        console.log(rta);
        //this.getGrupos();
      },
      err=>{
        console.log("error al unirse a un grupo");
      }
    );
  }

  nuevo(data:any){
    console.log(data);
    this._grupoService.crear(data).subscribe(
      rta=>{
        console.log(rta);
        //this.getGrupos();
      },
      err=>{
        console.log("error al crear grupo");
      }
    )
  }
}
