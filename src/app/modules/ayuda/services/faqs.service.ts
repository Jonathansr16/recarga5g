import { Injectable } from "@angular/core";

@Injectable()
export class FaqsService {


private titleFaq: faqHead[] = [

    {
        title: "que beneficios tengo a afiliarme a Recarga5g.com",
        scroll: "item1"
    },

    {
        title: "que servicios puedo vender con Recarga5g.com",
        scroll: "item1"
    },

    {
        title: "como me registro para empezar a vender recargas",
        scroll: "item1"
    },

    {
        title: "debo firmar algún contracto para vender recargas",
        scroll: "item1"
    },

    {
        title: "tengo que pagar alguna mensualidad o anualidad para empezar a vender recargas",
        scroll: "item1"
    },

    {
        title: "cuales son los montos mínimos y máximos para depósitos y/o transferencias para vender recargas",
        scroll: "item1"
    },

];

gettitleFaqs(): faqHead[] {
    return this.titleFaq;
}

}

export interface faqHead {
    title: string;
    scroll: string;
}



