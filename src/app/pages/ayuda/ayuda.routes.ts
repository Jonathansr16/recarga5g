import { Routes } from "@angular/router";

export const ayudaRoutes: Routes = [

    {
        path: 'faqs', 
        loadComponent: () => import('@ayuda/pages/faqs/faqs.component')
    },

    {
        path: 'contacto',
        loadComponent: () => import('@ayuda/pages/contacto/contacto.component')
    },

    {
        path: 'blog',
        loadComponent: () => import('@ayuda/pages/blog/blog.component')
    }
]