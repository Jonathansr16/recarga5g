import { Routes } from "@angular/router";


export const consultaRoutes: Routes = [

    {
        path: 'recargas',
        loadComponent: () => import('@consultas/consulta-recargas/consulta-recargas.component')
    },

    {
        path: 'servicios',
        loadComponent: () => import('@consultas/servicios/servicios.component')
    },

    {
        path: 'pines',
        loadComponent: () => import('@consultas/pines/pines.component')
    }
];