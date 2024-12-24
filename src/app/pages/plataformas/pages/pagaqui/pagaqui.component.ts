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
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { registerStepsModel } from 'src/app/interfaces/register-steps-model';

//* Servicios importados

import { MetaTagService } from 'src/app/services/meta-tag.service';
import { RegisterStepsService } from 'src/app/services/register-steps.service';
import { PagaquiService } from './services/pagaqui.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
//* Components
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '../../../../feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';

@Component({
  selector: 'app-plataforma-pagaqui',
  standalone: true,
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.scss', '../plataformas.scss'],
  imports: [
    CommonModule,
    ProductCarouselComponent,
    SalesMethodComponent,
    AppRecargasComponent,
    RegisterStepsComponent
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
        title: 'Plataformas | Pagaqui venta de recargas electrónicas telcel para negocios',
        description: 'Plataforma para venta de recargas electrónicas Telcel, y mas servicios en MX, desde tu negocio',
        keywords: 'pagaqui, venta de recargas telcel, recargas telcel, tiempo aire telcel, vender recargas telcel, contacto pagaqui, cuentas pagaqui, vender recargas mexico',
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
