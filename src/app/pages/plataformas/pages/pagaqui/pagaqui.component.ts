import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  TemplateRef,
  OnInit,
  AfterViewInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

//* Interfaces importados
import { cuentasPagaquiModel } from '@core/interfaces/cuentas-plataformas.model';
import { horarioPlataformasModel } from '@core/interfaces/horario-plataformas.model';
import { manualesModel } from '@core/interfaces/manuales-plataformas.models';
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { montosModel } from '@core/interfaces/montos-plataformas.model';
import { condicionesPlataformasModel } from '@core/interfaces/politicas-plataformas.model';
import { registerStepsModel } from '@core/interfaces/register-steps-model';

//* Servicios importados

import { RegisterStepsService } from '@core/services/register-steps.service';
import { MetaTagService } from '@core/services/meta-tag.service';

//* Components
import { ProductCarouselComponent } from '@feature/components/carousel-productos/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '../../../../feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarousel } from '@core/interfaces/product-carousel.interface';
import { ProductCarouselService } from '@feature/components/carousel-productos/services/product-carousel.service';
import { PagaquiService } from './services/pagaqui.service';
import { RegisterComponent } from '@feature/components/register/register.component';
import { ProductsComponent } from '@feature/components/products/products.component';

@Component({
  selector: 'app-plataforma-pagaqui',
  standalone: true,
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.scss', '../plataformas.scss'],
  imports: [
    CommonModule,
    ProductCarouselComponent,
    ProductsComponent,
    SalesMethodComponent,
    AppRecargasComponent,
    RegisterComponent
  ],
})
export default class PlataformaPagaquiComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('modalTemplate') template = {} as TemplateRef<any>;
  @ViewChild('videoPagaqui') video?: ElementRef;

  handlerModalVideo = signal<boolean>(false);

  productCarousel = signal<ProductCarousel[]>([]);
  appPagaqui = signal<CarouselApp[]>([]);
  accountPagaqui = signal<cuentasPagaquiModel[]>([]);
  amountsPagaqui = signal<montosModel[]>([]);
  manualsPagaqui = signal<manualesModel[]>([]);
  policiesPagaqui = signal<condicionesPlataformasModel[]>([]);
  schedulesPagaqui = signal<horarioPlataformasModel[]>([]);
  registerStepPagaqui = signal<registerStepsModel[]>([]);


  //? META TAG
  // tag: metaTagModel = {
  //   title: 'Recarga5g.com | Consulta como vender recargas electrónicas',
  //   description:
  //     'Con un único saldo vende recargas electrónicas, pago de servicios y pines electrónicos hasta un 7% de comisión',
  //   keywords:
  //     'Pagaqui, cuentas Pagaqui, cuenta bancarias pagaqui, cuentas para saldo de recargas, app pagaqui, aplicación pagaqui, Plataforma para venta de recargas, Plataforma para venta de recargas telefonicas, manuales pagaqui, manual de usuario pagaqui, comision 7%, comisión por venta de recargas, Bait, venta de recargas bait, tiempo aire bait, vender recargas bait',
  //   url: 'recarga5g.com/plataforma/pagaqui',
  //   type: 'website',
  //   card: 'summary_large_image',
  //   creator: '@recargascelular',
  //   image: 'https://recarga5g.com/Venta-recargas.png',
  // };

  
  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly pagaquiService = inject(PagaquiService);

  private readonly stepPagaquiService = inject(RegisterStepsService);
  private readonly metaTagService = inject(MetaTagService);
  private readonly renderer2 = inject(Renderer2);
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Consulta para vender recargas electrónicas'
    );

    this.productCarousel.set(this.productCarouselService.getAllProducts());
    this.appPagaqui.set(this.pagaquiService.getAppPagaqui());
    this.registerStepPagaqui.set(this.stepPagaquiService.getStepsPagaqui());

  
    this.metaTagService.updateMetaTag(
      {
        title: 'Plataformas | Pagaqui comisión hasta un 7% por venta de recargas',
        description: 'Con un unico saldo vende recargas, pago de servicios y tarjeta de regalo',
        keywords: 'Pagaqui, recargas electronicas 7%,  comision 7 por la venta de recargas, contacto pagaqui, cuentas pagaqui, app pagaqui',
        url: 'https://recarga5g.com/plataformas/pagaqui',
        typeContent: 'website'
      }
    )
  }

  ngAfterViewInit(): void {}

  openVideo(): void {

    this.handlerModalVideo.set(true);
  }

  closeVideo(): void {
    this.handlerModalVideo.set(false);
  }

  // closeVideo(): void {
  //   this.btnVideo.set(false);

  //   const stopVideo = this.video?.nativeElement;

  //   this.renderer2.removeAttribute(stopVideo, 'src');
  // }
}
