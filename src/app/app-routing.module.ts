import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PagaquiComponent } from './pages/pagaqui/pagaqui.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RecargakiComponent } from './pages/recargaki/recargaki.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'pagaqui', component: PagaquiComponent },
  { path: 'recargaki', component: RecargakiComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'faqs', component: FaqsComponent },
    { path: '**',  redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
