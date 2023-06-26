import { NgModule } from '@angular/core';

//* COMPONENT
import { CondicionesComponent } from '@legal/pages/condiciones/condiciones.component';
import { PoliticasComponent } from '@legal/pages/politicas/politicas.component';
import { LegalRoutingModule } from '@legal/legal-routing.module';

//* MODULES
import { MaterialModule } from '@shared/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    PoliticasComponent,
    CondicionesComponent
  ],
  imports: [
    LegalRoutingModule,
    MaterialModule,
    MatTabsModule,
  ]
})
export class LegalModule { }
