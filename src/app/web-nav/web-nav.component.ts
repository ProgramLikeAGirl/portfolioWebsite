import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-web-nav',
    standalone: true,
    templateUrl: './web-nav.component.html',
    imports: [MatButtonModule, MatCardModule, 
      MatGridListModule, MatToolbarModule],
    styleUrls: ['./web-nav.component.scss'],
})
export class WebNavComponent {
  constructor() {}

  ngOnInit(): void {}
}
