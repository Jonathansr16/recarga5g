import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ProductosComponent } from '@consultas/pages/productos/productos.component';



@NgModule({
  declarations: [
  ProductosComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
  ]
})
export class ConsultasModule { }
