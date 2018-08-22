import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule, routing } from './/app-routing.module';
import { PerootComponent } from './peroot/peroot.component';
import { VisaogeralComponent } from './visaogeral/visaogeral.component';
import { MoradoresComponent } from './moradores/moradores.component';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    AppComponent,
    PerootComponent,
    VisaogeralComponent,
    MoradoresComponent,
    VisitantesComponent,
    MonitoramentoComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    routing,
    MatTableModule,
    MatBadgeModule
    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

