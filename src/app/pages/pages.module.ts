import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
  	PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
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
    CommonModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
