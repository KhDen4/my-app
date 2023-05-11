import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:   `<div>
    <nav>
      <a routerLink="">Products </a>
    </nav>
    <router-outlet></router-outlet>
  </div>` 
})
export class AppComponent {
  title = 'my-app';
}
