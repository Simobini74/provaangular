import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpenweatherService } from './openweather.service';
import { NotificaComponent } from './notifica/notifica.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OpenweatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
