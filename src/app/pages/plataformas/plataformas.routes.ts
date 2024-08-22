import { Routes } from "@angular/router";

export const PlataformasRoutes: Routes = [
    {
        path: 'plataforma-pagaqui',
        loadComponent: () => import('@plataformas/pages/plataforma-pagaqui/plataforma-pagaqui.component')
    },

    {
        path: 'plataforma-planetaemx',
        loadComponent: () => import('@plataformas/pages/plataforma-planetaemx/planetaemx.component')
    }
]