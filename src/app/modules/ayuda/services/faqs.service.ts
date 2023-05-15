import { Injectable } from "@angular/core";

@Injectable()
export class FaqsService {

private faqs: faqHead[] = [
        {

            title: "Que beneficios tengo a afiliarme a Recarga5g.com",
            url: "Beneficios-afilacion"
        },

        {

            title: "Que servicios puedo vender con Recarga5g.com",
            url: "Servicios-para-vender"
        },

        {

            title: "Como me registro para empezar a vender recargas",
            url: ""
        },

        {

            title: "Debo firmar algún contracto para vender recargas",
            url: "Contrato"
        },

        {

            title: "Tengo que pagar alguna mensualidad o anualidad para empezar a vender recargas",
            url: "Mensualidad"
        },

    ];

    private TitlesSection: faqsModel[] = [

        {
            title: "General",
            faqSection: [

                {
                   title: "¿Qué beneficios tengo a afiliarme a Recarga5g.com?",
                    description: "Con Recarga5.com podrás obtener un mayor flujo de clientes y generaras mayores ganancias con nuestros servicios. Es muy fácil: Regístrate gratis. Transfiere o deposita desde $300.00 pesos para tener tiempo aire en tu cuenta. Recibe inmediatamente una comisión en tiempo aire y listo ya puedes vender el total de tiempo aire.",
                    img: "/assets/img/svg/faqs__store.svg",
                    label: "Beneficios obtenidos a registrarse con Recarga5g.com"
                },

                {
                    title: "¿Qué servicios puedo vender con Recarga5g.com?",
                     description: "Ofrecemos +200 compañias de servicios y recargas electrónicas disponibles en México: Telmex, Izzi, CFE, Telcel, Movistar, Unefon, Virgin Mobile, Bait, OUI, WEEX, Pillofon, AT&T, TotalPlay, Google Play, Netflix, Steam y muchos mas!!",
                     img: "/assets/img/icon-companies/banner_recargas.png",
                     label: "Compañias de recargas con Recarga5g.com"
                 },

                 {
                    title: "¿Cómo me registro para empezar a vender recargas?",
                    description: "Registrate totalmente gratis en la opción Registrarme y empieza a vender recargas a cualquier compañia ahora mismo",
                     img: "/assets/img/icon-companies/banner_recargas.png",
                     label: "Compañias de recargas con Recarga5g.com"
                 },

                 {
                    title: "¿Tengo que pagar alguna mensualidad o anualidad para empezar a vender recargas?",
                    description: "No, los montos mínimos para depósitos y transferencias es de $300MXN, realiza nuevamente tus depósitos como y cuando quieras nuevamente, sin pago forzosos, anualidades ni penalizaciones.",
                 },


                 {
                    title: "¿Cómo puedo obtener un aumento en mi comisión?",
                    description: "Si eres distribuidor, manejas alguna plataforma similar o llevas 1 año con nosotros, contáctanos para reajustar tu comisión, Recarga5g.com ofreciendo comisiones adaptadas a tus necesidades.",
                 },

                 {
                    title: "¿Cuál es la comisión que puedo obtener por el pago de cada servicio con Recarga5g.com?",
                    description: "La comisión para el pago de servicios es del 2% al 3% por cada pago de servicio",
                 },

                 {
                    title: "Tengo problemas para realizar una operación en la plataforma, ¿Qué debo hacer?",
                    description: "Si presentas problemas para realizar alguna operación dentro de la plataforma, notifícalo a tu asistente ejecutivo Notificar ahora., para ello debes proporcionarle: tu número de usuario, foto o captura del problema presentado y plataforma.",
                    img: "/assets/img/svg/Call-center.svg",
                    label: "Reporta cualquier problema para vender recargas a Recargas Electrónicas"
                },

                {
                    title: "Se me olvido la contraseña para acceder a mi plataforma, ¿Qué debo hacer?",
                    description: "Si no puedes ingresar a tu plataforma o se te olvido tu contraseña, contáctanos para reestablecer tus datos de acceso Chatear ahora.",
                 },

            ]
        },

        // {
        //     title: "Pagaqui | Comisiones"
        // },

        // {
        //     title: "Pagaqui | Comisiones"
        // },

        // {
        //     title: "Pagaqui | Plataforma"
        // },

        // {
        //     title: "Pagaqui | Notificación"
        // },
    ]

    getTitlesSection(): faqsModel[] {
        return this.TitlesSection;

    }

    getFaqs(): faqHead[] {
        return this.faqs;

    }




}

export interface faqHead {
    title: string;
    url: string;
}

export interface faqsModel {
    title: string;
    faqSection: faqsSection[];

}

export interface faqsSection {
    title: string;
    description: string;
    img?: string;
    label?: string;
}

