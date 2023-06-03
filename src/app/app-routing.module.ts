import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@inicio/pages/home/home.component';
import { RegistroComponent } from '@inicio/pages/registro/registro.component';
import { NofoundComponent } from '@core/components/nofound/nofound.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },

  {
    path: 'registro', component: RegistroComponent
  },


  {
    path: 'plataforma',
    loadChildren: () => import('@plataformas/plataformas.module').then(p => p.PlataformasModule)
  },

  //* CONSULTA
  {
    path: 'consulta',
    loadChildren: () => import('@consultas/consulta.module').then(c => c.ConsultaModule)
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
