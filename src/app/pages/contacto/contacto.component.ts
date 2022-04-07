import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from 'src/app/pages/services/meta-tag.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private title: Title, private metaTag: MetaTagService) {
    let titleContacto: string = "Contacto - Contacto para asesoría para la venta de recargas electrónicas con una comisión fija.";
    this.title.setTitle(titleContacto);

    this.metaTag.generarTag({
      description: "Contáctanos si tienes dudas, comentarios o sugerencias sobre nuestra plataforma, formas de pago. Recargas Electrónicas te atenderá con mucho gusto.",
    keywords: "recarga5g, contacto recargas electronicas, contacto para vender recargas, asesoria para la venta de recargas",
    ogtitle: "Contacto - Contacto para asesoría para la venta de recargas electrónicas con una comisión fija.",
    ogdescription: "Contáctanos si tienes dudas, comentarios o sugerencias sobre nuestra plataforma, formas de pago. Recargas Electrónicas te atenderá con mucho gusto.",
    slug: "contacto"
    })
   }

  ngOnInit(): void {
  }

}
