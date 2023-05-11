import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//*Interfaces importados
import { plataformaProductos } from '@core/models/app-plataformas.model';
import { cuentasPlanetaemx } from '@core/models/cuentas-plataformas.model';
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
  selector: 'app-planetaemx',
  templateUrl: './planetaemx.component.html',
  styleUrls: ['./planetaemx.component.scss', '../plataformas.scss'],
  providers: [AppPlataformasService, MontosPlataformasService, CuentasPlataformasService, ManualesPlataformasService, PoliticasPlataformasService]
})
export class PlanetaemxComponent implements OnInit{

  appPlanetaemx: plataformaProductos[] = [];
  montosPlanetaemx: montos[] = [];
  cuentasPlanetaemx: cuentasPlanetaemx[] = [];
  manualesPlanetaemx: manuales[] = [];
  politicas: condicionesPlataformas[] = [];
  title: any;

  constructor (private _productoPlanetaemx: AppPlataformasService,
               private _montosPlanetaemx: MontosPlataformasService,
               private _cuentasPlanetaemx: CuentasPlataformasService,
               private _manualesPlanetaemx: ManualesPlataformasService,
               private _politicas: PoliticasPlataformasService ) {

  }

  ngOnInit(): void {
    this.appPlanetaemx = this._productoPlanetaemx.getProductosPlanetaemx();
    this.montosPlanetaemx = this._montosPlanetaemx.getMontosPlanetae();
    this.cuentasPlanetaemx = this._cuentasPlanetaemx.getCuentasPlanetaemx();
    this.manualesPlanetaemx = this._manualesPlanetaemx.getManualesPlanetaemx();
  this.politicas = this._politicas.getPoliticas();
 
  }

}
