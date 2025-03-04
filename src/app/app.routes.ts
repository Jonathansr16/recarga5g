import { Routes } from "@angular/router";

export const routes: Routes = [
    
    {
        path: '',
        data: {
            title: 'Inicio',
            description: 'Bienvenido a Recarga5G, la mejor plataforma para realizar recargas electrónicas en México',
            keywords: 'Recargas electrónicas, Pago de servicios, Pines electrónicos, México'
        },
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
        path: 'productos',
        loadChildren: () => import('@productos/productos.routes').then ( (consultRoute) => consultRoute.consultaRoutes)
    },

    {
        path: 'notificar',
        loadChildren: () => import('@notificaciones/notificaciones-routes').then ( (reportRoute) => reportRoute.reportRoutes)
    },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },


]