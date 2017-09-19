import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./pipes/location.pipe";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LocationPipe
    ],
    providers: [],
    exports: [
        LocationPipe
    ]
})
export class SharedModule { }