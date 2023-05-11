import { Injectable } from "@angular/core";
import { manuales } from "@core/models/manuales-plataformas.models";


Injectable()
export class ManualesPlataformasService {
    
    manualesPagaqui: manuales[] = [

        {
            title: "Manual Pagaqui",
            subtitle: "manual para vender recargas",
            description: "¡Potencia tus ventas de recargas con nuestros manuales prácticos! En [nombre de tu negocio], sabemos que el conocimiento es poder cuando se trata de tener éxito en la venta de recargas electrónicas. Por eso, hemos creado una colección completa de manuales detallados que te guiarán paso a paso en el proceso de vender recargas. Nuestros manuales están diseñados pensando en ti, tanto si eres un principiante en este negocio como si ya tienes experiencia",
            btns: [

                {
                    iconBtn: "browser_updated",
                    titleBtn: " manual web"
                }, 

                {
                    iconBtn: "system_update",
                    titleBtn: "manual para mobile"
                }
            ]
        }

    ];

    manualesPlanetaemx: manuales[] = [
        
        {
        title: "Manual Planetaemx",
        subtitle: "Manuales para vender recargas telcel",
        description: "Te ofrecemos una amplia selección de manuales prácticos que te guiarán en cada paso del proceso de venta. Ya sea que estés comenzando o busques mejorar tus resultados actuales, nuestros manuales están diseñados para ayudarte a alcanzar tus metas.",
        btns: [

            {
                iconBtn: "browser_updated",
                titleBtn: "manual Planetaemx"
            },

            
            {
                iconBtn: "browser_updated",
                titleBtn: "manual Recargaki"
            },

        ]
        }
    ];

    getManualesPagaqui(): manuales[] {
        return this.manualesPagaqui;
    }

    getManualesPlanetaemx(): manuales[] {
        return this.manualesPlanetaemx;
    }

}