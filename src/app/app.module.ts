import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

//Modulo principal da aplicação
@NgModule({
    declarations: [
        AppComponent // aqui colocamos todos os componentes que serão importados
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal que chama todos os outros módulos
})
export class AppModule { }
