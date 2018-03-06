import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent implements OnInit {

	// Doughnut
  @Input() doughnutChartLabels:string[];
  @Input() doughnutChartData:number[];
  @Input() doughnutChartType:string;

  constructor() { 
  	this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  	this.doughnutChartData = [350, 450, 100];
  	this.doughnutChartType = 'doughnut';
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
