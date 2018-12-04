import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { GruposComponent} from './grupos/grupos.component';
import { DetalleGrupoComponent } from './detalle-grupo/detalle-grupo.component';
import { LoginGuardGuard } from '../../services/guards/login-guard.guard';
import { FullcalendarComponent } from '../../components/pages/fullcalendar/fullcalendar.component';
import { EncuestasComponent } from '../../components/pages/encuestas/encuestas.component';
import { FondoComunComponent } from '../../components/pages/fondo-comun/fondo-comun.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children:[
            { path: 'grupos', component: GruposComponent },
            { path: 'grupos/detalle/:id', component:DetalleGrupoComponent,
                children:[{
                    path:'calendar',
                    component:FullcalendarComponent
                },
                {
                    path:'encuestas',
                    component:EncuestasComponent
                },
                {
                    path:'fondo',
                    component:FondoComunComponent
                }
            ]
            }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
