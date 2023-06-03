import { Injectable } from '@angular/core';
import { registerSteps } from '@core/models/register-steps-model';


@Injectable({
    providedIn: 'root'
})
export class RegisterStepsService {


    private stepsHome: registerSteps[] = [
     {
        item: [
                   {
            img: "assets/img/register-registro.png",
            alt: "registro para la venta de recargas sin costo alguno",
            description: "Registrate para vender recargas",

        },

        {
            img: "assets/img/register-correo.png",
            alt: "Ingresa a tu plataforma con los datos de acceso que podras encontrar en el correo de bienvenida",
            description: "Espera nuestro correo con tus datos de acceso",

        },

        {
            img: "assets/img/register-deposito.png",
            alt: "Notificiación de depositos Pagaqui",
            description: "Deposita y notifica tus depositos en la plataforma",

        },

        {
            img: "assets/img/register-ganancias.png",
            alt: "Genera ingresos extras veniendo recargas con recarga5g.com",
            description: "Listo, difruta De Los Beneficios",

        } 
        ]
     }
    ];

    private stepsPagaqui: registerSteps[] = [

        {
            item: [
                {
                    img: "assets/img/register-registro.png",
                    alt: "registro para la venta de recargas con Pagaqui sin costo alguno",
                    description: "Registrate para vender recargas con Pagaqui",
        
                },
        
                {
                    img: "assets/img/register-correo.png",
                    alt: "Ingresa a Pagaqui con los datos de acceso que podras encontrar en el correo de bienvenida",
                    description: "Espera nuestro correo con tus datos de acceso",
        
                },
        
                {
                    img: "assets/img/register-deposito.png",
                    alt: "Notificiación de depositos Pagaqui",
                    description: "Deposita y notifica tus depositos Pagaqui en la plataforma",
        
                },
        
                {
                    img: "assets/img/register-ganancias.png",
                    alt: "Genera ingresos extras veniendo recargas con pagaqui",
                    description: "Listo! podras generar ganancias por cada venta que realices",
        
                }
            ]
        }
    ]

    private stepsPlanetaemx: registerSteps[] = [

      {
        item: [
            {
                img: "assets/img/register-registro.png",
                alt: "registro para la venta de recargas con Planetaemx sin costo alguno",
                description: "Registrate para vender recargas con Planetaemx",
    
            },
    
            {
                img: "assets/img/register-correo.png",
                alt: "Ingresa a Planetaemx con los datos de acceso que podras encontrar en el correo de bienvenida",
                description: "Espera nuestro correo con tus datos de acceso",
    
            },
    
            {
                img: "assets/img/register-deposito.png",
                alt: "Notificiación de depositos Planetaemx",
                description: "Deposita y notifica tus depositos Planetaemx en la plataforma",
    
            },
    
            {
                img: "assets/img/register-ganancias.png",
                alt: "Genera ingresos extras por cada deposito que reportes",
                description: "Listo! podras generar ganancias por cada deposito que realices y notifiques",
    
            }
        ]
      }
    ];

    private stepsRecargas: registerSteps[] = [
   
        {
            item: [
                {
                    img: "assets/img/register-registro.png",
                    alt: "registro para la venta de recargas nacional sin costo alguno",
                    description: "Registrate para vender recargas multiregión",
        
                },
        
                {
                    img: "assets/img/register-correo.png",
                    alt: "Ingresa a la plataforma con los datos de acceso que podras encontrar en el correo de bienvenida",
                    description: "Espera nuestro correo con tus datos de acceso",
        
                },
        
                {
                    img: "assets/img/register-deposito.png",
                    alt: "Notificiación tu deposito en la plataforma",
                    description: "Deposita y notifica tus depositos en la plataforma",
        
                },
        
                {
                    img: "assets/img/register-ganancias.png",
                    alt: "Genera ingresos extras veniendo recargas con | Recarga5g.com",
                    description: "Listo! podras generar ganancias por la venta de tus recargas",
        
                }
            ]
        }
    ];

    private stepsServicios: registerSteps[] = [
   {
    item: [
        {
            img: "assets/img/register-registro.png",
            alt: "registro para la venta de recargas con Pagaqui sin costo alguno",
            description: "Registrate para vender recargas con Pagaqui",

        },

        {
            img: "assets/img/register-correo.png",
            alt: "Ingresa a Pagaqui con los datos de acceso que podras encontrar en el correo de bienvenida",
            description: "Espera nuestro correo con tus datos de acceso",

        },

        {
            img: "assets/img/register-deposito.png",
            alt: "Notificiación de depositos Pagaqui",
            description: "Deposita y notifica tus depositos Pagaqui en la plataforma",

        },

        {
            img: "assets/img/register-ganancias.png",
            alt: "Genera ingresos extras veniendo recargas con pagaqui",
            description: "Listo! podras generar ganancias por cada venta que realices",

        }
    ]
   }
    ];


    private stepsPines: registerSteps[] = [
  
        {
            item: [
                {
                    img: "assets/img/register-registro.png",
                    alt: "registro para la venta de recargas con Pagaqui sin costo alguno",
                    description: "Registrate para vender recargas con Pagaqui",
        
                },
        
                {
                    img: "assets/img/register-correo.png",
                    alt: "Ingresa a Pagaqui con los datos de acceso que podras encontrar en el correo de bienvenida",
                    description: "Espera nuestro correo con tus datos de acceso",
        
                },
        
                {
                    img: "assets/img/register-deposito.png",
                    alt: "Notificiación de depositos Pagaqui",
                    description: "Deposita y notifica tus depositos Pagaqui en la plataforma",
        
                },
        
                {
                    img: "assets/img/register-ganancias.png",
                    alt: "Genera ingresos extras veniendo recargas con pagaqui",
                    description: "Listo! podras generar ganancias por cada venta que realices",
        
                }
            ]
        }
    ];


    getStepsHome(): registerSteps[] {
        return this.stepsHome;
    }

    getStepsPagaqui(): registerSteps[] {
        return this.stepsPagaqui;
    }

    getStepsPlanetaemx(): registerSteps[] {
        return this.stepsPlanetaemx;
    }

    getStepsRecargas(): registerSteps[] {
        return this.stepsRecargas;
    }

    getStepsServicios(): registerSteps[] {
        return this.stepsServicios;
    }

    getStepsPines(): registerSteps[] {
        return this.stepsPines;
    }



}



