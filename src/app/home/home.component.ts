import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <h2 style="color: white;">Willkommen!</h2>
    `
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}