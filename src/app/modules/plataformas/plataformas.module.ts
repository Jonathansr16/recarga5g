
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagaquiComponent } from '@plataformas/pages/pagaqui/pagaqui.component';
import { PlanetaemxComponent } from '@plataformas/pages/planetaemx/planetaemx.component';
import { PlataformasRoutingModule } from '@plataformas/plataformas-routing.module';

@NgModule({
  declarations: [
    PagaquiComponent,
    PlanetaemxComponent
  ],
  imports: [
    CommonModule,
    PlataformasRoutingModule
  ]
})
export class PlataformasModule { }
