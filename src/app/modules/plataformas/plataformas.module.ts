
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* COMPONENTS
import { PagaquiComponent } from '@plataformas/pages/pagaqui/pagaqui.component';
import { PlanetaemxComponent } from '@plataformas/pages/planetaemx/planetaemx.component';
import { PlataformasRoutingModule } from '@plataformas/plataformas-routing.module';
import { MontosComponent } from '@plataformas/components/montos/montos.component';
import { AppPlataformasComponent } from '@plataformas/components/app-plataformas/app-plataformas.component';
import { ManualesComponent } from '@plataformas/components/manuales/manuales.component';
//* MODULES
import { FeatureModule } from '@feature/feature.module';
import { MaterialModule } from '@shared/material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagaquiComponent,
    PlanetaemxComponent,
    AppPlataformasComponent,
    MontosComponent,
    ManualesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatDialogModule,
    FeatureModule,
    PlataformasRoutingModule
  ]
})
export class PlataformasModule { }
