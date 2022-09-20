import { GitProfile } from './../models/git-profile/git-profile';
import { Component, Input, OnInit, Output } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('blackHole', [
      state('stable', style({})),
      state('caos', style({})),

      transition('stable => caos', [animate('5s')]),
      transition('caos => stable', [animate('2s')]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  @Input() git: GitProfile;
  @Input() animation: boolean;

  ngOnInit(): void {}
}
