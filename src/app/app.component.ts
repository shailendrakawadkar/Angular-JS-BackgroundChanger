import { getAllLifecycleHooks, hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Background-Changer';
}

