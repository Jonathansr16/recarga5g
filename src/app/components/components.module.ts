import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';
import { ProductosComponent } from './productos/productos.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
   ProductosComponent,
   CarouselComponent
  ],
  imports: [
    RouterModule, 
    MaterialModule,
    CommonModule
  ], exports: [
      ProductosComponent,
      CarouselComponent
  ],
 
})
export class ComponentsModule { }
