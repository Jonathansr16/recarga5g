import { Injectable, signal } from '@angular/core';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';

@Injectable({
  providedIn: 'root'
})
export class PagaquiService {

  #appPagaqui = signal<CarouselApp[]>([
    {
      id: 1,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__sesion.webp',
        alt: 'Inicio de sesión a sistema de recargas',
      },
    },

    {
      id: 2,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__home.webp',
        alt: 'Pantalla principal',
      },
    },

    {
      id: 3,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__servicios.webp',
        alt: 'Sistema para pago de servicios',
      },
    },

    {
      id: 4,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__pines.webp',
        alt: 'Sistema para venta de tarjetas de regalo',
      },
    },
  ]);


  getAppPagaqui():CarouselApp[] {
    return this.#appPagaqui();
  }
}
