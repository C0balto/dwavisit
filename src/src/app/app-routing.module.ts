import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {Routes} from '@angular/router';
import { VisaogeralComponent } from './visaogeral/visaogeral.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';

@NgModule({
  imports: [
    CommonModule,
   
  ],
  declarations: []
})
export class AppRoutingModule { }

const APP_ROUTES: Routes = [
{ path: 'visao', component: VisaogeralComponent},
{ path: 'moradores', component: MoradoresComponent},
{ path: 'visitantes', component: VisitantesComponent},
{ path: 'monitoramento', component: MonitoramentoComponent}
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

