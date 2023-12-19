import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit{
  time = 0;
  timer: any;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.time++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.time = 0;
    clearInterval(this.timer);
  }
}
