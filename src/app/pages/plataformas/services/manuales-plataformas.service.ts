import { Injectable } from "@angular/core";
import { manualesModel } from "@core/interfaces/manuales-plataformas.models";


Injectable()
export class ManualesPlataformasService {
    
    manualesPagaqui: manualesModel[] = [

        {
            title: "Manual Pagaqui",
            subtitle: "manual para vender recargas",
            description: "¡Potencia tus ventas de recargas con nuestros manuales prácticos! En Recarga5.com, sabemos que el conocimiento es poder cuando se trata de tener éxito en la venta de recargas electrónicas. Por eso, hemos creado una colección completa de manuales detallados que te guiarán paso a paso en el proceso de vender recargas. Nuestros manuales están diseñados pensando en ti, tanto si eres un principiante en este negocio como si ya tienes experiencia",
            btns: [

                {
                    iconBtn: "browser_updated",
                    titleBtn: " manual web",
                    url: 'https://ik.imagekit.io/taerecargas/Recargas/manual-pagaqui.pdf?updatedAt=1676475533508'
                }, 

                {
                    iconBtn: "system_update",
                    titleBtn: "manual para mobile",
                    url: 'https://ik.imagekit.io/taerecargas/Recargas/manual-pagaqui_moviles_l6Hzz4IvP.pdf?updatedAt=1686332246942'
                }
            ]
        }

    ];

    manualesPlanetaemx: manualesModel[] = [
        
        {
        title: "Manual Planetaemx",
        subtitle: "Manuales para vender recargas Movistar",
        description: "Te ofrecemos una amplia selección de manuales prácticos que te guiarán en cada paso del proceso de venta. Ya sea que estés comenzando o busques mejorar tus resultados actuales, nuestros manuales están diseñados para ayudarte a alcanzar tus metas.",
        btns: [

            {
                iconBtn: "browser_updated",
                titleBtn: "manual Planetaemx",
                url: "https://ik.imagekit.io/taerecargas/Recargas/manual-planetaemx.pdf?updatedAt=1676475542643"
            },

            
            {
                iconBtn: "browser_updated",
                titleBtn: "manual Recargaki",
                url: "https://ik.imagekit.io/taerecargas/Recargas/manual-recargaki.pdf?updatedAt=1676475554523"
            },

        ]
        }
    ];

    getManualesPagaqui(): manualesModel[] {
        return this.manualesPagaqui;
    }

    getManualesPlanetaemx(): manualesModel[] {
        return this.manualesPlanetaemx;
    }

}