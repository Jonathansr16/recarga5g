import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@interfaces/meta-tag.model';
import { MetaTagService } from '@services/meta-tag.service';

@Component({
  selector: 'app-recargaki-planetaemx',
  standalone: true,
  templateUrl: './recargaki-planetaemx.component.html',
  styleUrl: './recargaki-planetaemx.component.scss'
})
export default class RecargakiPlanetaemxComponent implements OnInit {

  tag:metaTagModel = {
    title: 'Recarga5g.com | Reporte de depósitos y/o transferencias Planetaemx',
    description: 'A continuación podrás notificar tus depósitos desde nuestro sitio web para que empieces a generar ganancias por las ventas de recargas multiregión Telcel, Bait, Movistar, y muchos mas!!',
    keywords: 'Notificación de depositos para venta de recargas, reporte de depositos para vender recargas, Reporte de deposito planetaemx, Reporte de deposito Recargaki, Notificación de depósito Planetaemx, notificación de depósito Recargaki, Recarga5g.com',
    url: 'recarga5g.com/reporte/reportePlanetaemx',
  type: 'website',
  image: 'https://recarga5g.com/Venta-recargas.png',
  card: 'summary_large_image',
  creator: '@recargascelular',
  }

  private readonly title = inject(Title);
  private meta = inject(MetaTagService);
  
  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Reporte de depósitos y/o transferencias Planetaemx');

    // this.meta.generateTags({
    //   ...this.tag
    // })
  }

}
