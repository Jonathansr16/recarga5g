import { NgModule } from '@angular/core';
import { CondicionesComponent } from '@legal/pages/condiciones/condiciones.component';
import { PoliticasComponent } from '@legal/pages/politicas/politicas.component';
import { LegalRoutingModule } from '@legal/legal-routing.module';



@NgModule({
  declarations: [
    PoliticasComponent,
    CondicionesComponent
  ],
  imports: [
   
    LegalRoutingModule,
  ]
})
export class LegalModule { }
