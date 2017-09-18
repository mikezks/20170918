import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from "app/flight-search/flight-search.components";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
