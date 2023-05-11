import { Injectable } from "@angular/core";
import { montos } from "@core/models/montos-plataformas.model";


Injectable()
export class MontosPlataformasService {
    
    private montosPagaqui: montos[] = [

        {
            title: 'Monto minimo para venta de recargas',
            subtitle: 'montos para recargas',
            subtitle2: 'Pequeña inversión, grandes beneficios: ¡$100 para vender tiempo aire',
            description: 'entendemos que cada centavo cuenta cuando se trata de mantener tu negocio conectado y en funcionamiento. Con nuestra plataforma de recargas electrónicas, podrás recargar tus dispositivos y mantener a tu equipo siempre en línea, sin importar la hora o el lugar. Y lo mejor de todo es que solo necesitas un depósito mínimo de $100 para comenzar.',
            img: 'assets/img/montos__recargas.png'
        }
    ];

    private montosPlanetaemx: montos[] = [ 

        {
            title: 'Monto minimo para vender recargas',
            subtitle: 'montos para vender recargas',
            subtitle2: 'Recargas asequibles para tu éxito empresarial: Comienza con $100',
            description: 'Con nuestro servicio de recargas, podrás recargar tus dispositivos de forma rápida y sencilla, sin importar la operadora o el tipo de dispositivo que utilices. Lo mejor de todo es que puedes comenzar con un depósito mínimo de $100, permitiéndote administrar tu presupuesto de manera eficiente.',
            img: 'assets/img/montos__recargas.png'
        }
      
    ];

    getMontoPagaqui(): montos[] {
        return this.montosPagaqui;
    }

    getMontosPlanetae(): montos[] {
        return this.montosPlanetaemx;
    }

}