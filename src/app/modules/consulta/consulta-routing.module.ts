
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { RecargasComponent } from "./recargas/recargas.component";
import { ServiciosComponent } from './servicios/servicios.component';
import { PinesComponent } from './pines/pines.component';
import { NofoundComponent } from '@core/components/nofound/nofound.component';

const consultaRoutes: Routes = [
    { path: 'recargas', component: RecargasComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'pines', component: PinesComponent },
    { path: '**', component: NofoundComponent}
];

@NgModule({

    imports: [RouterModule.forChild(consultaRoutes)],
    exports: [RouterModule]
  })
  export class ConsultaRoutingModule { }
  