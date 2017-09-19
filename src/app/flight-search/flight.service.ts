import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs";
import { Flight } from "app/entities/flight";
import { BASE_URL } from "app/app.tokens";

@Injectable()
export class FlightService {

    constructor(
        private http: HttpClient,
        @Inject(BASE_URL) private baseUrl: string) { 
        console.debug('Hello from the FlightService');
    }

    find(from: string, to: string): Observable<Flight[]> {
        
        let url = this.baseUrl + 'flight';

        let params = new HttpParams()
                            .set('from', from)
                            .set('to', to);

       let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, { params, headers });    

    }
}