import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

//*Interfaces importados
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';

//* Servicios importados

import { MetaTagService } from 'src/app/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';

//* Componentes
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { PlanetaemxService } from '@plataformas/services/planetaemx.service';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';

@Component({
    selector: 'app-planetaemx',
    templateUrl: './planetaemx.component.html',
    styles: [`
      .platform-col::before {
     inset-block-start: 0;
      inline-size: 1px;
     block-size: 100vh;
    }

    .platform-col::after {
     inset-block-start: -1px;
      inline-size: 100vw;
     block-size: 1px;
    }
      `],
    imports: [
        CommonModule,
        ProductCarouselComponent,
        AppRecargasComponent,
        SalesMethodComponent,
        RegisterStepsComponent
    ]
})
export default class PlanetaemxComponent implements OnInit {

 productCarousel = signal<ProductCarousel[]>([]);
 appRecargaki = signal<CarouselApp[]>([]);

  title: any;


 private readonly productCarouselService = inject(ProductCarouselService);
 private readonly planetaemxService = inject(PlanetaemxService);

 private readonly metaTagService = inject(MetaTagService);
 private readonly titulo = inject(Title);

  ngOnInit(): void {
    this.titulo.setTitle('Recarga5g.com | Planetaemx plataforma para la venta de recargas Bait');

    this.productCarousel.set( this.productCarouselService.getRecargas() );
    this.appRecargaki.set( this.planetaemxService.getAppRecargaki())
    this.metaTagService.updateMetaTag({
      title: 'Plataformas | Planetaemx plataforma para la venta de recargas multiregion',
      description: 'Obtén una comisión hasta un 7.5% fijo en todos tus depósitos, Genera ganancias extras a tu negocio vendiendo recargas Bait, Telcel, Movistar y muchos mas',
      keywords: "Planetaemx, Recargaki, App Recargaki, App Planetaemx, Cuentas planetaemx, cuentas bancarias planetaemx, cuentas recargaki, cuentas bancarias recargaki, manual planetaemx, manual recargaki, manuales planetaemx, manuales recargaki, vender recargas, plataforma para vender recargas, comision por deposito, venta recargas, comision 7.5 recargas, comision 7.5% recargas, venta de recargas movistar, Movistar, tiempo aire movistar, vender recargas movistar",
      url: 'recarga5g.com/plataforma/planetaemx',
      typeContent: 'website',
    })
  }

}
