import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenGames: number[] = [];
  oddGames: number[] = [];


  gameStarted(index) {
    if (index % 2 == 0) {
      this.evenGames.push(index);
    } else {
      this.oddGames.push(index);
    }
  }

}
