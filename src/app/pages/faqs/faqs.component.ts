import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/pages/services/meta-tag.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

  constructor(private title: Title, private metaTag: MetaTagService) { 

    let titleFaqs: string = "Preguntas Frecuentes - Consulta  las preguntas mas frecuentes sobre nuestra plataforma y formas de pago.";
    this.title.setTitle(titleFaqs);

    this.metaTag.generarTag({
      description: "Verifica y consulta todas las preguntas y repuestas sobre nuestra plataforma, formas de pago y aumento de comisión.",
      keywords: "recarga5g, como vender recargas electronicas, ayuda para vender recargas, asesoria recargas",
      ogtitle: "Preguntas Frecuentes - Consulta  las preguntas mas frecuentes sobre nuestra plataforma y formas de pago.",
      ogdescription: "Verifica y consulta todas las preguntas y repuestas sobre nuestra plataforma, formas de pago y aumento de comisión.",
      slug: "faqs"
    })

  }


}
