import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from '@core/components/nofound/nofound.component';
import { CondicionesComponent } from '@legal/pages/condiciones/condiciones.component';
import { PoliticasComponent } from '@legal/pages/politicas/politicas.component';

const routes: Routes = [
  { path: 'politicas', component: PoliticasComponent},
  { path: 'condiciones', component: CondicionesComponent},
  { path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
