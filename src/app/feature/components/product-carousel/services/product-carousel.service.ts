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
      company: 'Telcel',
      typeService: 'Recargas',
      img: {
        id: 1,
        src: '/assets/img/companies/recargas/telcel.webp',
        alt: 'Venta de recargas Telcel',
      },
      siteweb: 'https://www.telcel.com/'
    },

    {
      id: 2,
      company: 'Bait',
      typeService: 'Recargas',
      img: {
        id: 2,
        src: '/assets/img/companies/recargas/bait.webp',
        alt: 'venta de recargas Bait',
      },
      siteweb: 'https://mibait.com/'
    },

    {
      id: 3,
      company: 'Unefon',
      typeService: 'Recargas',
      img: {
        id: 3,
        src: '/assets/img/companies/recargas/unefon.webp',
        alt: 'venta de recargas unefon',
      },
      siteweb: 'https://unefon.com.mx/'
    },

    {
      id: 4,
      company: 'AT&T',
      typeService: 'Recargas',
      img: {
        id: 4,
        src: '/assets/img/companies/recargas/att.webp',
        alt: 'venta de recargas AT&T',
      },
      siteweb: 'https://www.att.com.mx/'
    },

    {
      id: 5,
      company: 'Virgin Mobile',
      typeService: 'Recargas',
      img: {
        id: 5,
        src: '/assets/img/companies/recargas/virgin.webp',
        alt: 'venta de recargas Virgin',
      },
      siteweb: 'https://virginmobile.mx/'
    },

    {
      id: 6,
      company: 'Movistar',
      typeService: 'Recargas',
      img: {
        id: 6,
        src: '/assets/img/companies/recargas/movistar.webp',
        alt: 'venta de recargas Movistar',
      },
      siteweb: 'https://www.movistar.com.mx/'
    },

    {
      id: 7,
      company: 'Weex',
      typeService: 'Recargas',
      img: {
        id: 7,
        src: '/assets/img/companies/recargas/weex.webp',
        alt: 'venta de recargas Weex',
      },
      siteweb: 'https://weex.mx/'
    },

    {
      id: 8,
      company: 'Gugacom',
      typeService: 'Recargas',
      img: {
        id: 8,
        src: '/assets/img/companies/recargas/gugacom.webp',
        alt: 'https://queplan.mx/gugacom',
      },
    },

    {
      id: 9,
      company: 'Wimotelecom',
      typeService: 'Recargas',
      img: {
        id: 9,
        src: '/assets/img/companies/recargas/wimotelecom.webp',
        alt: 'Venta de recargas Wimotelecom',
      },
      siteweb:'https://www.wimotelecom.com/'
    },

    {
      id: 10,
      company: 'OUI',
      typeService: 'Recargas',
      img: {
        id: 10,
        src: '/assets/img/companies/recargas/oui.webp',
        alt: 'Venta de recargas Oui',
      },
      siteweb: 'https://ouimovil.com/'
    },

    {
      id: 11,
      company: 'Internet del bienestar',
      typeService: 'Recargas',
      img: {
        id: 11,
        src: '/assets/img/companies/recargas/internetparaelbienestar.webp',
        alt: 'Venta de recargas Internet para el Bienestar',
      },
      siteweb: 'https://internetparaelbienestar.mx/'
    },

    {
      id: 12,
      company: 'Flash Mobile MX',
      typeService: 'Recargas',
      img: {
        id: 12,
        src: '/assets/img/companies/recargas/flashmobile.webp',
        alt: 'Venta de recargas Flash Mobile Mx',
      },
      siteweb: 'https://www.miflashmobile.mx/homepage'
    },
    {
      id: 13,
      company: 'ABIB',
      typeService: 'Recargas',
      img: {
        id: 12,
        src: '/assets/img/companies/recargas/abib.webp',
        alt: 'Venta de recargas ABIB',
      },
      siteweb: 'https://abib.com.mx/#/inicio'
    },
  
  ]);

  #servicios = signal<ProductCarousel[]>([
    {
      id: 100,
      company: 'Telmex',
      typeService: 'Servicios',
      img: {
        id: 100,
        src: '/assets/img/companies/servicios/telmex.webp',
        alt: 'Pago de servicio Telmex',
      },
      siteweb: 'https://telmex.com/'
    },

    {
      id: 101,
      company: 'TotalPlay',
      typeService: 'Servicios',
      img: {
        id: 101,
        src: '/assets/img/companies/servicios/totalplay.webp',
        alt: 'Compañia para cobro de servicio Total Play',
      },
      siteweb: 'https://www.totalplay.com.mx/'
    },

    {
      id: 102,
      company: 'Sky',
      typeService: 'Servicios',
      img: {
        id: 102,
        src: '/assets/img/companies/servicios/sky.webp',
        alt: 'Pago de servicio Sky',
      },
      siteweb: 'https://www.sky.com.mx/'
    },

    {
      id: 103,
      company: 'IZZI',
      typeService: 'Servicios',
      img: {
        id: 103,
        src: '/assets/img/companies/servicios/izzi.webp',
        alt: 'Pago de servicios IZZI',
      },
      siteweb: 'https://www.izzi.mx/home'
    },

    {
      id: 104,
      company: 'CFE',
      typeService: 'Servicios',
      img: {
        id: 104,
        src: '/assets/img/companies/servicios/cfe.webp',
        alt: 'Pago de servicios CFE',
      },
      siteweb: 'https://www.cfe.mx/Pages/default.aspx'
    },

    {
      id: 105,
      company: 'Dish',
      typeService: 'Servicios',
      img: {
        id: 105,
        src: '/assets/img/companies/servicios/dish.webp',
        alt: 'Pago de servicios Dish',
      },
      siteweb: 'https://www.dish.com.mx/'
    },

    {
      id: 106,
      company: 'Infonavit',
      typeService: 'Servicios',
      img: {
        id: 106,
        src: '/assets/img/companies/servicios/infonavit.webp',
        alt: 'Pago de servicios Infonavit',
      },
      siteweb: 'https://micuenta.infonavit.org.mx/'
    },

    {
      id: 107,
      company: 'Avon',
      typeService: 'Servicios',
      img: {
        id: 107,
        src: '/assets/img/companies/servicios/avon.webp',
        alt: 'Pago de servicios Avon',
      },
      siteweb: 'https://www.mx.avon.com/REPSuite/loginMain.page'
    },

    {
      id: 108,
      company: 'Jafra',
      typeService: 'Servicios',
      img: {
        id: 108,
        src: '/assets/img/companies/servicios/jafra.webp',
        alt: 'Pago de servicios Jafra',
      },
      siteweb: 'https://www.jafra.com.mx/'
    },

    {
      id: 109,
      company: 'Tupperware',
      typeService: 'Servicios',
      img: {
        id: 109,
        src: '/assets/img/companies/servicios/tupperware.webp',
        alt: 'Pago de servicios Tupperware',
      },
      siteweb: 'https://www.tupperware.com.mx/'
    },

    {
      id: 110,
      company: 'Gas natural Natury',
      typeService: 'Servicios',
      img: {
        id: 110,
        src: '/assets/img/companies/servicios/gas_natural.webp',
        alt: 'Pago de servicios gas natural Natury',
      },
      siteweb: 'https://www.naturgy.com.mx/'
    },

    {
      id: 111,
      company: 'Televia',
      typeService: 'Servicios',
      img: {
        id: 111,
        src: '/assets/img/companies/servicios/televia.webp',
        alt: 'Pago de servicios televia',
      },
      siteweb: 'https://www.televia.com.mx/'
    },

    {
      id: 112,
      company: 'Lbel',
      typeService: 'Servicios',
      img: {
        id: 112,
        src: '/assets/img/companies/servicios/lebel.webp',
        alt: 'Pago de servicios Lbel',
      },
      siteweb: 'https://lbel.tiendabelcorp.com.mx/'
    },

    {
      id: 113,
      company: 'Elektra',
      typeService: 'Servicios',
      img: {
        id: 113,
        src: '/assets/img/companies/servicios/elektraabonossemanales.webp',
        alt: 'Pago de servicios Elektra',
      },
      siteweb: 'https://www.elektra.mx/'
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
      siteweb: 'https://play.google.com/store/games?hl=es_MX'
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
      siteweb: 'https://open.spotify.com/intl-es'
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
      siteweb: 'https://www.netflix.com/mx/'
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
      siteweb: 'https://store.steampowered.com/?l=spanish'
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
      siteweb: 'https://store.steampowered.com/?l=spanish'
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
      siteweb: 'https://www.nintendo.com/es-mx/'
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
      siteweb: 'https://www.amazon.com.mx/'
    },

    {
      id: 207,
      company: 'STARBUCKS',
      typeService: 'Pines',
      img: {
        id: 207,
        src: '/assets/img/companies/pines/starbucks_card200.png',
        alt: 'Venta de pines STARBUCKS',
      },
      siteweb: 'https://www.starbucks.com.mx/'
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
      siteweb: 'https://play.google.com/store/apps/details?id=com.dts.freefiremax&hl=es_MX'
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
      siteweb: 'https://www.microsoft.com/es-mx/microsoft-365/business'
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
      siteweb: 'https://www.roblox.com/es'
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
      siteweb: 'https://www.ubereats.com/mx'
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
      siteweb: 'https://www.cimex.com.mx/es/'
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
