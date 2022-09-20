import { Component, Input, OnInit } from '@angular/core';
import { GitProfile } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() git: GitProfile;

  constructor() {}

  ngOnInit(): void {}
}
