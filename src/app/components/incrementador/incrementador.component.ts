import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //ViewChild, ElementRef

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //@ViewChild('txtProgress') txtProgress: ElementRef;
  //this.txtProgress.nativeElement.value = aloquesea
  //this.txtProgress.nativeElement.focus() --> para poner el foco en ese elemento

  @Input() leyenda: string;
  @Input() porcentaje: number;

  @Output() cambioValor: EventEmitter<number>;

  constructor() { 
    this. porcentaje = 50;
    this.leyenda = "Leyenda";
    this.cambioValor = new EventEmitter();
  }

  ngOnInit() {
  }

  cambiarValor(valor:number){
    this.porcentaje = +this.porcentaje;
    if(this.porcentaje >= 100 && valor > 0){
      this.porcentaje = 100;
      return;
    }

    if(this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this. porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );
  }

  onChange(newValue: number){
    this.porcentaje = newValue;
    this.cambioValor.emit( this.porcentaje );
  }

}
