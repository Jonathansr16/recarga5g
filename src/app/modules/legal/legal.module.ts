import { NgModule } from '@angular/core';
import { CondicionesComponent } from '@legal/pages/condiciones/condiciones.component';
import { PoliticasComponent } from '@legal/pages/politicas/politicas.component';
import { LegalRoutingModule } from '@legal/legal-routing.module';
import { MaterialModule } from '@shared/material/material.module';



@NgModule({
  declarations: [
    PoliticasComponent,
    CondicionesComponent
  ],
  imports: [
    LegalRoutingModule,
    MaterialModule
  ]
})
export class LegalModule { }
