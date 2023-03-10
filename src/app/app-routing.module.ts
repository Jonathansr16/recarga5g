import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from '@components/nopagesfound/nopagesfound.component';
//HOME
import { PortalComponent } from './inicio/portal/portal.component';
import { RegistroComponent } from './inicio/registro/registro.component';

const routes: Routes = [
   //INICIO
   {
    path:'',
    pathMatch:'full',
    redirectTo:'/portal'
  },

   { 
    path: 'portal', component: PortalComponent 
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


  { 
    path: 'registro', component: RegistroComponent 
  },
   { path: 'plataformas', loadChildren: () => import('./plataformas/plataformas.module').then(m => m.PlataformasModule) },
  //404 NO PAGE FOUND
    // { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking', })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
