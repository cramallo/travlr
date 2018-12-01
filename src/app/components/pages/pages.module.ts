import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

import { BrowserModule } from '@angular/platform-browser';
import { GruposComponent } from './grupos/grupos.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetalleGrupoComponent } from './detalle-grupo/detalle-grupo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GrupoService } from '../../services/grupo.service';


@NgModule({
    declarations: [
        PagesComponent,
        GruposComponent,
        HeaderComponent,
        SidebarComponent,
        DetalleGrupoComponent,
        CalendarComponent
    ],
    exports: [
       PagesComponent,
       GruposComponent,
       HeaderComponent
    ],
    imports: [        
        BrowserModule,
        PAGES_ROUTES,
        FormsModule,        
    ],
    providers:[
        GrupoService
    ]
})
export class PagesModule { }
