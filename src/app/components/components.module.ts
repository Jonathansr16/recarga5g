import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NopagesfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    NopagesfoundComponent,
  ]
})
export class ComponentsModule { }
