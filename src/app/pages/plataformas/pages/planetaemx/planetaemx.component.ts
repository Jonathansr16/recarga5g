import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

//*Interfaces importados
import { metaTagModel } from '@core/interfaces/meta-tag.model';

//* Servicios importados

import { MetaTagService } from '@core/services/meta-tag.service';

//* Componentes
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { ProductCarousel } from '@core/interfaces/product-carousel.interface';
import { ProductCarouselService } from '@feature/components/carousel-productos/services/product-carousel.service';
import { ProductCarouselComponent } from '@feature/components/carousel-productos/product-carousel.component';
import { PlanetaemxService } from '@plataformas/services/planetaemx.service';
import { RegisterComponent } from '@feature/components/register/register.component';

@Component({
  selector: 'app-planetaemx',
  standalone: true,
  templateUrl: './planetaemx.component.html',
  styleUrls: ['./planetaemx.component.scss', '../plataformas.scss'],
  imports: [
    CommonModule,
    ProductCarouselComponent,
    AppRecargasComponent,
    SalesMethodComponent,
    RegisterComponent
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

    this.productCarousel.set( this.productCarouselService.getAllProducts() );
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
