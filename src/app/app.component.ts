import { AppService, GitProfile } from './app.service';
import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  error: any;
  headers: string[] = [];
  config: GitProfile | undefined;
  absorbtion = false;

  constructor(private AppService: AppService) {}

  Absorbtion() {
    this.absorbtion = true;
  }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.AppService.getConfig().subscribe({
      next: (data: GitProfile) => (this.config = { ...data }), // success path
      error: (error) => (this.error = error), // error path
    });
  }
}
