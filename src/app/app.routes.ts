import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
//import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
