import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from '@inicio/pages/portal/portal.component';
import { RegistroComponent } from '@inicio/pages/registro/registro.component';
import { NofoundComponent } from '@core/components/nofound/nofound.component';

const routes: Routes = [

  { path: '', component: PortalComponent },

  { path: 'home', component: PortalComponent },

  {
    path: 'registro', component: RegistroComponent
  },


  {
    path: 'plataforma',
    loadChildren: () => import('@plataformas/plataformas.module').then(p => p.PlataformasModule)
  },

  //CONSULTAS
  {
    path: 'consulta',
    loadChildren: () => import('@consultas/consultas.module').then(c => c.ConsultasModule)
  },
  // REPORTES
  {
    path: 'reporte',
    loadChildren: () => import('@reportes/reportes.module').then(c => c.ReportesModule)
  },
  //AYUDA
  {
    path: 'ayuda',
    loadChildren: () => import('@ayuda/ayuda.module').then(a => a.AyudaModule)
  },
  //LEGAL
  {
    path: 'legal',
    loadChildren: () => import('@legal/legal.module').then(l => l.LegalModule)
  },



  { path: '**', component: NofoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking', })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
