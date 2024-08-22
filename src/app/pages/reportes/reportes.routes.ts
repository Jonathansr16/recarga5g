import { Routes } from "@angular/router";

export const ReportesRoutes: Routes = [

    {
        path: 'reporte-pagaqui',
        loadComponent: () => import ('@reportes/pages/reporte-pagaqui/reporte-pagaqui.component')
    },

    {
        path: 'reporte-planetaemx',
        loadComponent: () => import('@reportes/pages/reporte-planetaemx/reporte-planetaemx.component')
    }
]