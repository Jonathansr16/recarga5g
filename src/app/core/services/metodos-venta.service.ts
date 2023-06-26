import { Injectable } from '@angular/core';
import { metodosModalModel, metodosVentaModel } from '@core/models/metodos-venta.model';

@Injectable({
  providedIn: 'root'
})
export class MetodosVentaService {

  metodoVenta: metodosVentaModel[] = [

    {
      id: 1,
      img: "/assets/img/ventas-pc.png",
      title1: "Vende de tu computadora",
      description: "Para empezar a vender recargas electrónicas desde tu computadora, solo necesitas tener acceso a internet y registrarte en una plataforma de recargas electrónicas. Una vez registrado, podrás ofrecer una amplia variedad de recargas para diferentes operadoras y dispositivos electrónicos",
      modal: [
        {
          imgModal: "/assets/img/plataformas-web.png",
          titleModal: "¿Como vender recarga desde una computadora?",
          descrptionModal: "Venta de recargas AT&T desde un equipo de  computo"
        }
      
      ],

      list: [
        {
          iconName: "laptop_mac",
          descriptionStep: "Equipo de computo"
        },

        {
          iconName: "wifi",
          descriptionStep: "Conexión a internet"
        },

        {
          iconName: "domain_verification",
          descriptionStep: "Navegador de su preferencia"
        },

        {
          iconName: "travel_explore",
          descriptionStep: "Link de acceso a la plataforma"
        },

        {
          iconName: "person_pin",
          descriptionStep: "Datos de acceso"
        }
      ],
      showModal: false

    },

    {
      id: 2,
      img: "/assets/img/ventas-phone.svg",
      title1: "Vende de tu Smarthphone o Tablet",
      description: "Con solo unos pocos toques en tu pantalla, podrás ofrecer una amplia variedad de recargas para diferentes operadoras y dispositivos electrónicos. Además, la aplicación de recargas electrónicas se encargará del procesamiento de la transacción y de la entrega de la recarga al cliente, lo que te permitirá ofrecer un servicio rápido y eficiente desde cualquier lugar.",
      modal: [
        {
          imgModal: "/assets/img/smartphone.png",
          titleModal: "¿Como puedo vender recargas electrónicas desde mi celular o tablet",
          descrptionModal: "Venta de recargas AT&T desde un equipo de  computo"
        }
      ],

      list: [
        {
          iconName: "archive",
          descriptionStep: "Descarga la App desde la tienda oficial"
        },

        {
          iconName: "person_pin",
          descriptionStep: "Datos de acceso"
        },

        {
          iconName: "payments",
          descriptionStep: "Saldo suficiente"
        },

        {
          iconName: "checklist_rtl",
          descriptionStep: "Listo!! podras comenzar a realizar recargar y pagar servicios a cualquier compañia"
        }
      ],

      showModal: false

    },

    {
      id: 3,
      img: "/assets/img/ventas-sms.png",
      title1: "Vende con tan solo un simple SMS",
      description: "Vender recargas electrónicas enviando un simple SMS es una opción ideal para aquellos que no tienen acceso a una computadora o teléfono inteligente, y para aquellos que buscan una manera fácil y rápida de generar ingresos adicionales para su negocio.",
      modal: [
        {
          imgModal: "/assets/img/sms.png",
          titleModal: "¿Como puedo vender recargas electrónicas enviando un SMS?",
          descrptionModal: "Venta de recargas AT&T desde un equipo de  computo"
        }
      ],

      list: [
        {
          iconName: "security_update_good",
          descriptionStep: "Telefono celular"
        },

        {
          iconName: "person_pin",
          descriptionStep: "Datos de acceso"
        },

        {
          iconName: "how_to_reg",
          descriptionStep: "Vincular tu numero celular a la plataforma"
        },

        {
          iconName: "payments",
          descriptionStep: "Saldo suficiente"
        },
      ],

      showModal: false

    },

  ];

  getmetodosVenta(): metodosVentaModel[] {
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
