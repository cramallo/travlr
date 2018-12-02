import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { GrupoService } from "../../../services/grupo.service";

@Component({
  selector: "app-detalle-grupo",
  templateUrl: "./detalle-grupo.component.html",
  styleUrls: ["./detalle-grupo.component.css"]
})
export class DetalleGrupoComponent implements OnInit {
  
  integrantes: any[];
  idGrupo:any;
  nombreGrupo:string;

  constructor(
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router:Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("en detalle id" + id);
    this._grupoService.getDetalleGrupo(+id).subscribe(rta => {}, err => {});

    //HARDCODEO
    this.cargarDetalle();
  }

  dejarGrupo(){
    this._grupoService.dejarGrupo(this.idGrupo).subscribe(
      rta=>{
        this._router.navigate(['/grupos']);
      },
      err=>{
        console.log("Se produjo un error al dejar el grupo");
      }
    );
  }

  //HARDCODEO
  cargarDetalle() {
    let objeto = {
      grupoID: 0,
      nombreGrupo: "Bariloche 2020",
      isAdmin: false,
      usuarios: [
        {
          id: "7a017b6c-41f5-42ac-943a-4895f375c105",
          nombre: null,
          password: null,
          email: "charly@gmail.com",
          nickName: "charles",
          gruposAdmin: null,
          usuarioGrupos: null,
          userName: "charly",
          normalizedUserName: "CHARLY",
          normalizedEmail: "CHARLY@GMAIL.COM",
          emailConfirmed: false,
          passwordHash:
            "AQAAAAEAACcQAAAAEJSzCyHbeu9+VqVdO8uCFgKNccSPNJZ5i1cxr9MrBkwtMbI8+rzOF/9mRmwSf8HArQ==",
          securityStamp: "KBOAVAELRSCA6PHV2QA3Z3TQLQILWBWQ",
          concurrencyStamp: "3df210b1-041f-4638-89bf-7ddbc6762086",
          phoneNumber: null,
          phoneNumberConfirmed: false,
          twoFactorEnabled: false,
          lockoutEnd: null,
          lockoutEnabled: true,
          accessFailedCount: 0
        },
        {
          id: "7a017b6c-41f5-42ac-943a-4895f375c105",
          nombre: null,
          password: null,
          email: "charly@gmail.com",
          nickName: "charles",
          gruposAdmin: null,
          usuarioGrupos: null,
          userName: "charly",
          normalizedUserName: "CHARLY",
          normalizedEmail: "CHARLY@GMAIL.COM",
          emailConfirmed: false,
          passwordHash:
            "AQAAAAEAACcQAAAAEJSzCyHbeu9+VqVdO8uCFgKNccSPNJZ5i1cxr9MrBkwtMbI8+rzOF/9mRmwSf8HArQ==",
          securityStamp: "KBOAVAELRSCA6PHV2QA3Z3TQLQILWBWQ",
          concurrencyStamp: "3df210b1-041f-4638-89bf-7ddbc6762086",
          phoneNumber: null,
          phoneNumberConfirmed: false,
          twoFactorEnabled: false,
          lockoutEnd: null,
          lockoutEnabled: true,
          accessFailedCount: 0
        },
        {
          id: "7a017b6c-41f5-42ac-943a-4895f375c105",
          nombre: null,
          password: null,
          email: "charly@gmail.com",
          nickName: "charles",
          gruposAdmin: null,
          usuarioGrupos: null,
          userName: "charly",
          normalizedUserName: "CHARLY",
          normalizedEmail: "CHARLY@GMAIL.COM",
          emailConfirmed: false,
          passwordHash:
            "AQAAAAEAACcQAAAAEJSzCyHbeu9+VqVdO8uCFgKNccSPNJZ5i1cxr9MrBkwtMbI8+rzOF/9mRmwSf8HArQ==",
          securityStamp: "KBOAVAELRSCA6PHV2QA3Z3TQLQILWBWQ",
          concurrencyStamp: "3df210b1-041f-4638-89bf-7ddbc6762086",
          phoneNumber: null,
          phoneNumberConfirmed: false,
          twoFactorEnabled: false,
          lockoutEnd: null,
          lockoutEnabled: true,
          accessFailedCount: 0
        },
        {
          id: "7a017b6c-41f5-42ac-943a-4895f375c105",
          nombre: null,
          password: null,
          email: "charly@gmail.com",
          nickName: "charles",
          gruposAdmin: null,
          usuarioGrupos: null,
          userName: "charly",
          normalizedUserName: "CHARLY",
          normalizedEmail: "CHARLY@GMAIL.COM",
          emailConfirmed: false,
          passwordHash:
            "AQAAAAEAACcQAAAAEJSzCyHbeu9+VqVdO8uCFgKNccSPNJZ5i1cxr9MrBkwtMbI8+rzOF/9mRmwSf8HArQ==",
          securityStamp: "KBOAVAELRSCA6PHV2QA3Z3TQLQILWBWQ",
          concurrencyStamp: "3df210b1-041f-4638-89bf-7ddbc6762086",
          phoneNumber: null,
          phoneNumberConfirmed: false,
          twoFactorEnabled: false,
          lockoutEnd: null,
          lockoutEnabled: true,
          accessFailedCount: 0
        },
        {
          id: "7a017b6c-41f5-42ac-943a-4895f375c105",
          nombre: null,
          password: null,
          email: "charly@gmail.com",
          nickName: "charles",
          gruposAdmin: null,
          usuarioGrupos: null,
          userName: "charly",
          normalizedUserName: "CHARLY",
          normalizedEmail: "CHARLY@GMAIL.COM",
          emailConfirmed: false,
          passwordHash:
            "AQAAAAEAACcQAAAAEJSzCyHbeu9+VqVdO8uCFgKNccSPNJZ5i1cxr9MrBkwtMbI8+rzOF/9mRmwSf8HArQ==",
          securityStamp: "KBOAVAELRSCA6PHV2QA3Z3TQLQILWBWQ",
          concurrencyStamp: "3df210b1-041f-4638-89bf-7ddbc6762086",
          phoneNumber: null,
          phoneNumberConfirmed: false,
          twoFactorEnabled: false,
          lockoutEnd: null,
          lockoutEnabled: true,
          accessFailedCount: 0
        },
        {
          id: "7a017b6c-41f5-42ac-943a-4895f375c105",
          nombre: null,
          password: null,
          email: "charly@gmail.com",
          nickName: "charles",
          gruposAdmin: null,
          usuarioGrupos: null,
          userName: "charly",
          normalizedUserName: "CHARLY",
          normalizedEmail: "CHARLY@GMAIL.COM",
          emailConfirmed: false,
          passwordHash:
            "AQAAAAEAACcQAAAAEJSzCyHbeu9+VqVdO8uCFgKNccSPNJZ5i1cxr9MrBkwtMbI8+rzOF/9mRmwSf8HArQ==",
          securityStamp: "KBOAVAELRSCA6PHV2QA3Z3TQLQILWBWQ",
          concurrencyStamp: "3df210b1-041f-4638-89bf-7ddbc6762086",
          phoneNumber: null,
          phoneNumberConfirmed: false,
          twoFactorEnabled: false,
          lockoutEnd: null,
          lockoutEnabled: true,
          accessFailedCount: 0
        }
      ]
    };
    this.idGrupo=objeto.grupoID;
    this.nombreGrupo=objeto.nombreGrupo;
    this.integrantes=objeto.usuarios;
  }
}
