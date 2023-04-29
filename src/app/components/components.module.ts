import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//* MODULOS EXTERNOS IMPORTADOS
import { MaterialModule } from '@shared/material/material.module';

//* COMPONENTES 
import { ProductosComponent } from './productos/productos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MetodoVentasComponent } from './metodo-ventas/metodo-ventas.component';


@NgModule({
  declarations: [
   ProductosComponent,
   CarouselComponent,
   MetodoVentasComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    MaterialModule,
  ], exports: [
      ProductosComponent,
      CarouselComponent,
      MetodoVentasComponent,
   
  ],
 
})
export class ComponentsModule { }
