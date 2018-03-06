import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje:number;
  porcentaje2:number;
  progressGreen: string;

  constructor() { 
    this.porcentaje = 20;
    this.porcentaje2 = 50;
    this.progressGreen = "Progress Verde"
  }

  ngOnInit() {
  }

  actualizar( event ){
    this.porcentaje = event;
  }

  actualizar2( event ){
    this.porcentaje2 = event;
  }

}
