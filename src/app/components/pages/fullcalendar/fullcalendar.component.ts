import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CalendarComponent } from "ng-fullcalendar";
import { Options } from "fullcalendar";
import { EventService } from "../../../services/event.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { GrupoService } from "../../../services/grupo.service";
import { map } from "rxjs/operators";

//MODELS
import { Actividad } from "../../../models/actividad";
import { Evento } from "../../../models/evento";

@Component({
  selector: "app-fullcalendar",
  templateUrl: "./fullcalendar.component.html",
  styleUrls: ["./fullcalendar.component.css"]
})
export class FullcalendarComponent implements OnInit {
  idGrupo: any;
  fechaSelected: string;
  eventos: any;
  eventosFormat = [];

  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    protected eventService: EventService,
    private _grupoService: GrupoService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {      
    this.idGrupo=this.route.snapshot.paramMap.get("id");
    this.calendarOptions = {
      editable: true,
      eventLimit: true,
      views: {
        agenda: {
          eventLimit: 3 // adjust to 6 only for agendaWeek/agendaDay
        }
      },
      locale: "es",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,listMonth"
      },
      events: this.eventos
    };    
    this.getActividades();
  }
 
  modalActividad() {
    console.log(this.fechaSelected);
    document.getElementById("openModalButton").click();
  }

  nuevaActividad(descripcion: any) {
    let act = {
      descripcion: descripcion,
      fechaHora: this.fechaSelected
    };
    console.log("actividad a dar de alta");
    console.log(act);
    let actividad = new Actividad(this.idGrupo, act);

    this._grupoService.crearActividad(actividad).subscribe(
      rta => {
        this.getActividades();
        document.getElementById("cancelar").click();
      },
      err => {        
        document.getElementById("cancelar").click();
      }
    );
  }

  getActividades() {
    this._grupoService.getActividades(this.idGrupo).subscribe(
      rta => {              
        //Lo vacio para recargar  
        console.log(JSON.stringify(rta));
        this.eventos=[];
        this.cargarCalendar();
        this.eventos = rta.map(res => {
          let objeto;
          objeto = {
            title: res["descripcion"],
            start: res["fechaHora"]
          };
          return objeto;
        });        
        this.cargarCalendar();               
      },
      err => {}
    );
  }

  cargarCalendar(){
   this.ucCalendar.fullCalendar('removeEvents');
   this.ucCalendar.fullCalendar('addEventSource',this.eventos);
  }

  //HARDCODEO
  cargarEvento() {   
    this.eventos.push({
      title: "All Day Event",
      start: "2019-01-01T00:00:00"      
    });       
    this.cargarCalendar();   
  } 

  //METODOS DE CALENDAR
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    };
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    console.log(model.event.start);
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    };
    this.displayEvent = model;
  }
  dayClick(model: any) {
    this.fechaSelected = model.date.format();
    this.modalActividad();
  }

}


/* ESTO ESTABA EN NGONINIT Y FUNCIONABA

 this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: true,
        views: {
          agenda: {
            eventLimit: 3 // adjust to 6 only for agendaWeek/agendaDay
          }
        },
        locale: "es",
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,listMonth"
        },
        events: data
      };
    });



*/