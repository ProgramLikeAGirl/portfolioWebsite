import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LandingComponent], // Import LandingComponent directly
})
export class AppComponent {
  title = 'my-angular-app';
}
