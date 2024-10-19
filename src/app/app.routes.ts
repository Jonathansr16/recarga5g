import { Routes } from "@angular/router";

export const routes: Routes = [
    
 
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component')
    },


    {
        path: 'registro',
        loadComponent: () => import('./pages/registro/registro.component')
    },

    {
        path: 'plataformas',
        loadChildren: () => import('@plataformas/plataformas.routes').then( (r) => r.PlataformasRoutes)
    },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },


]