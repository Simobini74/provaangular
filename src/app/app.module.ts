import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpenweatherService } from './openweather.service';
import { NotificaComponent } from './notifica/notifica.component';
import { NewcityComponent } from './newcity/new-city.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificaComponent,
    NewcityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OpenweatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
