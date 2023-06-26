import { Component, Renderer2, ViewChild, ElementRef, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

//* Interfaces importados
import { plataformaProductosModel } from '@core/models/app-plataformas.model';
import { cuentasPagaquiModel } from '@core/models/cuentas-plataformas.model';
import { horarioPlataformasModel } from '@core/models/horario-plataformas.model';
import { manualesModel } from '@core/models/manuales-plataformas.models';
import { metaTagModel } from '@core/models/meta-tag.model';
import { montosModel } from '@core/models/montos-plataformas.model';
import { condicionesPlataformasModel } from '@core/models/politicas-plataformas.model';
import { productoModel } from '@core/models/productos.model';
import { registerStepsModel } from '@core/models/register-steps-model';


//* Servicios importados
import { AppPlataformasService } from '@plataformas/services/app-plataformas.service';
import { CuentasPlataformasService } from '@plataformas/services/cuentas-plataformas.service';
import { ManualesPlataformasService } from '@plataformas/services/manuales-plataformas.service';
import { MontosPlataformasService } from '@plataformas/services/montos-platafromas.service';
import { PoliticasPlataformasService } from '@plataformas/services/politicas-plataformas.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';

@Component({
  selector: 'app-pagaqui',
  templateUrl: './pagaqui.component.html',
  styleUrls: ['./pagaqui.component.scss', '../plataformas.scss'],
  providers: [AppPlataformasService, CuentasPlataformasService, MontosPlataformasService, ManualesPlataformasService, PoliticasPlataformasService]
})
export class PagaquiComponent implements OnInit, AfterViewInit{

  @ViewChild('modalTemplate') template = {} as TemplateRef<any>
  @ViewChild('videoPagaqui') video?: ElementRef;
  showVideo: boolean= false;
  public btnVideo: boolean = false;
  productosPagaqui: productoModel[] = [];
  appPagaqui: plataformaProductosModel[] = [];
  cuentasPagaqui: cuentasPagaquiModel[] = [];
  montosPagaqui: montosModel[] = [];
  manualesPagaqui: manualesModel[] = [];
  politicas: condicionesPlataformasModel[] = [];
  horarioPagaqui: horarioPlataformasModel[] = [];
  registerStepPagaqui: registerStepsModel[] = [];

  //? META TAG
  tag: metaTagModel = {

    title: "Recarga5g.com | Consulta como vender recargas electrónicas",
    description: "Con un único saldo vende recargas electrónicas, pago de servicios y pines electrónicos hasta un 7% de comisión",
    keywords: "Pagaqui, cuentas Pagaqui, cuenta bancarias pagaqui, cuentas para saldo de recargas, app pagaqui, aplicación pagaqui, Plataforma para venta de recargas, Plataforma para venta de recargas telefonicas, manuales pagaqui, manual de usuario pagaqui, comision 7%, comisión por venta de recargas, Bait, venta de recargas bait, tiempo aire bait, vender recargas bait",
    url: "recarga5g.com/plataforma/pagaqui",
    type: "website",
    card: "summary_large_image",
    creator: "@recargascelular",
    image: "https://recarga5g.com/Venta-recargas.png",
  }


  constructor(
    private readonly _productosCarouselService: ProductosService,
    private readonly productoPagaquiServirce: AppPlataformasService,
    private readonly _cuentasPagaqui: CuentasPlataformasService,
    private readonly _montoPagaqui: MontosPlataformasService,
    private readonly _manualesPagaqui: ManualesPlataformasService,
    private readonly _politicas: PoliticasPlataformasService,
    private readonly _stepPagaquiService: RegisterStepsService,
    private readonly _metaTagService: MetaTagService,
    private matDialog: MatDialog,
    private readonly renderer2: Renderer2,
    private readonly title: Title) {
  }


  ngOnInit(): void {

    this.title.setTitle(
      'Recarga5g.com | Consulta para vender recargas electrónicas'
    );

    this.productosPagaqui = this._productosCarouselService.getRecargasServicios();
    this.appPagaqui = this.productoPagaquiServirce.getProductosPagaqui();
    this.cuentasPagaqui = this._cuentasPagaqui.getCuentasPagaqui();
    this.montosPagaqui = this._montoPagaqui.getMontoPagaqui();
    this.manualesPagaqui = this._manualesPagaqui.getManualesPagaqui();
    this.politicas = this._politicas.getPoliticas();
    this.registerStepPagaqui = this._stepPagaquiService.getStepsPagaqui();
  
    this._metaTagService.generateTags( {
      ...this.tag
    })
  
  }

  
  ngAfterViewInit(): void {
     
  }
  /* =========== OPEN VIDEO PAGAQUI =========== */
  openVideo(): void {
    this.matDialog.open(this.template, {
      width: '850px',
      height: '500px'
    });
  
    this.showVideo= true;
  }


  /* =========== CLOSE VIDEO PAGAQUI =========== */
  closeVideo(): void {
    this.btnVideo = false;

    const stopVideo = this.video?.nativeElement;

    this.renderer2.removeAttribute(stopVideo, "src");
  }


}
