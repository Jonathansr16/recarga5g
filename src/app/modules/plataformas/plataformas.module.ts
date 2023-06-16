
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagaquiComponent } from '@plataformas/pages/pagaqui/pagaqui.component';
import { PlanetaemxComponent } from '@plataformas/pages/planetaemx/planetaemx.component';
import { PlataformasRoutingModule } from '@plataformas/plataformas-routing.module';
import { FeatureModule } from '@feature/feature.module';
import { MontosComponent } from '@plataformas/components/montos/montos.component';
import { ManualesComponent } from '@plataformas/components/manuales/manuales.component';
import { AppPlataformasComponent } from '@plataformas/components/app-plataformas/app-plataformas.component';
import { MaterialModule } from '@shared/material/material.module';


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
    FeatureModule,
    PlataformasRoutingModule
  ]
})
export class PlataformasModule { }
