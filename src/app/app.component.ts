import { Component } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { RouterOutlet } from '@angular/router';

// Create a simple component with a title and a greeting
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasComponent],
  template: `
    <app-canvas></app-canvas>
    <h1>Hello, {{ title }}</h1>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      font-size: 2em;
      color: #333;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'Testpage';
}
