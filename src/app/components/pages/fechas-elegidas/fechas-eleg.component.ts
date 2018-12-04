import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare function init_plugins();
declare function init_calendar();


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild("calendar") el: ElementRef;

  constructor() { }

  ngOnInit() {      
    init_plugins();    
    init_calendar();

  }

  ngOnChange(){
    console.log(this.el);
  }

  fecha($event){
    console.log($event);
  }

}
