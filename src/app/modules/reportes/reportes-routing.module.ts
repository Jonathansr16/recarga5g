import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from '@core/components/nofound/nofound.component';
import { RepopagaquiComponent } from '@reportes/pages/repopagaqui/repopagaqui.component';
import { RepoplanetaemxComponent } from '@reportes/pages/repoplanetaemx/repoplanetaemx.component';

const routes: Routes = [
  { path: 'reportePagaqui', component: RepopagaquiComponent },
  { path: 'reportePlanetaemx', component: RepoplanetaemxComponent },
  { path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
