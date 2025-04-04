import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  imports: [MatButtonModule, MatCardModule, 
    MatGridListModule, CommonModule],
  styleUrls: ['./landing.component.scss'], 
})
export class LandingComponent {
  showSection = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMore() {
   let toggleBtn = document.getElementById('toggleSkills')!
    if(this.showSection == false) {
      this.showSection = true
      toggleBtn.innerHTML = 'Show Less'
    }
    else {
      this.showSection = false
      toggleBtn.innerHTML = 'Show More'
    }
    console.log('Clicked!')
  }
}
