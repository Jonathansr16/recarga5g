import { Injectable } from '@angular/core';
import {  productoModel } from '@core/models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  visibleImage = [];

  private recargas: productoModel[] = [

    {
      item: [
        {
          company: "Telcel",
          url: "/assets/img/companies/recargas/telcel.png",
          label: "Compañia para venta de recargas Telcel",
          category: "recargas"
        },
    
        {
          company: "Bait",
          url: "/assets/img/companies/recargas/bait.png",
          label: "Compañia para venta de recargas Bait",
          category: "recargas"
        },
    
        {
          company: "Unefon",
          url: "/assets/img/companies/recargas/unefon.png",
          label: "Compañia para venta de recargas Unefon",
          category: "recargas"
        },
    
        {
          company: "AT&T ",
          url: "/assets/img/companies/recargas/att.png",
          label: "Compañia para venta de recargas AT&T",
          category: "recargas"
        },
    
        {
          company: "Virgin Mobile",
          url: "/assets/img/companies/recargas/virgin.png",
          label: "Compañia para venta de recargas Virgin Mobile",
          category: "recargas"
        },
    
        {
          company: "Movistar",
          url: "/assets/img/companies/recargas/movistar.png",
          label: "Compañia para venta de recargas Movistar",
          category: "recargas"
        },
    
    
        {
          company: "Weex",
          url: "/assets/img/companies/recargas/weex.png",
          label: "Compañia para venta de recargas Weex",
          category: "recargas"
        },

        {
          company: "Gugacom",
          url: "/assets/img/companies/recargas/gugacom.png",
          label: "Compañia para venta de recargas gugacom.",
          category: "recargas"
        },

        {
          company: "wimotelecom",
          url: "/assets/img/companies/recargas/wimotelecom.png",
          label: "Compañia para venta de recargas wimotelecom",
          category: "recargas"
        },

        {
          company: "oui",
          url: "/assets/img/companies/recargas/oui.png",
          label: "Compañia para venta de recargas OUI",
          category: "recargas"
        },

        {
          company: "simpati",
          url: "/assets/img/companies/recargas/simpati.png",
          label: "Compañia para venta de recargas Simpati",
          category: "recargas"
        },

        {
          company: "flashmobile",
          url: "/assets/img/companies/recargas/flashmobile.png",
          label: "Compañia para venta de recargas Flashmobile",
          category: "recargas"
        },
    
      ]
    }
  ]

  private servicios: productoModel[] = [
  
    {
      item: [
        {
          company: "Telmex",
          url: "/assets/img/companies/servicios/telmex.png",
          label: "Compañia para cobro de servicio Telmex",
          category: "servicios"
        },
    
        {
          company: "TotalPlay",
          url: "/assets/img/companies/servicios/totalplay.png",
          label: "Compañia para cobro de servicio Total Play",
          category: "servicios"
        },
    
        {
          company: "SKY",
          url: "/assets/img/companies/servicios/sky.png",
          label: "Compañia para cobro de servicio SKY",
          category: "servicios"
        },
    
        {
          company: "IZZI",
          url: "/assets/img/companies/servicios/izzi.png",
          label: "Compañia para cobro de servicio Izzi",
          category: "servicios"
        },
    
        {
          company: "CFE",
          url: "/assets/img/companies/servicios/cfe.png",
          label: "Compañia para cobro de servicio CFE",
          category: "servicios"
        },
    
        {
          company: "Dish",
          url: "/assets/img/companies/servicios/dish.png",
          label: "Compañia para cobro de servicio Dish",
          category: "servicios"
        },
    
        {
          company: "Televia",
          url: "/assets/img/companies/servicios/televia.png",
          label: "Compañia para cobro de servicio Televia",
          category: "servicios"
        },
    
        {
          company: "Infonavit",
          url: "/assets/img/companies/servicios/infonavit.png",
          label: "Compañia para cobro de servicio Infonavit",
          category: "servicios"
        },
        {
          company: "Avon",
          url: "/assets/img/companies/servicios/avon.png",
          label: "Compañia para cobro de servicio Avon",
          category: "servicios"
        },
    
        {
          company: "Jafra",
          url: "/assets/img/companies/servicios/jafra.png",
          label: "Compañia para cobro de servicio Jafra",
          category: "servicios"
        },
    
        {
          company: "Natura",
          url: "/assets/img/companies/servicios/natura.png",
          label: "Compañia para cobro de servicio Natura",
          category: "servicios"
        },
    
    
        {
          company: "Tupperware",
          url: "/assets/img/companies/servicios/tupperware.png",
          label: "Compañia para cobro de servicio Tupperware",
          category: "servicios"
        },
    
        {
          company: "Herbalife",
          url: "/assets/img/companies/servicios/herbalife.png",
          label: "Compañia para cobro de servicio Herbalife",
          category: "servicios"
        },
    
        {
          company: "Lebel",
          url: "/assets/img/companies/servicios/lebel.png",
          label: "Compañia para cobro de servicio Lebel",
          category: "servicios"
        },
    
        {
          company: "fuller",
          url: "/assets/img/companies/servicios/fuller.png",
          label: "Compañia para cobro de servicio Fuller",
          category: "servicios"
        },
    
        {
          company: "Belcorp",
          url: "/assets/img/companies/servicios/belcorp.png",
          label: "Compañia para cobro de servicio Belcorp",
          category: "servicios"
        },

        {
          company: "arabela",
          url: "/assets/img/companies/servicios/arabela.png",
          label: "Compañia para cobro de servicio Arabela",
          category: "servicios"
        },

        {
          company: "cablemas",
          url: "/assets/img/companies/servicios/cablemas.png",
          label: "Compañia para cobro de servicio cablemas",
          category: "servicios"
        },

        {
          company: "gas natural",
          url: "/assets/img/companies/servicios/gas_natural.png",
          label: "Compañia para cobro de servicio gas natural",
          category: "servicios"
        },

        {
          company: "stanhome",
          url: "/assets/img/companies/servicios/stanhome.png",
          label: "Compañia para cobro de servicio stanhome",
          category: "servicios"
        },

        {
          company: "swissjust",
          url: "/assets/img/companies/servicios/swissjust.png",
          label: "Compañia para cobro de servicio swissjust",
          category: "servicios"
        },
      ]
    }
  ];

  private pines: productoModel[] = [

    {
      item: [
        {
          company: "Google Play",
          url: "/assets/img/companies/pines/googleplay100.png",
          label: 'Compañia para venta de tarjetas de regalo Google Play',
          category: "pines"
        },
    
        {
          company: "Spotify",
          url: "/assets/img/companies/pines/spotify115.png",
          label: 'Compañia para venta de tarjetas de regalo Spotify',
          category: "pines"
        },
    
        {
          company: "Netflix",
          url: "/assets/img/companies/pines/netflix.png",
          label: 'Compañia para venta de tarjetas de regalo Netflix',
          category: "pines"
        },
    
        {
          company: "Steam",
          url: "/assets/img/companies/pines/steam215.png",
          label: 'Compañia para venta de tarjetas de regalo Steam',
          category: "pines"
        },
    
        {
          company: "Cinepolis",
          url: "/assets/img/companies/pines/cinepolis_vip.png",
          label: 'Compañia para venta de tarjetas de regalo Cinepolis',
          category: "pines"
        },
    
        {
          company: "Nintendo",
          url: "/assets/img/companies/pines/nintendo.png",
          label: 'Compañia para venta de tarjetas de regalo Nintendo',
          category: "pines"
        },
    
        {
          company: "Amazon",
          url: "/assets/img/companies/pines/amazon_gift300.png",
          label: 'Compañia para venta de tarjetas de regalo Amazon',
          category: "pines"
        },

        {
          company: "Starbuck",
          url: "/assets/img/companies/pines/starbucks_card200.png",
          label: 'Compañia para venta de tarjetas de regalo Starbuck',
          category: "pines"
        },

        {
          company: "Rixty",
          url: "/assets/img/companies/pines/rixty600.png",
          label: 'Compañia para venta de tarjetas de regalo Rixty',
          category: "pines"
        },

        {
          company: "Paramount",
          url: "/assets/img/companies/pines/paramount109.png",
          label: 'Compañia para venta de tarjetas de regalo Paramount',
          category: "pines"
        },
      ]
    }


  ];

  private listProductos: any[] = [this.recargas[0].item, this.servicios[0].item, this.pines[0].item].flat();

  private listRecargasServicios: any[] = [this.recargas[0].item, this.servicios[0].item].flat();

  private productos: productoModel[] = [
    {
     item: this.listProductos
    }
  ];

  private recargasServicios: productoModel[] = [

    {
      item: this.listRecargasServicios
    }
  ]


  getRecargas(): productoModel[] {
    return this.recargas;
  }

  getServicios(): productoModel[] {
    return this.servicios;
  }

  getPines(): productoModel[] {
    return this.pines;
  }

  getProductos(): productoModel[] {


  return this.productos
  }

  getRecargasServicios(): productoModel[] {
    return this.recargasServicios;
  }




}
