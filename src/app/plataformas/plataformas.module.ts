import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformasRoutingModule } from './plataformas-routing.module';
import { PagaquiComponent } from './pagaqui/pagaqui.component';
import { PlanetaemxComponent } from './planetaemx/planetaemx.component';


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
