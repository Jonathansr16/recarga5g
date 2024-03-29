import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepopagaquiComponent } from '@reportes/pages/repopagaqui/repopagaqui.component';
import { RepoplanetaemxComponent } from '@reportes/pages/repoplanetaemx/repoplanetaemx.component';

const routes: Routes = [
  { path: 'reportePagaqui', component: RepopagaquiComponent },
  { path: 'reportePlanetaemx', component: RepoplanetaemxComponent },
  { path: '**', redirectTo: '/Error/404/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
