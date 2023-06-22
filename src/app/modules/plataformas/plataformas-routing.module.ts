
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagaquiComponent } from './pages/pagaqui/pagaqui.component';
import { PlanetaemxComponent } from './pages/planetaemx/planetaemx.component';
import { NofoundComponent } from '@core/components/nofound/nofound.component';


const routes: Routes = [

  { path: 'pagaqui', component: PagaquiComponent },
  { path: 'planetaemx', component: PlanetaemxComponent },
  { path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformasRoutingModule { }
