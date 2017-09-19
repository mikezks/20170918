import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-move',
  templateUrl: './mouse-move.component.html',
  styleUrls: ['./mouse-move.component.css']
})
export class MouseMoveComponent implements OnInit, OnDestroy {
  //private destroy$: Subject<boolean> = new Subject<boolean>();
  private oneSecondMouseMove$: Observable<any>;
  private subscription: Subscription
  private buttonText: string;

  constructor() { }

  ngOnInit() {
    const oneSecond$ = Observable.timer(0, 1000);
    const mouseMove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');
    this.oneSecondMouseMove$ = mouseMove$.sample(oneSecond$);
    
  }

  subscribe() {
    if (!this.subscription) {
      this.subscription = this.oneSecondMouseMove$.subscribe(result => console.log(result)); 
    }
    else {
      this.subscription.unsubscribe(); 
      this.subscription = undefined;
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
