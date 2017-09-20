import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./pipes/location.pipe";
import { LocationValidationDirective } from "./validation/location.validation.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LocationPipe,
        LocationValidationDirective
    ],
    providers: [],
    exports: [
        LocationPipe,
        LocationValidationDirective 
    ]
})
export class SharedModule { }