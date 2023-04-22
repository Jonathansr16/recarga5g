import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NofoundComponent } from './components/nofound/nofound.component';

//* Components of Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MaterialModule } from '@shared/material/material.module';
import { ProductosService } from './services/productos.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NofoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MaterialModule
  ], exports: [
    HeaderComponent,
    FooterComponent,
    NofoundComponent
  ],
  providers:[
   ProductosService
  ]
})
export class CoreModule { }
