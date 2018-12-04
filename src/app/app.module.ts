import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PagesModule } from './components/pages/pages.module';
import { UsuarioService } from './services/usuario.service';
import { GrupoService } from './services/grupo.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    RegisterComponent    
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    APP_ROUTES,
    HttpClientModule,   
    PagesModule 
  ],
  providers: [    
    UsuarioService,
    GrupoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
