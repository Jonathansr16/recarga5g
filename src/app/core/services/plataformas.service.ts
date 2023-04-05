import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlataformasService {

  constructor() { }

  private servicesArray: services[] = [

    {
      title: "TELCEL",
      url: "/assets/img/icon-companies/telcel.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/telcel_kVD13NUDY.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243126771"
    },

    {
      title: "AT&T",
      url: "/assets/img/icon-companies/att.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/att_hQBM3hecT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243870883"
    },

    {
      title: "UNEFON",
      url: "/assets/img/icon-companies/unefon.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/unefon_tfAQvkPBO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243794294"
    },

    {
      title: "BAIT",
      url: "/assets/img/icon-companies/bait.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/bait_Rgr-qcj-Y.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243698589"
    },

    {
      title: "MOVISTAR",
      url: "/assets/img/icon-companies/movistar.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/movistar_M6nKcZa7gt.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244192688"
    },

    {
      title: "VIRGIN",
      url: "/assets/img/icon-companies/virgin.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/virgin_eLmgdmvFe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243948656"
    },

    {
      title: "TELMEX",
      url: "/assets/img/icon-companies/telmex.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/telmex_fBoqoRw84.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244442302"
    },

    {
      title: "TOTALPLAY",
      url: "/assets/img/icon-companies/totalplay.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/totalplay_fT2dtq-50.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244672679"
    },

    {
      title: "IZZI",
      url: "/assets/img/icon-companies/izzi.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/izzi_l6G0UjaNJt.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667249688561"
    },

    {
      title: "CFE",
      url: "/assets/img/icon-companies/cfe.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/cfe_p_N8hj90a.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244757583"
    },

    {
      title: "TELEVIA",
      url: "/assets/img/icon-companies/televia.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/televia_CnsgtPWCw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245184277"
    },

    {
      title: "MEGACABLE",
      url: "/assets/img/icon-companies/megacable.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/megacable_itIgrb-f5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667249957169"
    },

    {
      title: "MOVISTAR",
      url: "/assets/img/icon-companies/movistar.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/movistar_M6nKcZa7gt.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244192688"
    },

    {
      title: "GOOGLE PLAY",
      url: "/assets/img/icon-companies/googleplay100.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/googleplay100_8bWBi13yo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245469629"
    },

    {
      title: "SPOTIFY",
      url: "/assets/img/icon-companies/spotify115.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/spotify115_LkoY88etj.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245540650"
    },

    {
      title: "AMAZON",
      url: "/assets/img/icon-companies/amazon_gift100.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/amazon_gift100_I1U1InUsv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246394528"
    },


    {
      title: "CINEPOLIS",
      url: "/assets/img/icon-companies/cinepolis90.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/cinepolis90_yv53UuCLJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245957673"
    },


    {
      title: "STEAM",
      url: "/assets/img/icon-companies/steam215.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/steam215_obOtAnwoS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245845580"
    },

    {
      title: "BLIM",
      url: "/assets/img/icon-companies/blim109.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/blim109_fRympDhVL.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246080871"
    },

    {
      title: "OUI",
      url: "/assets/img/icon-companies/oui.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/oui_xbpKGo8LC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667250402604"
    }


  ]

  private recargas: productos[] = [

    {
      company: "Telcel",
      url: "assets/img/icon-companies/telcel.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/telcel_kVD13NUDY.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243126771"
    },

    {
      company: "Bait",
      url: "assets/img/icon-companies/bait.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/bait_Rgr-qcj-Y.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243698589"
    },

    {
      company: "Unefon",
      url: "assets/img/icon-companies/unefon.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/unefon_tfAQvkPBO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243794294"
    },

    {
      company: "AT&T ",
      url: "assets/img/icon-companies/att.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/att_hQBM3hecT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243870883"
    },

    {
      company: "Virgin Mobile",
      url: "assets/img/icon-companies/virgin.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/virgin_eLmgdmvFe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667243948656"
    },

    {
      company: "Movistar",
      url: "assets/img/icon-companies/movistar.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/movistar_M6nKcZa7gt.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244192688"
    },


    {
      company: "Weex",
      url: "assets/img/icon-companies/weex.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/weex_jZuIRcn0R.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244294658"
    },
  ]

  private servicios: productos[] = [
    {
      company: "Telmex",
      url: "assets/img/icon-companies/telmex.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/telmex_fBoqoRw84.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244442302"
    },

    {
      company: "TotalPlay",
      url: "assets/img/icon-companies/totalplay.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/totalplay_fT2dtq-50.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244672679"
    },

    {
      company: "CFE",
      url: "assets/img/icon-companies/cfe.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/cfe_p_N8hj90a.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244757583"
    },

    {
      company: "Dish",
      url: "assets/img/icon-companies/dish.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/dish_JGKq_BPKQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667244975998"
    },

    {
      company: "Avon",
      url: "assets/img/icon-companies/avon.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/avon_DurMVpudI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245078838"
    },

    {
      company: "Televia",
      url: "assets/img/icon-companies/televia.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/televia_CnsgtPWCw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245184277"
    },

    {
      company: "Tupperware",
      url: "assets/img/icon-companies/tupperware.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/tupperware_BUpr7a7Ts.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245355740"
    },

  ]

  private pines: productos[] = [

    {
      company: "Google Play",
      url: "assets/img/icon-companies/googleplay100.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/googleplay100_8bWBi13yo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245469629"
    },

    {
      company: "Spotify",
      url: "assets/img/icon-companies/spotify115.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/spotify115_LkoY88etj.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245540650"
    },

    {
      company: "Netflix",
      url: "assets/img/icon-companies/netflix.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/netflix_LULDh-3R_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245652319"
    },

    {
      company: "Steam",
      url: "assets/img/icon-companies/steam215.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/steam215_obOtAnwoS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245845580"
    },

    {
      company: "Cinepolis",
      url: "assets/img/icon-companies/cinepolis90.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/cinepolis90_yv53UuCLJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667245957673"
    },

    {
      company: "Blim",
      url: "assets/img/icon-companies/blim109.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/blim109_fRympDhVL.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246080871"
    },
    {
      company: "Nintendo",
      url: "assets/img/icon-companies/nintendo.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/nintendo_g3VAGVm77.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246244512"
    },

    {
      company: "Amazon",
      url: "assets/img/icon-companies/amazon_gift100.png",
      srcset: "https://ik.imagekit.io/taerecargas/Recargas/Icon-companies/amazon_gift100_I1U1InUsv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667246394528"
    },

  ]

  getServices(): services[] {
    return this.servicesArray;
  }

  getRecargas(): productos[] {
    return this.recargas;
  }

  getServicios(): productos[] {
    return this.servicios;
  }

  getPines(): productos[] {
    return this.pines;
  }

}

export interface services {
  title: string;
  url: string;
  srcset: string;
}

export interface productos {
  id?: number;
  company: string,
  url: string,
  srcset: string
}
