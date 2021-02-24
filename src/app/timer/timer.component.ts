import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() seconds: string = '500';
  @Output() checkTime: EventEmitter<number> = new EventEmitter();
  countDown: any;

  constructor(private router: Router) {}

  intervalSubscription: Subscription;
  time: any;
  stopedTime: number;
  paused: boolean = false;
  finished: boolean = false;

  ngOnInit(): void {}

  toHome() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    this.router.navigate(['']);
  }

  setTimer(t) {
    this.time = t.value.startTime;
    console.log(this.time);

    this.intervalSubscription = interval(100).subscribe(
      () => {
        if (this.time >= 1) {
          console.log('chrono :  ' + this.time);
          this.time--;
        } else this.finished = true;
      },
      () => (this.time = 'FAILLE TEMPORELLE'),
      () => {
        this.intervalSubscription.unsubscribe();
      }
    );
  }

  stop() {
    if (this.intervalSubscription) {
      this.stopedTime = this.time;
      this.intervalSubscription.unsubscribe();
      this.paused = true;
    }
  }

  resume() {
    if (this.paused) {
      this.time = this.stopedTime;
      this.intervalSubscription = interval(100).subscribe(() => {
        if (this.time >= 1) {
          console.log('chrono :  ' + this.time);
          this.time--;
        } else this.finished = true;
      },
      () => (this.time = 'FAILLE TEMPORELLE'),
      () => {
        this.intervalSubscription.unsubscribe();
      }
    );
  }
}

  reset() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.time = null;
      this.stopedTime = 0;
      this.finished = false
    }
  }
}
