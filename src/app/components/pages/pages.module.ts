import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';*/
import { BrowserModule } from '@angular/platform-browser';
import { GruposComponent } from './grupos/grupos.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetalleGrupoComponent } from './detalle-grupo/detalle-grupo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GrupoService } from '../../services/grupo.service';
import { ActividadComponent } from '../pages/actividad/actividad.component';
import { FullcalendarComponent } from '../pages/fullcalendar/fullcalendar.component';

//FULL CALENDAR
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventService } from '../../services/event.service';



@NgModule({
    declarations: [
        PagesComponent,
        GruposComponent,
        HeaderComponent,
        SidebarComponent,
        DetalleGrupoComponent,
        CalendarComponent,
        ActividadComponent,
        FullcalendarComponent
    ],
    exports: [
       PagesComponent,
       GruposComponent,
       HeaderComponent
    ],
    imports: [        
        BrowserModule,
        FullCalendarModule,
        /*BrowserAnimationsModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        }),*/
        PAGES_ROUTES,
        FormsModule,        
    ],
    providers:[
        GrupoService,
        EventService
    ]
})
export class PagesModule { }
