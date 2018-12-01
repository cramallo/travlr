import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

import { GruposComponent } from './grupos/grupos.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetalleGrupoComponent } from './detalle-grupo/detalle-grupo.component';



@NgModule({
    declarations: [
        PagesComponent,
        GruposComponent,
        HeaderComponent,
        SidebarComponent,
        DetalleGrupoComponent
    ],
    exports: [
       PagesComponent,
       GruposComponent,
       HeaderComponent
    ],
    imports: [        
        PAGES_ROUTES,
        FormsModule,        
    ]
})
export class PagesModule { }
