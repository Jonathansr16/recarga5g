import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

    //? META TAG
    tag: metaTagModel = {
      title: "Recarga5g.com | Consulta como vender recargas electrónicas",
      description: "Contactamos por alguno de nuestros medios de contacto para asesorarte para que puedas generar ganancias vendiendo recargas telefónicas a cualquier tipo de compañía.",
      keywords: "Contacto para venta de recargas, Contacto Pagaqui, Contacto Planetaemx, Contacto Recargaki, Contacto recargas electrónicas, Recarga5g.com, Contacto para vender recargas elecrtrónicas con excelentes comisiones",
      url: "recarga5g.com/ayuda/contacto",
      type: "website",
      image: "/assets/img/Venta-recargas.png",
      card: "summary_large_image",
      creator: "@recargascelular"
    }

  constructor(private _metaTagService: MetaTagService, private readonly title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Contáctanos por cualquier de nuestros medios de contacto para asesorarte y obtener más información para vender recargas a cualquier compañia con excelentes comisiones');
 
    this._metaTagService.generateTags( {
      ...this.tag
    })

  }

}
