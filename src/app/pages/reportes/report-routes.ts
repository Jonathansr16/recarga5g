import { Routes } from "@angular/router";

export const reportRoutes: Routes = [

    {
        path: 'pagaqui',
        loadComponent: () => import ('@reportes/pages/pagaqui/pagaqui.component')
    },

    {
        path: 'recargaki-planetaemx',
        loadComponent: () => import('@reportes/pages/recargaki-planetaemx/recargaki-planetaemx.component')
    }
]