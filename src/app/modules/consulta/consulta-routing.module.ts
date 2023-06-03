
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { RecargasComponent } from "./recargas/recargas.component";
import { ServiciosComponent } from './servicios/servicios.component';
import { PinesComponent } from './pines/pines.component';

const consultaRoutes: Routes = [
    { path: 'recargas', component: RecargasComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'pines', component: PinesComponent }
];

@NgModule({

    imports: [RouterModule.forChild(consultaRoutes)],
    exports: [RouterModule]
  })
  export class ConsultaRoutingModule { }
  