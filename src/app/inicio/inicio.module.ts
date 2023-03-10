import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENT
import { PortalComponent } from './portal/portal.component';
import { RegistroComponent } from './registro/registro.component';
import { MaterialModule } from '../material/material.module';

//MODULES

@NgModule({
  declarations: [
    PortalComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
})
export class InicioModule { }
