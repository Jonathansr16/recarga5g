import { Injectable } from '@angular/core';
import { MetodosModalModel, MetodosVentaModel } from '@core/models/metodos-venta.model';

@Injectable({
  providedIn: 'root'
})
export class MetodosVentaService {

  metodoVenta: MetodosVentaModel[] = [

    {
      id: 1,
      img: '/assets/img/laptop.png',
      title: "Plataforma Web",
      description: "Vende recargas Telcel, con excelentes comisiones, con tu smartphone o computadora ingresa al portal con tu navegador de preferencia.",
      modal: {
          img: "/assets/img/plataformas-web.png",
          subTitle: "¿Como vender recarga desde una computadora?",
          descrption: "Venta de recargas AT&T desde un equipo de  computo",
          list: [
        {
          iconName: "laptop_mac",
          description: "Equipo de computo"
        },

        {
          iconName: "wifi",
          description: "Conexión a internet"
        },

        {
          iconName: "domain_verification",
          description: "Navegador de su preferencia"
        },

        {
          iconName: "travel_explore",
          description: "Link de acceso a la plataforma"
        },

        {
          iconName: "person_pin",
          description: "Datos de acceso"
        }
      ],
     
    },

     

    },

    {
      id: 2,
      img: "/assets/img/smartphone.webp",
      title: "App",
      description: "Descarga la app desde la tienda oficial para vender recargas telcel",
      modal: {
          img: "/assets/img/smartphone.png",
          subTitle: "¿Como puedo vender recargas electrónicas desde mi celular o tablet",
          descrption: "Venta de recargas AT&T desde un equipo de  computo",
          list: [
            {
              iconName: "archive",
              description: "Descarga la App desde la tienda oficial"
            },
    
            {
              iconName: "person_pin",
              description: "Datos de acceso"
            },
    
            {
              iconName: "payments",
              description: "Saldo suficiente"
            },
    
            {
              iconName: "checklist_rtl",
              description: "Listo!! podras comenzar a realizar recargar y pagar servicios a cualquier compañia"
            }
          ],
        
    },
    },

    {
      id: 3,
      img: "/assets/img/sms.webp",
      title: "Vía SMS",
      description: "Vender recargas electrónicas enviando un simple SMS.",
      modal: {
        
          img: "/assets/img/sms.png",
          subTitle: "¿Como puedo vender recargas electrónicas enviando un SMS?",
          descrption: "Venta de recargas AT&T desde un equipo de  computo",
          list: [
            {
              iconName: "security_update_good",
              description: "Telefono celular"
            },
    
            {
              iconName: "person_pin",
              description: "Datos de acceso"
            },
    
            {
              iconName: "how_to_reg",
              description: "Vincular tu numero celular a la plataforma"
            },
    
            {
              iconName: "payments",
              description: "Saldo suficiente"
            },
          ],
        
    },

     


    },

  ];

  getmetodosVenta(): MetodosVentaModel[] {
    return this.metodoVenta;
  }

  openModal(item: any) {
    item.showModal = true;
  }

  closeModal(item: any) {
    item.showModal = false;
  }

  constructor() { }



}
