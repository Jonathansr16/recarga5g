import { Injectable, signal } from '@angular/core';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCarouselService {
  constructor() {}

  #recargas = signal<ProductCarousel[]>([
    {
      id: 1,
      company: 'telcel',
      typeService: 'Recargas',
      img: {
        id: 1,
        src: '/assets/img/companies/recargas/telcel.png',
        alt: 'Venta de recargas Telcel',
      },
    },

    {
      id: 2,
      company: 'Bait',
      typeService: 'Recargas',
      img: {
        id: 2,
        src: '/assets/img/companies/recargas/bait.png',
        alt: 'venta de recargas Bait',
      },
    },

    {
      id: 3,
      company: 'Unefon',
      typeService: 'Recargas',
      img: {
        id: 3,
        src: '/assets/img/companies/recargas/unefon.png',
        alt: 'venta de recargas unefon',
      },
    },

    {
      id: 4,
      company: 'AT&T',
      typeService: 'Recargas',
      img: {
        id: 4,
        src: '/assets/img/companies/recargas/att.png',
        alt: 'venta de recargas AT&T',
      },
    },

    {
      id: 5,
      company: 'Virgin Mobile',
      typeService: 'Recargas',
      img: {
        id: 5,
        src: '/assets/img/companies/recargas/virgin.png',
        alt: 'venta de recargas Virgin',
      },
    },

    {
      id: 6,
      company: 'Movistar',
      typeService: 'Recargas',
      img: {
        id: 6,
        src: '/assets/img/companies/recargas/movistar.png',
        alt: 'venta de recargas Movistar',
      },
    },

    {
      id: 7,
      company: 'Week',
      typeService: 'Recargas',
      img: {
        id: 7,
        src: '/assets/img/companies/recargas/weex.png',
        alt: 'venta de recargas Week',
      },
    },

    {
      id: 8,
      company: 'Gugacom',
      typeService: 'Recargas',
      img: {
        id: 8,
        src: '/assets/img/companies/recargas/gugacom.png',
        alt: '',
      },
    },

    {
      id: 9,
      company: 'Wimotelecom',
      typeService: 'Recargas',
      img: {
        id: 9,
        src: '/assets/img/companies/recargas/wimotelecom.png',
        alt: 'Venta de recargas Wimotelecom',
      },
    },

    {
      id: 10,
      company: 'OUI',
      typeService: 'Recargas',
      img: {
        id: 10,
        src: '/assets/img/companies/recargas/oui.png',
        alt: 'Venta de recargas Oui',
      },
    },

    {
      id: 11,
      company: 'simpaty',
      typeService: 'Recargas',
      img: {
        id: 11,
        src: '/assets/img/companies/recargas/simpati.png',
        alt: 'Venta de recargas Simpaty',
      },
    },

    {
      id: 12,
      company: 'FlashMobile',
      typeService: 'Recargas',
      img: {
        id: 12,
        src: '/assets/img/companies/recargas/flashmobile.png',
        alt: 'Venta de recargas FlashMobile',
      },
    },
  ]);

  #servicios = signal<ProductCarousel[]>([
    {
      id: 100,
      company: 'Telmex',
      typeService: 'Servicios',
      img: {
        id: 100,
        src: '/assets/img/companies/servicios/telmex.png',
        alt: 'Pago de servicio Telmex',
      },
    },

    {
      id: 101,
      company: 'TotalPlay',
      typeService: 'Servicios',
      img: {
        id: 101,
        src: '/assets/img/companies/servicios/totalplay.png',
        alt: 'Compañia para cobro de servicio Total Play',
      },
    },

    {
      id: 102,
      company: 'Sky',
      typeService: 'Servicios',
      img: {
        id: 102,
        src: '/assets/img/companies/servicios/sky.png',
        alt: 'Pago de servicio Sky',
      },
    },

    {
      id: 103,
      company: 'IZZI',
      typeService: 'Servicios',
      img: {
        id: 103,
        src: '/assets/img/companies/servicios/izzi.png',
        alt: 'Pago de servicios IZZI',
      },
    },

    {
      id: 104,
      company: 'CFE',
      typeService: 'Servicios',
      img: {
        id: 104,
        src: '/assets/img/companies/servicios/cfe.png',
        alt: 'Pago de servicios CFE',
      },
    },

    {
      id: 105,
      company: 'Dish',
      typeService: 'Servicios',
      img: {
        id: 105,
        src: '/assets/img/companies/servicios/dish.png',
        alt: 'Pago de servicios Dish',
      },
    },

    {
      id: 106,
      company: 'Infonavit',
      typeService: 'Servicios',
      img: {
        id: 106,
        src: '/assets/img/companies/servicios/infonavit.png',
        alt: 'Pago de servicios Infonavit',
      },
    },

    {
      id: 107,
      company: 'Avon',
      typeService: 'Servicios',
      img: {
        id: 107,
        src: '/assets/img/companies/servicios/avon.png',
        alt: 'Pago de servicios Avon',
      },
    },

    {
      id: 108,
      company: 'Jafra',
      typeService: 'Servicios',
      img: {
        id: 108,
        src: '/assets/img/companies/servicios/jafra.png',
        alt: 'Pago de servicios Jafra',
      },
    },

    {
      id: 109,
      company: 'Tupperware',
      typeService: 'Servicios',
      img: {
        id: 109,
        src: '/assets/img/companies/servicios/tupperware.png',
        alt: 'Pago de servicios Tupperware',
      },
    },

    {
      id: 110,
      company: 'Gas natural',
      typeService: 'Servicios',
      img: {
        id: 110,
        src: '/assets/img/companies/servicios/gas_natural.png',
        alt: 'Pago de servicios gas natural',
      },
    },

    {
      id: 111,
      company: 'Televia',
      typeService: 'Servicios',
      img: {
        id: 111,
        src: '/assets/img/companies/servicios/televia.png',
        alt: 'Pago de servicios televia',
      },
    },

    {
      id: 112,
      company: 'Lebel',
      typeService: 'Servicios',
      img: {
        id: 112,
        src: '/assets/img/companies/servicios/lebel.png',
        alt: 'Pago de servicios Lebel',
      },
    },
  ]);

  #pines = signal<ProductCarousel[]>([
    {
      id: 200,
      company: 'Google Play',
      typeService: 'Pines',
      img: {
        id: 200,
        src: '/assets/img/companies/pines/googleplay100.png',
        alt: 'Venta de pines google play',
      },
    },

    {
      id: 201,
      company: 'Spotify',
      typeService: 'Pines',
      img: {
        id: 201,
        src: '/assets/img/companies/pines/spotify115.png',
        alt: 'Venta de pines spotify',
      },
    },

    {
      id: 202,
      company: 'Netflix',
      typeService: 'Pines',
      img: {
        id: 202,
        src: '/assets/img/companies/pines/netflix.png',
        alt: 'Venta de pines Netflix',
      },
    },

    {
      id: 203,
      company: 'Steam',
      typeService: 'Pines',
      img: {
        id: 203,
        src: '/assets/img/companies/pines/steam215.png',
        alt: 'Venta de pines Steam',
      },
    },

    {
      id: 204,
      company: 'Cinepolis',
      typeService: 'Pines',
      img: {
        id: 204,
        src: '/assets/img/companies/pines/cinepolis_vip.png',
        alt: 'Venta de pines Cinepolis',
      },
    },

    {
      id: 205,
      company: 'Nintendo',
      typeService: 'Pines',
      img: {
        id: 205,
        src: '/assets/img/companies/pines/nintendo.png',
        alt: 'venta de pines Nintendo',
      },
    },

    {
      id: 206,
      company: 'Amazon',
      typeService: 'Pines',
      img: {
        id: 206,
        src: '/assets/img/companies/pines/amazon_gift300.png',
        alt: 'Venta de pines Amazon',
      },
    },

    {
      id: 207,
      company: 'Starbuck',
      typeService: 'Pines',
      img: {
        id: 207,
        src: '/assets/img/companies/pines/starbucks_card200.png',
        alt: 'Venta de pines Starbuck',
      },
    },

    {
      id: 208,
      company: 'Free Fire',
      typeService: 'Pines',
      img: {
        id: 208,
        src: '/assets/img/companies/pines/amazon_gift300.png',
        alt: 'Venta de pines Free Fire',
      },
    },

    {
      id: 209,
      company: 'Microsoft 365 Empresas',
      typeService: 'Pines',
      img: {
        id: 209,
        src: '/assets/img/companies/pines/microsoft365empresa3949.png',
        alt: 'Venta de pines Microsoft 365 Empresas',
      },
    },

    {
      id: 210,
      company: 'Roblox',
      typeService: 'Pines',
      img: {
        id: 210,
        src: '/assets/img/companies/pines/roblox200.png',
        alt: 'Venta de pines Roblox',
      },
    },

    {
      id: 211,
      company: 'Uber eats',
      typeService: 'Pines',
      img: {
        id: 211,
        src: '/assets/img/companies/pines/uber_eats300.png',
        alt: 'Venta de pines Uber Eats',
      },
    },

    {
      id: 212,
      company: 'Cinemex',
      typeService: 'Pines',
      img: {
        id: 212,
        src: '/assets/img/companies/pines/cinemex120.png',
        alt: 'Venta de pines Cinemex',
      },
    },
  ]);

  #carosuel = signal<ProductCarousel[]>([
    ...this.#recargas(),
    ...this.#servicios(), 
  ]);

  #allProducts = signal<ProductCarousel[]>([
    ...this.#recargas(),
    ...this.#servicios(),
    ...this.#pines()
  ]);

  getRecargas(): ProductCarousel[] {
    return this.#recargas();
  }

  getServicios(): ProductCarousel[] {
    return this.#servicios();
  }

  getPines(): ProductCarousel[] {
    return this.#pines();
  }


  getProductCarousel(): ProductCarousel[] {
    	return this.#carosuel()
  }

  getAllProducts(): ProductCarousel[] {
    return this.#allProducts();
  }
}
