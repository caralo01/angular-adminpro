import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Module
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
  declarations: [
  	PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [
  	PagesComponent,
  	DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
  	SharedModule,
    ComponentsModule,
    FormsModule,
    BrowserModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
