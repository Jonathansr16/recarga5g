
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagaquiComponent } from './pages/pagaqui/pagaqui.component';
import { PlanetaemxComponent } from './pages/planetaemx/planetaemx.component';

const routes: Routes = [
  { path: 'pagaqui', component: PagaquiComponent },
  { path: 'planetaemx', component: PlanetaemxComponent },
  {  path: '**', redirectTo: 'Error/404/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class PlataformasRoutingModule { }
