import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = true;
  logs = [];

  onButtonClick() {
    this.show = !this.show;
    this.logs.push(this.logs.length + 1);
  }
}
