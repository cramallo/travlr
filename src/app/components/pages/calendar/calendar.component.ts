import { Component, OnInit } from '@angular/core';

declare function init_plugins();
declare function init_calendar();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();    
    init_calendar();     
  }

}
