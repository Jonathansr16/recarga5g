import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformasRoutingModule } from './plataformas-routing.module';
import { PlataformasComponent } from './plataformas.component';


@NgModule({
  declarations: [
    PlataformasComponent
  ],
  imports: [
    CommonModule,
    PlataformasRoutingModule
  ]
})
export class PlataformasModule { }
