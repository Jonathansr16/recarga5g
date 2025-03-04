import { Routes } from "@angular/router";

export const reportRoutes: Routes = [

    {
        path: 'compras-pagaqui',
        loadComponent: () => import ('@notificaciones/pages/compras-pagaqui/compras-pagaqui.component')
    },

    {
        path: 'compras-planetaemx-recargaki',
        loadComponent: () => import('@notificaciones/pages/compras-planetaemx/compras-planetaemx.component')
    }
]