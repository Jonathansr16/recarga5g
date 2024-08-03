import { Component, Renderer2, ViewChild, ElementRef, TemplateRef, OnInit, AfterViewInit, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-productos.component';
import { MobileAppComponent } from '@plataformas/components/mobile-app/mobile-app.component';
import { MatIconModule } from '@angular/material/icon';
import { MontosComponent } from '@plataformas/components/montos/montos.component';
import { CommonModule } from '@angular/common';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { ManualesComponent } from '@plataformas/components/manuales/manuales.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';

@Component({
  selector: 'app-plataforma-pagaqui',
  standalone: true,
  templateUrl: './plataforma-pagaqui.component.html',
  styleUrls: ['./plataforma-pagaqui.component.scss', '../plataformas.scss'],
  providers: [
    AppPlataformasService, 
    CuentasPlataformasService, 
    MontosPlataformasService,
    ManualesPlataformasService, 
    PoliticasPlataformasService],
  imports: [
    CommonModule,
    CarouselProductosComponent,
    MobileAppComponent,
    MatIconModule,
    MatDialogModule,
    MontosComponent,
    MetodoVentasComponent,
    ManualesComponent,
    RegisterStepsComponent,
  ]
})
export default class PlataformaPagaquiComponent implements OnInit, AfterViewInit{

  @ViewChild('modalTemplate') template = {} as TemplateRef<any>
  @ViewChild('videoPagaqui') video?: ElementRef;
   showVideo = signal<boolean>(false);

  btnVideo = signal<boolean>(false);
  productsPagaqui = signal<productoModel[]>( [] )
  appPagaqui = signal<plataformaProductosModel[]>( [] )
  accountPagaqui = signal<cuentasPagaquiModel[]>( [] )
  amountsPagaqui = signal<montosModel[]>( [] )
  manualsPagaqui = signal<manualesModel[]>( [] )
  policiesPagaqui = signal<condicionesPlataformasModel[]>( [] )
  schedulesPagaqui = signal<horarioPlataformasModel[]>( [] )
  registerStepPagaqui = signal<registerStepsModel[]>( [] )

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

  private readonly _productosCarouselService = inject( ProductosService );
  private readonly productoPagaquiServirce = inject( AppPlataformasService );
  private readonly _cuentasPagaqui = inject( CuentasPlataformasService );
  private readonly _montoPagaqui = inject( MontosPlataformasService );
  private readonly _manualesPagaqui = inject( ManualesPlataformasService );
  private readonly _politicas = inject( PoliticasPlataformasService );
  private readonly _stepPagaquiService = inject( RegisterStepsService );
  private readonly _metaTagService = inject( MetaTagService );
  private readonly matDialog = inject(MatDialog );
  private readonly renderer2 = inject( Renderer2 );
  private readonly title = inject( Title );

  ngOnInit(): void {

    this.title.setTitle(
      'Recarga5g.com | Consulta para vender recargas electrónicas'
    );

    this.productsPagaqui.set( this._productosCarouselService.getRecargasServicios() );
    this.appPagaqui.set( this.productoPagaquiServirce.getProductosPagaqui() );
    this.accountPagaqui.set( this._cuentasPagaqui.getCuentasPagaqui() );
    this.amountsPagaqui.set( this._montoPagaqui.getMontoPagaqui() );
    this.manualsPagaqui.set( this._manualesPagaqui.getManualesPagaqui() );
    this.policiesPagaqui.set( this._politicas.getPoliticas() );
    this.registerStepPagaqui.set( this._stepPagaquiService.getStepsPagaqui() );
  
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
  
    
     this.showVideo.set(true);
  }


  /* =========== CLOSE VIDEO PAGAQUI =========== */
  closeVideo(): void {
    this.btnVideo.set(false);

    const stopVideo = this.video?.nativeElement;

    this.renderer2.removeAttribute(stopVideo, "src");
  }


}
