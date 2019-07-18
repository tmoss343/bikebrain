import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bikebrain';
  paint = { 'background-color': 'green', 'background-opacity': 0.1 };

  ngOnInit() {
  }
}
