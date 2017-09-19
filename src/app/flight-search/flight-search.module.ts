import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "../flight-search/flight-search.components";
import { FlightCardComponent } from "../flight-search/flight-card.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightSearchModule { }