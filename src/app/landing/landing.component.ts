import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  imports: [MatButtonModule, MatCardModule, 
    MatGridListModule, MatTooltipModule, CommonModule],
  styleUrls: ['./landing.component.scss'], 
})
export class LandingComponent {
  showSection = false;

  constructor() {

  }

  ngOnInit(): void {}

  toggleMore() {
    this.showSection = !this.showSection;
  }

  getMoreSkills() {
    return this.showSection ? "Show Less" : "Show More";
  }

}
