import { Injectable } from "@angular/core";
import { negocioModel } from "@core/models/negocios.model";

@Injectable()
export class NegocioService {

    negocio: negocioModel[] =[

       {
        id: 1,
        nameIcon: "assets/img/icon-negocios/icon-ferreteria.webp",
       typeNegocio: "Ferreterias",
       label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Ferreterias'
       },

       {
        id: 2,
        nameIcon: "assets/img/icon-negocios/icon-panaderia.webp",
        typeNegocio: "Panaderias",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Panaderias'
       },

       {
        id: 3,
        nameIcon: "assets/img/icon-negocios/icon-zapatos.webp",
        typeNegocio: "Zapaterias",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Zapaterias'
       },

       {
        id: 4,
        nameIcon: "assets/img/icon-negocios/icon-ciber.webp",
        typeNegocio: "Cyber",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Cyber'
       },

       {
        id: 5,
        nameIcon: "assets/img/icon-negocios/icon-farmacia.webp",
        typeNegocio: "Farmacias",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Farmacias'
       }, 

       {
        id: 6,
        nameIcon: "assets/img/icon-negocios/icon-abarrotes.webp",
        typeNegocio: "Abarrotes",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Abarrotes'
       },

       {
        id: 7,
        nameIcon: "assets/img/icon-negocios/icon-papeleria.webp",
        typeNegocio: "Papelerías",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Papelerías'
       },

       {
        id: 8,
        nameIcon: "assets/img/icon-negocios/icon-vinateria.webp", 
        typeNegocio: "Vinaterías",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Vinaterías'
       }, 

       {
        id: 9,
        nameIcon: "assets/img/icon-negocios/icon-tienda.webp",
        typeNegocio: "Tiendas de conveniencia",
        label: 'Venta de recargas, pago de servicios y pines con excelentes comisiones para cualquier tipo de negocio: Tiendas de Conveniencia'
       }

    ];


    getNegocios(): negocioModel[] {
        return this.negocio;
    }

}