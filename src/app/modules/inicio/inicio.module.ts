import { NgModule } from '@angular/core';
import { PortalComponent } from '@inicio/pages/portal/portal.component';
import { RegistroComponent } from '@inicio/pages/registro/registro.component';
import { MaterialModule } from '@shared/material/material.module';
import { ComponentsModule } from '@components/components.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    PortalComponent,
    RegistroComponent
  ],
  imports: [
   MaterialModule,
   ComponentsModule,
   CommonModule
  ], 
 
})
export class InicioModule { }
