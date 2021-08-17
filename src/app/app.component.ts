import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  getStyle = 'green';

  ngOnInit() {
    setInterval(() => {
      this.getStyle = this.getStyle === 'green' ? 'red' : 'green';
    }, 2000);
  }
}
