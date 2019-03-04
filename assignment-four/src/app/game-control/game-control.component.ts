import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGameEvent: EventEmitter<number> = new EventEmitter();
  intervalRef: any;
  numba: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.intervalRef = setInterval(() => {
      this.startGameEvent.emit(this.numba++);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.intervalRef);
  }

}
