import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithubAlt = faGithubAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
