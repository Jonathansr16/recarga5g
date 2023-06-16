import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from '@core/models/meta-tag.model';
import { MetaTagService } from '@core/services/meta-tag.service';

@Component({
  selector: 'app-repoplanetaemx',
  templateUrl: './repoplanetaemx.component.html',
  styleUrls: ['./repoplanetaemx.component.scss', '../../reportes.component.scss']
})
export class RepoplanetaemxComponent implements OnInit {

  tag:metaTagModel = {
    title: 'Recarga5g.com | Reporte de depósitos y/o transferencias Planetaemx',
    description: 'A continuación podrás notificar tus depósitos desde nuestro sitio web para que empieces a generar ganancias por las ventas de recargas multiregión Telcel, Bait, Movistar, y muchos mas!!',
    keywords: 'Notificación de depositos para venta de recargas, reporte de depositos para vender recargas, Reporte de deposito planetaemx, Reporte de deposito Recargaki, Notificación de depósito Planetaemx, notificación de depósito Recargaki, Recarga5g.com',
    url: 'recarga5g.com/reporte/reportePlanetaemx',
  type: 'website',
  image: '/assets/img/Venta-recargas.png',
  card: 'summary_large_image',
  creator: '@recargascelular',
  }


  constructor(private readonly title: Title, private meta: MetaTagService) { }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Reporte de depósitos y/o transferencias Planetaemx');

    this.meta.generateTags({
      ...this.tag
    })
  }

}
