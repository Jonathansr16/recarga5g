import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecargasComponent } from './recargas/recargas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PinesComponent } from './pines/pines.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { FeatureModule } from '@feature/feature.module';

@NgModule({
  declarations: [
    RecargasComponent,
    ServiciosComponent,
    PinesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ConsultaRoutingModule,
    MaterialModule,
    FeatureModule
  ]
})
export class ConsultaModule { }
