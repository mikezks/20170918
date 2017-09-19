import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";

import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    //private http: Http;

    constructor(private http: Http) { 
        //this.http = http;
    }

    search(): void {

        let url = 'http://www.angular.at/api/flight';

        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        const getData$ = this.http
            .get(url, { search, headers})
            .map(resp => resp.json());



            getData$.subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (errResponse) => {
                    console.error('Error on loading', errResponse);
                }
            );


    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    ngOnInit() { }
}