import { concat } from 'rxjs/operator/concat';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'mouse-move',
  templateUrl: './mouse-move.component.html',
  styleUrls: ['./mouse-move.component.css']
})
export class MouseMoveComponent implements OnInit, OnDestroy {
  private oneSecondMouseMove$: Observable<any>;
  private buttonText: string;
  private mouseMove$: Subject<MouseEvent> = new Subject<MouseEvent>();
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private activeSubscription: boolean;

  @HostListener('mousemove', ['$event'])
    onMouseMove(event) {
      this.mouseMove$.next(event);
  }

  constructor() {
    this.buttonText = "Subscribe";
   }

  ngOnInit() {
    this.createObservable();
  }

  createObservable() {
    const oneSecond$ = Observable.timer(0, 1000);
    //const mouseMove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');
    this.oneSecondMouseMove$ = this.mouseMove$.sample(oneSecond$);
  }

  subscribe() {
    if (!this.activeSubscription) {     
      this.oneSecondMouseMove$.takeUntil(this.destroy$).subscribe(result => console.log(result)); 
      this.buttonText = "Unsubscribe";
      this.activeSubscription = true;
    }
    else {
      this.destroy$.next(true); 
      this.activeSubscription = false;
      this.buttonText = "Subscribe";
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
