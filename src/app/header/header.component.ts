import { GitProfile } from './../models/git-profile/git-profile';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('blackHole', [
      state('stable', style({})),
      state('caos', style({opacity: 0})),

      transition('stable => caos', [animate('5s')]),
      transition('caos => stable', [animate('2s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @Input() git: GitProfile;
  @Input() animation: boolean;
  @Output() newItemEvent = new EventEmitter();

  Absorbtion() {
    this.newItemEvent.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
