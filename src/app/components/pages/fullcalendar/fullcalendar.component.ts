import { Component, OnInit, ViewChild } from "@angular/core";
import { CalendarComponent } from "ng-fullcalendar";
import { Options } from "fullcalendar";
import { EventService } from '../../../services/event.service';

@Component({
  selector: "app-fullcalendar",
  templateUrl: "./fullcalendar.component.html",
  styleUrls: ["./fullcalendar.component.css"]
})
export class FullcalendarComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,listMonth"
        },
        events: data
      };
    });
  }
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
  dayClick(model:any){
    console.log(model);
  }
 
}
