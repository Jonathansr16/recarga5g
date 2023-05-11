import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NofoundComponent } from './components/nofound/nofound.component';

//* Components of Angular Material

import { MaterialModule } from '@shared/material/material.module';
import { ProductosService } from './services/productos.service';
import { UpScrollComponent } from './components/up-scroll/up-scroll.component';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NofoundComponent,
    UpScrollComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ], exports: [
    HeaderComponent,
    FooterComponent,
    NofoundComponent,
    UpScrollComponent,
  
  ],
  providers:[
   ProductosService, 
  ]
})
export class CoreModule { }
