import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


//Modulos
import { IncrementadorComponent } from './incrementador/incrementador.component';

//Directiva
import { OnlyNumberDirective } from '../directives/only-number.directive';
import { DonaComponent } from './dona/dona.component';

@NgModule({ 
  declarations: [
    IncrementadorComponent,
    OnlyNumberDirective,
    DonaComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
