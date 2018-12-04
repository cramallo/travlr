import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-encuestas",
  templateUrl: "./encuestas.component.html",
  styleUrls: ["./encuestas.component.css"]
})
export class EncuestasComponent implements OnInit {
  encuestas = [
    {
      nombre: "Medio de transporte",
      opciones: [
        { nombre: "Avion", checked: false },
        { nombre: "Micro", checked: false },
        { nombre: "Dedo", checked: false },
        { nombre: "El auto de Tincho", checked: false }
      ]
    },
    {
      nombre: "Donde vamos?",
      opciones: [
        { nombre: "Costa Argentina", checked: false },
        { nombre: "Europa", checked: false },
        { nombre: "Miameeee", checked: false }
      ]
    },
    {
      nombre: "Donde paramos en la ruta?",
      opciones: [
        { nombre: "Aquasol", checked: false },
        { nombre: "YPF", checked: false },
        { nombre: "Ningun Lugar", checked: false }
      ]
    }
  ];

  constructor() {}

  cargarDatos(id: number) {}

  ngOnInit() {}

  onSelectionChange(entry) {
    //this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
  }
}
