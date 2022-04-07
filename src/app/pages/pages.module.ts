import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { PagaquiComponent } from './pagaqui/pagaqui.component';
import { RecargakiComponent } from './recargaki/recargaki.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqsComponent } from './faqs/faqs.component';

//MODULES
import { RouterModule } from '@angular/router';

//SERVICES
import { MetaTagService } from './services/meta-tag.service';


@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    PagaquiComponent,
    RecargakiComponent,
    RegistroComponent,
    ContactoComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    PagaquiComponent,
    RecargakiComponent,
    RegistroComponent,
    ContactoComponent,
    FaqsComponent
  ],
  providers: [MetaTagService],
})
export class PagesModule { }
