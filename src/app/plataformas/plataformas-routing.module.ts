import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlataformasComponent } from './plataformas.component';

const routes: Routes = [{ path: '', component: PlataformasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformasRoutingModule { }
