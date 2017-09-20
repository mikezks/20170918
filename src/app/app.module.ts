import { FlightSearchModule } from './flight-search/flight-search.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { FlightService } from "app/flight-search/flight.service";
import { BASE_URL } from "app/app.tokens";
import { MouseMoveComponent } from './mouse-move/mouse-move.component';
import { AppRouterModule } from "app/app.routes";
import { HomeComponent } from "app/home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightSearchModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    MouseMoveComponent,    
    HomeComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at/api/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
