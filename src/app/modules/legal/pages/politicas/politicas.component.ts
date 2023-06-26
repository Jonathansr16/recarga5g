import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {

  //? META TAG
  tag: metaTagModel = {
    title: 'Recarga5g.com | nuestras políticas para aplicacion de depósitos, recargas y pago de servicios',
    description: 'Consulta nuestras politicas de nuestros servicios para vender recargas electrónicas para todo tipo de negocio con comisiones hasta 7.5% fijo.',
    keywords: "Condiciones para vender recargas, politicas recarga5g.com, Bait, telcel, recargas electronicas 7.5% comision, recarga5g.com",
    url: 'recarga5g.com/legal/politicas',
    type: 'website',
    image: 'https://recarga5g.com/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  }
  constructor(private readonly title: Title, private readonly meta: MetaTagService) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | nuestras políticas para aplicacion de depósitos, recargas y pago de servicios')
 
    this.meta.generateTags({
      ...this.tag
    })
  }

}
