import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './components/pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    APP_ROUTES,
    PagesModule  
  ],
  providers: [
    UsuarioService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
