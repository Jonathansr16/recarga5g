import { Routes } from "@angular/router";

export const LegalRoutes: Routes = [
    {
        path: 'politicas',
        loadComponent: () => import('@legal/pages/politicas/politicas.component')
    },

    {
        path: 'condiciones',
        loadComponent: () => import('@legal/pages/condiciones/condiciones.component')
    }
]