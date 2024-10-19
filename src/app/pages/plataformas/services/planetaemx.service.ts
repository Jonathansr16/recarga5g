import { Injectable, signal } from '@angular/core';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetaemxService {

  #appPlanetaemx = signal<CarouselApp[]>([
    {
      id: 1,
      img: {
        lightUrl: 'assets/img/plataformas/planetaemx/app-recargaki_sesion.webp',
        alt: 'Inicio de sesión a recargaki'
      }
    },

    {
      id: 2,
      img: {
        lightUrl: 'assets/img/plataformas/planetaemx/app-recargaki_recargas.webp',
        alt: 'venta de recargas con recargaki'
      }
    },  

    {
      id: 3,
      img: {
        lightUrl: 'assets/img/plataformas/planetaemx/app-recargaki_servicios.webp',
        alt: 'cobro de servicios con recargaki'
      }
    },

    {
      id: 4,
      img: {
        lightUrl: 'assets/img/plataformas/planetaemx/app-recargaki_ventas.webp',
        alt: 'consulta de las ventas de recargas en recargaki'
      }
    },

    {
      id: 5,
      img: {
        lightUrl: 'assets/img/plataformas/planetaemx/app-recargaki_reporte.webp',
        alt: 'reporte de depósito recargaki'
      }
    }
  ]);

  getAppRecargaki(): CarouselApp[] {
    return this.#appPlanetaemx();
  }
}
