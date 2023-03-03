import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatpagaquiComponent } from './platpagaqui/platpagaqui.component';
import { PlatplanetaemxComponent } from './platplanetaemx/platplanetaemx.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'pagaqui', component: PlatpagaquiComponent },
  { path: 'planetaemx', component: PlatplanetaemxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
