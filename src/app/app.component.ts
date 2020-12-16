import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notebook';
  links = [
    { path: '/home', title: 'Home' },
    { path: '/new', title: 'New Note' }
  ]

  constructor() { }
}
