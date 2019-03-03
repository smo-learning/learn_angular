import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: String = ""

  isDisabled() {
    return this.username === "";
  }
  resetUser() {
    this.username = "";
    console.log("CLICK");
  }
}
