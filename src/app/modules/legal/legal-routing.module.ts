import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionesComponent } from '@legal/pages/condiciones/condiciones.component';
import { PoliticasComponent } from '@legal/pages/politicas/politicas.component';

const routes: Routes = [
  { path: 'politicas', component: PoliticasComponent},
  { path: 'condiciones', component: CondicionesComponent},
  { path: '**', redirectTo: '/Error/404/' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
