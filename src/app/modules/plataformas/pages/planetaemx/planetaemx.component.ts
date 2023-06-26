import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


//*Interfaces importados
import { plataformaProductosModel } from '@core/models/app-plataformas.model';
import { cuentasPlanetaemxModel } from '@core/models/cuentas-plataformas.model';
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
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';


@Component({
  selector: 'app-planetaemx',
  templateUrl: './planetaemx.component.html',
  styleUrls: ['./planetaemx.component.scss', '../plataformas.scss'],
  providers: [AppPlataformasService, MontosPlataformasService, CuentasPlataformasService, ManualesPlataformasService, PoliticasPlataformasService]
})
export class PlanetaemxComponent implements OnInit {

  productosPlanetaemx: productoModel[] = [];
  appPlanetaemx: plataformaProductosModel[] = [];
  montosPlanetaemx: montosModel[] = [];
  cuentasPlanetaemx: cuentasPlanetaemxModel[] = [];
  manualesPlanetaemx: manualesModel[] = [];
  politicas: condicionesPlataformasModel[] = [];
  registerStepPlanetaemx: registerStepsModel[] = [];
  title: any;

    //* META TAG
 tag: metaTagModel = {
  title: 'Recarga5g.com | Planetaemx plataforma para la venta de recargas Bait',
  description: 'Obtén una comisión hasta un 7.5% fijo en todos tus depósitos, Genera ganancias extras a tu negocio vendiendo recargas Bait, Telcel, Movistar y muchos mas',
  keywords: "Planetaemx, Recargaki, App Recargaki, App Planetaemx, Cuentas planetaemx, cuentas bancarias planetaemx, cuentas recargaki, cuentas bancarias recargaki, manual planetaemx, manual recargaki, manuales planetaemx, manuales recargaki, vender recargas, plataforma para vender recargas, comision por deposito, venta recargas, comision 7.5 recargas, comision 7.5% recargas, venta de recargas movistar, Movistar, tiempo aire movistar, vender recargas movistar",
  url: 'recarga5g.com/plataforma/planetaemx',
  type: 'website',
  image: 'https://recarga5g.com/Venta-recargas.png',
  card: 'summary_large_image',
  creator: '@recargascelular'
 }


  constructor(
    private readonly _productosPlanetaemx: ProductosService,
    private readonly _productoPlanetaemx: AppPlataformasService,
    private readonly _montosPlanetaemx: MontosPlataformasService,
    private readonly _cuentasPlanetaemx: CuentasPlataformasService,
    private readonly _manualesPlanetaemx: ManualesPlataformasService,
    private readonly _politicas: PoliticasPlataformasService,
    private readonly _registerStepService: RegisterStepsService,
    private readonly _metaTagService: MetaTagService,
    private readonly titulo: Title) {

  }

  ngOnInit(): void {
    this.titulo.setTitle('Recarga5g.com | Planetaemx plataforma para la venta de recargas Bait');

    this.productosPlanetaemx = this._productosPlanetaemx.getRecargasServicios();
    this.appPlanetaemx = this._productoPlanetaemx.getProductosPlanetaemx();
    this.montosPlanetaemx = this._montosPlanetaemx.getMontosPlanetae();
    this.cuentasPlanetaemx = this._cuentasPlanetaemx.getCuentasPlanetaemx();
    this.manualesPlanetaemx = this._manualesPlanetaemx.getManualesPlanetaemx();
    this.politicas = this._politicas.getPoliticas();
    this.registerStepPlanetaemx = this._registerStepService.getStepsPlanetaemx();

    this._metaTagService.generateTags({
        ...this.tag
    })
  }

}
