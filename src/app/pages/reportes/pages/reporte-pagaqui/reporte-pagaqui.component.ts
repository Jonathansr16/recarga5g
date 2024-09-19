import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';
@Component({
  selector: 'app-reporte-pagaqui',
  standalone: true,
  templateUrl: './reporte-pagaqui.component.html',
  styleUrls: ['./reporte-pagaqui.component.scss','../../reportes.component.scss'],
  imports: [
    
  ]
})
export default class ReportePagaquiComponent implements OnInit {

    //* META TAG
    tag: metaTagModel = {
      title: 'Recarga5g.com | Reporte de depósitos y/o transferencias Pagaqui',
      description: 'A continuación podrás notificar tus depósitos desde nuestro sitio web para que empieces a generar ganancias por las ventas de tiempo aire Telcel, Bait, Movistar, y muchos mas!!',
      keywords: "Notificación de depósito Pagaqui, Reporte de deposito para vender recargas Pagaqui",
      url: 'recarga5g.com/plataforma/reportePagaqui',
      type: 'website',
      image: 'https://recarga5g.com/Venta-recargas.png',
      card: 'summary_large_image',
      creator: '@recargascelular'
     }

     private readonly title = inject(Title); 
     private readonly meta = inject( MetaTagService);

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Reporte de depósitos y/o transferencias Pagaqui');

    this.meta.generateTags({
      ...this.tag
    })
  }

}
