import { Component, Renderer2, ViewChild, ElementRef, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

//* Interfaces importados
import { plataformaProductos } from '@core/models/app-plataformas.model';
import { cuentasPagaqui } from '@core/models/cuentas-plataformas.model';
import { horarioPlataformas } from '@core/models/horario-plataformas.model';
import { manuales } from '@core/models/manuales-plataformas.models';
import { montos } from '@core/models/montos-plataformas.model';
import { condicionesPlataformas } from '@core/models/politicas-plataformas.model';
import { productoModel } from '@core/models/productos.model';
import { registerSteps } from '@core/models/register-steps-model';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';

//* Servicios importados
import { AppPlataformasService } from '@plataformas/services/app-plataformas.service';
import { CuentasPlataformasService } from '@plataformas/services/cuentas-plataformas.service';
import { ManualesPlataformasService } from '@plataformas/services/manuales-plataformas.service';
import { MontosPlataformasService } from '@plataformas/services/montos-platafromas.service';
import { PoliticasPlataformasService } from '@plataformas/services/politicas-plataformas.service';

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
  appPagaqui: plataformaProductos[] = [];
  cuentasPagaqui: cuentasPagaqui[] = [];
  montosPagaqui: montos[] = [];
  manualesPagaqui: manuales[] = [];
  politicas: condicionesPlataformas[] = [];
  horarioPagaqui: horarioPlataformas[] = [];
  registerStepPagaqui: registerSteps[] = [];

  constructor(
    private readonly _productosCarouselService: ProductosService,
    private readonly productoPagaquiServirce: AppPlataformasService,
    private readonly _cuentasPagaqui: CuentasPlataformasService,
    private readonly _montoPagaqui: MontosPlataformasService,
    private readonly _manualesPagaqui: ManualesPlataformasService,
    private readonly _politicas: PoliticasPlataformasService,
    private readonly _stepPagaquiService: RegisterStepsService,
    private matDialog: MatDialog,
    private readonly renderer2: Renderer2,
    private readonly title: Title) {
  }


  ngOnInit(): void {
    this.productosPagaqui = this._productosCarouselService.getRecargasServicios();
    this.appPagaqui = this.productoPagaquiServirce.getProductosPagaqui();
    this.cuentasPagaqui = this._cuentasPagaqui.getCuentasPagaqui();
    this.montosPagaqui = this._montoPagaqui.getMontoPagaqui();
    this.manualesPagaqui = this._manualesPagaqui.getManualesPagaqui();
    this.politicas = this._politicas.getPoliticas();
    this.registerStepPagaqui = this._stepPagaquiService.getStepsPagaqui();
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

    this.renderer2.removeAttribute(stopVideo, "src")

  }


}
