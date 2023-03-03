import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { PoliticasComponent } from './politicas/politicas.component';
import { CondicionesComponent } from './condiciones/condiciones.component';



@NgModule({
  declarations: [
    PoliticasComponent,
    CondicionesComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
  ]
})
export class LegalModule { }
