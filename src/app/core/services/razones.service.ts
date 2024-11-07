import { Injectable } from "@angular/core";
import { razonesModel } from "@core/interfaces/razones.model";

@Injectable({ 
    providedIn: 'root'
})
export class RazonesService {


  private razones: razonesModel[] = [

        {
            id: 1,
            nameIcon: "monetization_on",
            title: "Generación de ingresos adicionales",
            description: " La venta de recargas electrónicas puede ser una fuente adicional de ingresos para el negocio"
        },

        {
            id: 2,
            nameIcon: "settings_accessibility",
            title: "Atrae a nuevos clientes",
            description: "Los clientes pueden visitar el negocio para recargar sus dispositivos electrónicos y también pueden descubrir otros productos y servicios que el negocio ofrece"
        },

        {
            id: 3,
            nameIcon: "devices",
            title: "Métodos de venta",
            description: "Vende recargas electrónicas desde tu smartphone, tablet o desktop"
        },

        {
            id: 4,
            nameIcon: "supervisor_account",
            title: "Diferenciación de la competencia",
            description: "La venta de recargas electrónicas puede diferenciar al negocio de su competencia y darle una ventaja en el mercado"
        },
        
        {
            id: 5,
            nameIcon: "add_task",
            title: "Aumento del tráfico de la tienda",
            description: "Los clientes pueden visitar el negocio con más frecuencia para recargar sus dispositivos electrónicos, lo que aumenta el tráfico en la tienda y puede impulsar las ventas de otros productos y servicios"
        },

        {
            id: 6,
            nameIcon: "payments",
            title: "Múltiples medios de pago y bancos",
            description: "Puedes depositar transferencias bancarias y depósitos en efectivo en HSBC, Banorte, Santander, Bancomer y Banco Azteca",

        },


        {
            id: 7,
            nameIcon: "system_update",
            title: "Aplicación de depósitos automático",
            description: "Genera una referencia para tus depósitos y transferencias bancarias para la aplicación de tus compras de manera automática sin necesidad de notificarlos en tu portal",

        },

        
        {
            id: 8,
            nameIcon: "public",
            title: "Ampliación del alcance",
            description: "La venta de recargas electrónicas permite a los negocios llegar a un público más amplio, incluyendo a personas que no tienen acceso a una cuenta bancaria o una tarjeta de crédito para recargar en línea",

        },


        {
            id: 9,
            nameIcon: "format_list_bulleted_add",
            title: "Ampliación de la oferta de productos y servicios",
            description: "Ofrece recargas a cualquier compañía: Telcel, Movistar, Bait, Unefon, AT&T, cobra +200 compañías de servicios: CFE, IZZI, Telmex, Televia",

        },
        
        


    ]


    getRazones(): razonesModel[] {
        return this.razones;
    }
}