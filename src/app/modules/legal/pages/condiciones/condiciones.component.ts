import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';

@Component({
  selector: 'app-condiciones',
  standalone: true,
  templateUrl: './condiciones.component.html',
  styleUrls: ['./condiciones.component.scss']
})
export default class CondicionesComponent implements OnInit {

    //? META TAG
 tag: metaTagModel = {
  title: 'Recarga5g.com | Consulta nuestras condiciones de uso de nuestras plataformas',
  description: 'Consulta nuestras condiciones para que puedas vender sin inconvenientes recargas a cualquier compañia Telcel, Movistar, Bait, y mucho mas! ',
  keywords: 'Condiciones para venta de recargas, condiciones para vender tiempo aire, Recarga5g.com, telcel, venta de recargas telcel',
  url: 'recarga5g.com/legal/condiciones',
  type: 'website',
  image: 'https://recarga5g.com/Venta-recargas.png',
  card: 'summary_large_image',
  creator: '@recargascelular',
 }

 private readonly title = inject( Title ); 
 private readonly meta = inject( MetaTagService );

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Consulta nuestras condiciones de uso de nuestras plataformas');
  

    this.meta.generateTags({
      ...this.tag
    })
  }

}
