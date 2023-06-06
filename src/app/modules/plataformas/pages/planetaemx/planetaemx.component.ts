import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//*Interfaces importados
import { plataformaProductos } from '@core/models/app-plataformas.model';
import { cuentasPlanetaemx } from '@core/models/cuentas-plataformas.model';
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
  selector: 'app-planetaemx',
  templateUrl: './planetaemx.component.html',
  styleUrls: ['./planetaemx.component.scss', '../plataformas.scss'],
  providers: [AppPlataformasService, MontosPlataformasService, CuentasPlataformasService, ManualesPlataformasService, PoliticasPlataformasService]
})
export class PlanetaemxComponent implements OnInit {

  productosPlanetaemx: productoModel[] = [];
  appPlanetaemx: plataformaProductos[] = [];
  montosPlanetaemx: montos[] = [];
  cuentasPlanetaemx: cuentasPlanetaemx[] = [];
  manualesPlanetaemx: manuales[] = [];
  politicas: condicionesPlataformas[] = [];
  registerStepPlanetaemx: registerSteps[] = [];
  title: any;

  constructor(
    private readonly _productosPlanetaemx: ProductosService,
    private readonly _productoPlanetaemx: AppPlataformasService,
    private readonly _montosPlanetaemx: MontosPlataformasService,
    private readonly _cuentasPlanetaemx: CuentasPlataformasService,
    private readonly _manualesPlanetaemx: ManualesPlataformasService,
    private readonly _politicas: PoliticasPlataformasService,
    private readonly _registerStepService: RegisterStepsService) {

  }

  ngOnInit(): void {
    this.productosPlanetaemx = this._productosPlanetaemx.getRecargasServicios();
    this.appPlanetaemx = this._productoPlanetaemx.getProductosPlanetaemx();
    this.montosPlanetaemx = this._montosPlanetaemx.getMontosPlanetae();
    this.cuentasPlanetaemx = this._cuentasPlanetaemx.getCuentasPlanetaemx();
    this.manualesPlanetaemx = this._manualesPlanetaemx.getManualesPlanetaemx();
    this.politicas = this._politicas.getPoliticas();
    this.registerStepPlanetaemx = this._registerStepService.getStepsPlanetaemx();

  }

}
