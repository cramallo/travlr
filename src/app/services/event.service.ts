import { Inject, Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth =
      dateObj.getUTCFullYear() + "-" + (dateObj.getUTCMonth() + 1);
    let data: any = [
      {
        title: "All Day Event",
        start: yearMonth + "-01",
        color: "#378006"
      },
      {
        title: "Long Event",
        start: yearMonth + "-07",
        end: yearMonth + "-10"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: yearMonth + "-09T16:00:00"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: yearMonth + "-16T16:00:00"
      },
      {
        title: "Meeting",
        start: yearMonth + "-12T14:30:00"
      },
      {
        title: "Happy Hour",
        start: yearMonth + "-12T17:30:00"
      },
      {
        title: "Dinner",
        start: yearMonth + "-12T20:00:00"
      },
      {
        title: "Birthday Party",
        start: yearMonth + "-13T07:00:00"
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: yearMonth + "-28"
      },
      {
        title: "nosee",
        start: "2018-12-22T00:00:00"
      }
    ];
    return of(data);
  }
}
