import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENT
import { PortalComponent } from './portal/portal.component';
import { RegistroComponent } from './registro/registro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

//MODULES

@NgModule({
  declarations: [
    PortalComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  
  ], 
})
export class InicioModule { }
