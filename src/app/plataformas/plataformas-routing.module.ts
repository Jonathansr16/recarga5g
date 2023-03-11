import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagaquiComponent } from './pagaqui/pagaqui.component';
import { PlanetaemxComponent } from './planetaemx/planetaemx.component';

const routes: Routes = [
  { path: 'pagaqui', component: PagaquiComponent },
  { path: 'planetaemx', component: PlanetaemxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformasRoutingModule { }
