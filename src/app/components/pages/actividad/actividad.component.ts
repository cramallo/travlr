import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';



@Component({
  selector: 'app-actividad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;

  constructor() { }

  ngOnInit() {
    
  }

}
