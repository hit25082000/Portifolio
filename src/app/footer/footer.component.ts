import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { GitProfile } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('blackHole', [
      state('stable', style({})),
      state('caos', style({ opacity: 0})),

      transition('stable => caos', [animate('4s')]),
      transition('caos => stable', [animate('2s')]),
    ]),
  ],
})
export class FooterComponent implements OnInit {
  @Input() git: GitProfile;
  @Input() animation: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.animation);
  }
}
