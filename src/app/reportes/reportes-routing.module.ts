import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepopagaquiComponent } from './repopagaqui/repopagaqui.component';
import { RepoplanetaemxComponent } from './repoplanetaemx/repoplanetaemx.component';

const routes: Routes = [
  { path: 'repoPagaqui', component: RepopagaquiComponent },
  { path: 'repoPlanetaemx', component: RepoplanetaemxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
