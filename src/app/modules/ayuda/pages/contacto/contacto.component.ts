import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  imports: [
    MatIconModule,
  ]
})
export default class ContactoComponent implements OnInit {

    //? META TAG
    tag: metaTagModel = {
      title: "Recarga5g.com | Consulta como vender recargas electrónicas",
      description: "Contactamos por alguno de nuestros medios de contacto para asesorarte para que puedas generar ganancias vendiendo recargas telefónicas a cualquier tipo de compañía.",
      keywords: "Contacto para venta de recargas, Contacto Pagaqui, Contacto Planetaemx, Contacto Recargaki, Contacto recargas electrónicas, Recarga5g.com, Contacto para vender recargas elecrtrónicas con excelentes comisiones",
      url: "recarga5g.com/ayuda/contacto",
      type: "website",
      image: "https://recarga5g.com/Venta-recargas.png",
      card: "summary_large_image",
      creator: "@recargascelular"
    }

    private _metaTagService = inject(MetaTagService); 
    private readonly title = inject( Title );

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Contáctanos por cualquier de nuestros medios de contacto para asesorarte y obtener más información para vender recargas a cualquier compañia con excelentes comisiones');
 
    this._metaTagService.generateTags( {
      ...this.tag
    })

  }

}
