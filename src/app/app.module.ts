import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* import { ContadorComponent } from './contadores/contador/contador.component'; */
import { HeroeModule } from './heroes/heroe.module';
import { ContadorModule } from './contadores/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    /*  ContadorComponent, */
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
