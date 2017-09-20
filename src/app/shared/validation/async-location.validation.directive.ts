
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { FlightService } from "app/flight-search/flight.service";
import { Observable } from "rxjs/Observable";

@Directive({ 
    selector: 'input[asyncLocation]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncLocationValidationDirective,
            multi: true
        }
    ]
})
export class AsyncLocationValidationDirective implements Validator {
    constructor(private flightService: FlightService) { }

    validate(control: AbstractControl): Observable<any> {

        return this
            .flightService
            .find(control.value, '') // exists
            .map(flights => {
                if (flights.length > 0) {
                    return {}
                }
                else {
                    return { asyncLocation: true }
                }

            })
            .delay(4000);
    }
}