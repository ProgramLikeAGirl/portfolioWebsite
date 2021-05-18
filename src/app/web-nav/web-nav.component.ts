import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.scss'],
})
export class WebNavComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithubAlt = faGithubAlt;
  faEnvelope = faEnvelope;
  constructor() {}

  ngOnInit(): void {}
}
