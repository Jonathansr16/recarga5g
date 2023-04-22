import { Injectable } from '@angular/core';
import { productoModel } from '@core/models/productos.model';

@Injectable()
export class ProductosService {

  constructor() { }

  private recargas: productoModel[] = [

    {
      company: "Telcel",
      url: "assets/img/companies/recargas/telcel.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/telcel_kVD13NUDY.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243126771",
      label: "",
      category: "recargas"
    },

    {
      company: "Bait",
      url: "assets/img/companies/recargas/bait.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/bait_Rgr-qcj-Y.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243698589",
      label: "",
      category: "recargas"
    },

    {
      company: "Unefon",
      url: "assets/img/companies/recargas/unefon.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/unefon_tfAQvkPBO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243794294",
      label: "",
      category: "recargas"
    },

    {
      company: "AT&T ",
      url: "assets/img/companies/recargas/att.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/att_hQBM3hecT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243870883",
      label: "",
      category: "recargas"
    },

    {
      company: "Virgin Mobile",
      url: "assets/img/companies/recargas/virgin.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/virgin_eLmgdmvFe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243948656",
      label: "",
      category: "recargas"
    },

    {
      company: "Movistar",
      url: "assets/img/companies/recargas/movistar.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/movistar_M6nKcZa7gt.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244192688",
      label: "",
      category: "recargas"
    },


    {
      company: "Weex",
      url: "assets/img/companies/recargas/weex.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/weex_jZuIRcn0R.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244294658",
      label: "",
      category: "recargas"
    },


  ]

  private servicios: productoModel[] = [
    {
      company: "Telmex",
      url: "assets/img/companies/servicios/telmex.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/telmex_fBoqoRw84.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244442302",
      label: "",
      category: "servicios"
    },

    {
      company: "TotalPlay",
      url: "assets/img/companies/servicios/totalplay.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/totalplay_fT2dtq-50.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244672679",
      label: "",
      category: "servicios"
    },

    {
      company: "SKY",
      url: "assets/img/companies/servicios/sky.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/totalplay_fT2dtq-50.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244672679",
      label: "",
      category: "servicios"
    },

    {
      company: "IZZI",
      url: "assets/img/companies/servicios/izzi.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/totalplay_fT2dtq-50.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244672679",
      label: "",
      category: "servicios"
    },

    {
      company: "CFE",
      url: "assets/img/companies/servicios/cfe.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/cfe_p_N8hj90a.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244757583",
      label: "",
      category: "servicios"
    },

    {
      company: "Dish",
      url: "assets/img/companies/servicios/dish.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/dish_JGKq_BPKQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244975998",
      label: "",
      category: "servicios"
    },

    {
      company: "Televia",
      url: "assets/img/companies/servicios/televia.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/televia_CnsgtPWCw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245184277",
      label: "",
      category: "servicios"
    },

    {
      company: "Infonavit",
      url: "assets/img/companies/servicios/infonavit.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/televia_CnsgtPWCw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245184277",
      label: "",
      category: "servicios"
    },
    {
      company: "Avon",
      url: "assets/img/companies/servicios/avon.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/avon_DurMVpudI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245078838",
      label: "",
      category: "servicios"
    },

    {
      company: "Jafra",
      url: "assets/img/companies/servicios/jafra.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },


    {
      company: "Natura",
      url: "assets/img/companies/servicios/natura.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },


    {
      company: "Tupperware",
      url: "assets/img/companies/servicios/tupperware.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },

    {
      company: "Herbalife",
      url: "assets/img/companies/servicios/tupperware.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },

    {
      company: "Lebel",
      url: "assets/img/companies/servicios/lebel.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },

    {
      company: "fuller",
      url: "assets/img/companies/servicios/fuller.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },

    {
      company: "Belcorp",
      url: "assets/img/companies/servicios/belcorp.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740",
      label: "",
      category: "servicios"
    },


  ]

  private pines: productoModel[] = [

    {
      company: "Google Play",
      url: "assets/img/companies/pines/googleplay100.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/googleplay100_8bWBi13yo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245469629",
      label: '',
      category: "pines"
    },

    {
      company: "Spotify",
      url: "assets/img/companies/pines/spotify115.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/spotify115_LkoY88etj.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245540650",
      label: '',
      category: "pines"
    },

    {
      company: "Netflix",
      url: "assets/img/companies/pines/netflix.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/netflix_LULDh-3R_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245652319",
      label: '',
      category: "pines"
    },

    {
      company: "Steam",
      url: "assets/img/companies/pines/steam215.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/steam215_obOtAnwoS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245845580",
      label: '',
      category: "pines"
    },

    {
      company: "Cinepolis",
      url: "assets/img/companies/pines/cinepolis90.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/cinepolis90_yv53UuCLJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245957673",
      label: '',
      category: "pines"
    },

    {
      company: "Nintendo",
      url: "assets/img/companies/pines/nintendo.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/nintendo_g3VAGVm77.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246244512",
      label: '',
      category: "pines"
    },

    {
      company: "Amazon",
      url: "assets/img/companies/pines/amazon_gift300.png",
      src: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/amazon_gift100_I1U1InUsv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246394528",
      label: '',
      category: "pines"
    },


  ]


  private example2: any[] = [this.recargas, this.servicios, this.pines];

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

    let item: productoModel[] = [];

    for (let items of this.example2) {

      item = item.concat(items)
    }

    return item;

  }





}
