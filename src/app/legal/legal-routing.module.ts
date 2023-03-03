import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PoliticasComponent } from './politicas/politicas.component';

const routes: Routes = [
  { path: 'politicas', component: PoliticasComponent},
  { path: 'condiciones', component: CondicionesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
