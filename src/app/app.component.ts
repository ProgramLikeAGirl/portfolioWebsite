import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { WebNavComponent } from './web-nav/web-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LandingComponent, WebNavComponent], 
})
export class AppComponent {
  title = 'my-angular-app';
}
