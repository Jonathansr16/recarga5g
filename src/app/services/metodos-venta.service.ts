import { Injectable } from '@angular/core';
import { SalesChannel } from 'src/app/interfaces/sales-channel';

@Injectable({
  providedIn: 'root'
})
export class MetodosVentaService {

  channels: SalesChannel[] = [

    {
      id: 1,
      img: {
        src: '/assets/img/laptop.png',
        alt: 'Venta de recargas por computadora'
      },
      title: "Plataforma Web",
      description: "Vende recargas Telcel, con excelentes comisiones, con tu smartphone o computadora ingresa al portal con tu navegador de preferencia.",
      modalInfo: {
        subTitle: "¿Como vender recarga desde una computadora?",
        description: "Venta de recargas AT&T desde un equipo de  computo",
        listSteps: [

          {
            id: 10,
            iconClassName: "laptop_mac",
            info: "Equipo de computo"
          },

          {
            id: 11,
            iconClassName: "wifi",
            info: "Conexión a internet"
          },

          {
            id: 12,
            iconClassName: "domain_verification",
            info: "Navegador de su preferencia"
          },

          {
            id: 13,
            iconClassName: "travel_explore",
            info: "Link de acceso a la plataforma"
          },

          {
            id: 14,
            iconClassName: "person_pin",
            info: "Datos de acceso"
          }
        ],

      },

    },

    {
      id: 2,
      img: {
        src: '/assets/img/smartphone.webp',
        alt: 'Venta de recargas multiregion desde la App'
      },
      title: "App",
      description: "Descarga la app desde la tienda oficial para vender recargas telcel en tu dispositivo Android o IOS.",
      modalInfo: {
        subTitle: "¿Como puedo vender recargas electrónicas desde mi celular o tablet",
        description: "Venta de recargas AT&T desde la App",
        listSteps: [
          { 
            id: 20,
            iconClassName: "archive",
            info: "Descarga la App desde la tienda oficial"
          },

          { 
            id: 21,
            iconClassName: "person_pin",
            info: "Datos de acceso"
          },

          {
            id: 22,
            iconClassName: "payments",
            info: "Saldo suficiente"
          },

          {
            id: 23,
            iconClassName: "checklist_rtl",
            info: "Listo!! podras comenzar a realizar recargar y pagar servicios a cualquier compañia"
          }
        ],

      },
    },

    {
      id: 3,
      img: {
        src: '/assets/img/sms.webp',
        alt: 'Ventas de recargas por SMS gratuito'
      },
      title: "Vía SMS",
      description: "Vender recargas electrónicas enviando un simple SMS. En tu telefono celular.",
      modalInfo: {

        subTitle: "¿Como puedo vender recargas electrónicas enviando un SMS?",
        description: "Venta de recargas vía SMS gratutito",
        listSteps: [
          {
            id: 30,
            iconClassName: "security_update_good",
            info: "Telefono celular"
          },

          {
            id: 31,
            iconClassName: "person_pin",
            info: "Datos de acceso"
          },

          {
            id: 32,
            iconClassName: "how_to_reg",
            info: "Vincular tu numero celular a la plataforma"
          },

          {
            id: 33,
            iconClassName: "payments",
            info: "Saldo suficiente"
          },
        ],

      },
    },

  ];

  getmetodosVenta(): SalesChannel[] {
    return this.channels;
  }

  openModal(item: any) {
    item.showModal = true;
  }

  closeModal(item: any) {
    item.showModal = false;
  }

  constructor() { }



}
