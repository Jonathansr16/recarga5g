import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { PlatpagaquiComponent } from './platpagaqui/platpagaqui.component';
import { PlatplanetaemxComponent } from './platplanetaemx/platplanetaemx.component';


@NgModule({
  declarations: [
    ProductosComponent,
    PlatpagaquiComponent,
    PlatplanetaemxComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
  ]
})
export class ConsultasModule { }
