import { Injectable } from '@angular/core';
import { plataformaProductos } from '@core/models/app-plataformas.model';

Injectable()
export class AppPlataformasService {
    
    private appPagaqui: plataformaProductos[] = [

        {
            title: "OBTEN UNA COMISIÓN HASTA UN 7% FIJO POR VENTA REALIZADA",
            subtitle: "App pagaqui",
            options: [

                {
                    iconName: "1",
                    description: "Obtén una comisión por la venta de cada recarga Telcel, Bait, o cualquier compañía de recargas o servicios"
                },

                {
                    iconName: "2",
                    description: "Genera una referencia para todos depósitos y recibe tu saldo de manera automática sin necesidad de notificarnos"
                },


                {
                    iconName: "3",
                    description: " Con un único saldo realizar recargas a cualquier compañía, paga servicios y pines electrónicos"
                },

                {
                    iconName: "4",
                    description: "Cobra a tus clientes todas tus ventas de recargas, pago de servicios mediante QR, ahora podrás cobrar tus clientes mediante QR"
                },

                {
                    iconName: "5",
                    description: "Registra a todos tus puntos de venta"
                },

                {
                    iconName: "6",
                    description: "Consulta tus reportes de venta"
                },
            ],
            images: [
              
                {
                    img: "assets/img/plataformas/pagaqui/app-pagaqui__sesion.jpg",
                    label: "Ventana home de la App Pagaqui"
                },

                {
                    img: "assets/img/plataformas/pagaqui/app-pagaqui__home.jpg",
                    label: "Ventana home de la App Pagaqui"
                }, 

                {
                    img: "assets/img/plataformas/pagaqui/app-pagaqui__recarga.jpg",
                    label: "Recargas de la App pagaqui"    
                },

                {
                    img: "assets/img/plataformas/pagaqui/app-pagaqui__opciones.jpg",
                    label: "Recargas de la App pagaqui"    
                },

                {
                    img: "assets/img/plataformas/pagaqui/app-pagaqui__servicios.jpg",
                    label: "Recargas de la App pagaqui"    
                },

            ],

          
        }
    ];

    private appPlanetaemx: plataformaProductos[] = [
        {
            title: "OBTEN UNA COMISIÓN POR DEPOSITO QUE REPORTES EN LA PLATAFORMA RECARGAKI/PLANETAMEX",
            subtitle: "App Planetaemx",
            options: [

                {
                    iconName: "1",
                    description: "Obtén una comisión por cada deposito que reportes en la plataforma"
                },

                {
                    iconName: "2",
                    description: "Reporta tu pago directamente en la plataforma y recibe el saldo correspondiente y la comisión en tiempo aire"
                },


                {
                    iconName: "3",
                    description: "Consulta las cuentas bancarias autorizadas en la plataforma"
                },

                {
                    iconName: "4",
                    description: "Recarga saldo para recargas y saldo para pago de servicios"
                },

                {
                    iconName: "5",
                    description: "Consulta el status de todos tus reporte de depositos"
                },

                {
                    iconName: "6",
                    description: "registra todos tus puntos de venta y obten una comisión por la ventas que estos realicen en Planetaemx"
                },
            ],
            images: [

                {
                    img: "assets/img/plataformas/planetaemx/app-planetaemx__sesion.jpg",
                    label: "Inicio de sesion desde la app Recargaki"
                },
            
                {
                    img: "assets/img/plataformas/planetaemx/app-planetaemx__recargas.jpg",
                    label: "Venta de recargas desde la app Recargaki"
                },

                {
                    img: "assets/img/plataformas/planetaemx/app-planetaemx__opciones.jpg",
                    label: "Variedad de opciones que podras realizar desde la app Recargaki"
                },

                {
                    img: "assets/img/plataformas/planetaemx/app-planetaemx__notificacion.jpg",
                    label: "Notifica tus depositos y/o transferencias desde la app Recargaki"
                },

                {
                    img: "assets/img/plataformas/planetaemx/app-planetaemx__consulta.jpg",
                    label: "Consulta todas tus ventas desde la app Recargaki"
                },
            ]
        }
    ]

    getProductosPagaqui(): plataformaProductos[] {
        return this.appPagaqui;
    }

    getProductosPlanetaemx():plataformaProductos[] {
        return this.appPlanetaemx;
    }

}