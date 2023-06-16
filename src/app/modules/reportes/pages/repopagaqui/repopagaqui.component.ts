import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';
@Component({
  selector: 'app-repopagaqui',
  templateUrl: './repopagaqui.component.html',
  styleUrls: ['./repopagaqui.component.scss','../../reportes.component.scss']
})
export class RepopagaquiComponent implements OnInit {

    //* META TAG
    tag: metaTagModel = {
      title: 'Recarga5g.com | Reporte de depósitos y/o transferencias Pagaqui',
      description: 'A continuación podrás notificar tus depósitos desde nuestro sitio web para que empieces a generar ganancias por las ventas de tiempo aire Telcel, Bait, Movistar, y muchos mas!!',
      keywords: "Notificación de depósito Pagaqui, Reporte de deposito para vender recargas Pagaqui",
      url: 'recarga5g.com/plataforma/reportePagaqui',
      type: 'website',
      image: '/assets/img/Venta-recargas.png',
      card: 'summary_large_image',
      creator: '@recargascelular'
     }

  constructor(private readonly title: Title, private meta: MetaTagService) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Reporte de depósitos y/o transferencias Pagaqui');

    this.meta.generateTags({
      ...this.tag
    })
  }

}
