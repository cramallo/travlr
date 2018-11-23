import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },  
    { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });