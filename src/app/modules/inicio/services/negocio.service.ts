import { Injectable } from "@angular/core";
import { negocioModel } from "@core/models/negocios.model";



@Injectable()
export class NegocioService {

    negocio: negocioModel[] =[

       {
        id: 1,
        nameIcon: "assets/img/icon-negocios/icon-ferreteria.webp",
       typeNegocio: "Ferreterias"
       },

       {
        id: 2,
        nameIcon: "assets/img/icon-negocios/icon-panaderia.webp",
        typeNegocio: "Panaderias"
       },

       {
        id: 3,
        nameIcon: "assets/img/icon-negocios/icon-zapatos.webp",
        typeNegocio: "Zapaterias"
       },

       {
        id: 4,
        nameIcon: "assets/img/icon-negocios/icon-ciber.webp",
        typeNegocio: "Cyber"
       },

       {
        id: 5,
        nameIcon: "assets/img/icon-negocios/icon-farmacia.webp",
        typeNegocio: "Farmacias"
       }, 

       {
        id: 6,
        nameIcon: "assets/img/icon-negocios/icon-abarrotes.webp",
        typeNegocio: "Abarrotes"
       },

       {
        id: 7,
        nameIcon: "assets/img/icon-negocios/icon-papeleria.webp",
        typeNegocio: "Papelerías"
       },

       {
        id: 8,
        nameIcon: "assets/img/icon-negocios/icon-vinateria.webp", 
        typeNegocio: "Vinaterías"
       }, 

       {
        id: 9,
        nameIcon: "assets/img/icon-negocios/icon-tienda.webp",
        typeNegocio: "Tiendas de conveniencia"
       }

    ];


    getNegocios(): negocioModel[] {
        return this.negocio;
    }

}