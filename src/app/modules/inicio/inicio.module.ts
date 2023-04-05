import { NgModule } from '@angular/core';
import { PortalComponent } from '@inicio/pages/portal/portal.component';
import { RegistroComponent } from '@inicio/pages/registro/registro.component';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  declarations: [
    PortalComponent,
    RegistroComponent
  ],
  imports: [
   MaterialModule
  ], 
 
})
export class InicioModule { }
