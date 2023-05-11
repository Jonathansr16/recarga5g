import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* MODULOS IMPORTADOS
import { FeatureModule } from '@feature/feature.module';
import { MaterialModule } from '@shared/material/material.module';

//* COMPONENTS
import { HomeComponent } from '@inicio/pages/home/home.component';
import { RegistroComponent } from '@inicio/pages/registro/registro.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent
  ],
  imports: [
   MaterialModule,
   CommonModule,
   FeatureModule
  ], 
 
})
export class InicioModule { }
