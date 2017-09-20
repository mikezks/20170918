import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./pipes/location.pipe";
import { LocationValidationDirective } from "./validation/location.validation.directive";
import { RoundTripValidationDirective } from "./validation/round-trip.validation.directive"; 
import { AsyncLocationValidationDirective } from "./validation/async-location.validation.directive"; 

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LocationPipe,
        LocationValidationDirective,
        RoundTripValidationDirective, 
        AsyncLocationValidationDirective 
    ],
    providers: [],
    exports: [
        LocationPipe,
        LocationValidationDirective,
        RoundTripValidationDirective, 
        AsyncLocationValidationDirective  
    ]
})
export class SharedModule { }