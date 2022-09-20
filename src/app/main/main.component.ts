import { GitProfile } from './../models/git-profile/git-profile';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @Input() git: GitProfile;

  ngOnInit(): void {}
}
