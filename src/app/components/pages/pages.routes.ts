import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { GruposComponent} from './grupos/grupos.component';
import { LoginGuardGuard } from '../../services/guards/login-guard.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children:[
            { path: 'grupos', component: GruposComponent }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
