import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(20, 20, 150, 100);
    }
  }
}
