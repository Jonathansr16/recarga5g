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
import { Title } from '@angular/platform-browser';

//* Interfaces importados
import { cuentasPagaquiModel } from '@core/interfaces/cuentas-plataformas.model';
import { horarioPlataformasModel } from '@core/interfaces/horario-plataformas.model';
import { manualesModel } from '@core/interfaces/manuales-plataformas.models';
import { metaTagModel } from '@core/interfaces/meta-tag.model';
import { montosModel } from '@core/interfaces/montos-plataformas.model';
import { condicionesPlataformasModel } from '@core/interfaces/politicas-plataformas.model';
import { productoModel } from '@core/interfaces/productos.model';
import { registerStepsModel } from '@core/interfaces/register-steps-model';

//* Servicios importados
import { CuentasPlataformasService } from '@plataformas/services/cuentas-plataformas.service';
import { ManualesPlataformasService } from '@plataformas/services/manuales-plataformas.service';
import { MontosPlataformasService } from '@plataformas/services/montos-platafromas.service';
import { PoliticasPlataformasService } from '@plataformas/services/politicas-plataformas.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-products.component';
import { MontosComponent } from '@plataformas/components/montos/montos.component';
import { CommonModule } from '@angular/common';

//* Components
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { ManualesComponent } from '@plataformas/components/manuales/manuales.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';
import { AppRecargasComponent } from '../../../../feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';

@Component({
  selector: 'app-plataforma-pagaqui',
  standalone: true,
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.scss', '../plataformas.scss'],
  providers: [
    CuentasPlataformasService,
    MontosPlataformasService,
    ManualesPlataformasService,
    PoliticasPlataformasService,
  ],
  imports: [
    CommonModule,
    CarouselProductosComponent,

    MontosComponent,
    MetodoVentasComponent,
    ManualesComponent,
    RegisterStepsComponent,
    AppRecargasComponent,
  ],
})
export default class PlataformaPagaquiComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('modalTemplate') template = {} as TemplateRef<any>;
  @ViewChild('videoPagaqui') video?: ElementRef;
  showVideo = signal<boolean>(false);
  btnVideo = signal<boolean>(false);
  productsPagaqui = signal<productoModel[]>([]);
  accountPagaqui = signal<cuentasPagaquiModel[]>([]);
  amountsPagaqui = signal<montosModel[]>([]);
  manualsPagaqui = signal<manualesModel[]>([]);
  policiesPagaqui = signal<condicionesPlataformasModel[]>([]);
  schedulesPagaqui = signal<horarioPlataformasModel[]>([]);
  registerStepPagaqui = signal<registerStepsModel[]>([]);

  appPagaqui = signal<CarouselApp[]>([
    {
      id: 1,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__sesion.webp',
        alt: 'Inicio de sesión a sistema de recargas',
      },
    },

    {
      id: 2,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__recarga.webp',
        alt: 'Venta de recargas telcel',
      },
    },

    {
      id: 3,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__servicios.webp',
        alt: 'Sistema para pago de servicios',
      },
    },

    {
      id: 4,
      img: {
        lightUrl: '/assets/img/plataformas/pagaqui/app-pagaqui__pines.webp',
        alt: 'Sistema para venta de tarjetas de regalo',
      },
    },
  ]);

  //? META TAG
  tag: metaTagModel = {
    title: 'Recarga5g.com | Consulta como vender recargas electrónicas',
    description:
      'Con un único saldo vende recargas electrónicas, pago de servicios y pines electrónicos hasta un 7% de comisión',
    keywords:
      'Pagaqui, cuentas Pagaqui, cuenta bancarias pagaqui, cuentas para saldo de recargas, app pagaqui, aplicación pagaqui, Plataforma para venta de recargas, Plataforma para venta de recargas telefonicas, manuales pagaqui, manual de usuario pagaqui, comision 7%, comisión por venta de recargas, Bait, venta de recargas bait, tiempo aire bait, vender recargas bait',
    url: 'recarga5g.com/plataforma/pagaqui',
    type: 'website',
    card: 'summary_large_image',
    creator: '@recargascelular',
    image: 'https://recarga5g.com/Venta-recargas.png',
  };

  private readonly _productosCarouselService = inject(ProductosService);
  private readonly _cuentasPagaqui = inject(CuentasPlataformasService);
  private readonly _montoPagaqui = inject(MontosPlataformasService);
  private readonly _manualesPagaqui = inject(ManualesPlataformasService);
  private readonly _politicas = inject(PoliticasPlataformasService);
  private readonly _stepPagaquiService = inject(RegisterStepsService);
  private readonly _metaTagService = inject(MetaTagService);
  private readonly renderer2 = inject(Renderer2);
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Consulta para vender recargas electrónicas'
    );

    this.productsPagaqui.set(
      this._productosCarouselService.getRecargasServicios()
    );
    this.accountPagaqui.set(this._cuentasPagaqui.getCuentasPagaqui());
    this.amountsPagaqui.set(this._montoPagaqui.getMontoPagaqui());
    this.manualsPagaqui.set(this._manualesPagaqui.getManualesPagaqui());
    this.policiesPagaqui.set(this._politicas.getPoliticas());
    this.registerStepPagaqui.set(this._stepPagaquiService.getStepsPagaqui());

    this._metaTagService.generateTags({
      ...this.tag,
    });
  }

  ngAfterViewInit(): void {}
  /* =========== OPEN VIDEO PAGAQUI =========== */
  openVideo(): void {
    // this.matDialog.open(this.template, {
    //   width: '850px',
    //   height: '500px',
    // });

    // this.showVideo.set(true);
  }

  /* =========== CLOSE VIDEO PAGAQUI =========== */
  closeVideo(): void {
    this.btnVideo.set(false);

    const stopVideo = this.video?.nativeElement;

    this.renderer2.removeAttribute(stopVideo, 'src');
  }
}
