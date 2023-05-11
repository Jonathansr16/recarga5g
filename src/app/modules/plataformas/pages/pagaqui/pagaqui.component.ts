import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Interfaces importados
import { plataformaProductos } from '@core/models/app-plataformas.model';
import { cuentasPagaqui } from '@core/models/cuentas-plataformas.model';
import { horarioPlataformas } from '@core/models/horario-plataformas.model';
import { manuales } from '@core/models/manuales-plataformas.models';
import { montos } from '@core/models/montos-plataformas.model';
import { condicionesPlataformas } from '@core/models/politicas-plataformas.model';

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
export class PagaquiComponent implements OnInit {

  @ViewChild('videoPagaqui') video?: ElementRef;
  public btnVideo: boolean = false;
  appPagaqui: plataformaProductos[] = [];
  cuentasPagaqui: cuentasPagaqui[] = [];
  montosPagaqui: montos[] = [];
  manualesPagaqui: manuales[] = [];
  politicas: condicionesPlataformas[] = [];
  horarioPagaqui: horarioPlataformas[] = [];

  constructor(private productoPagaquiServirce: AppPlataformasService,
    private _cuentasPagaqui: CuentasPlataformasService,
    private _montoPagaqui: MontosPlataformasService,
    private _manualesPagaqui: ManualesPlataformasService,
    private _politicas: PoliticasPlataformasService,
    private readonly renderer2: Renderer2,
    private readonly title: Title) {

   
  }


  ngOnInit(): void {
    this.appPagaqui = this.productoPagaquiServirce.getProductosPagaqui();
    this.cuentasPagaqui = this._cuentasPagaqui.getCuentasPagaqui();
    this.montosPagaqui = this._montoPagaqui.getMontoPagaqui();
    this.manualesPagaqui = this._manualesPagaqui.getManualesPagaqui();
    this.politicas = this._politicas.getPoliticas();
  }

  /* =========== OPEN VIDEO PAGAQUI =========== */
  openVideo(): void {
    this.btnVideo = true;

    const repVideo = this.video?.nativeElement;

    this.renderer2.setAttribute(repVideo, "src", "/assets/img/comision-pagaqui.mp4")
  }


  /* =========== CLOSE VIDEO PAGAQUI =========== */
  closeVideo(): void {
    this.btnVideo = false;

    const stopVideo = this.video?.nativeElement;

    this.renderer2.removeAttribute(stopVideo, "src")

  }


}
