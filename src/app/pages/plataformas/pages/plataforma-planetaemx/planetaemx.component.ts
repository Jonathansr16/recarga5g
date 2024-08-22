import { Component, inject, OnInit, signal } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-products.component';
import { MobileAppComponent } from '@plataformas/components/mobile-app/mobile-app.component';
import { MontosComponent } from '@plataformas/components/montos/montos.component';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { ManualesComponent } from '@plataformas/components/manuales/manuales.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';


@Component({
  selector: 'app-planetaemx',
  standalone: true,
  templateUrl: './planetaemx.component.html',
  styleUrls: ['./planetaemx.component.scss', '../plataformas.scss'],
  providers: [ 
    AppPlataformasService, 
    MontosPlataformasService, 
    CuentasPlataformasService, 
    ManualesPlataformasService, 
    PoliticasPlataformasService],
  imports: [
    CommonModule,
    CarouselProductosComponent,
    MobileAppComponent,
    MontosComponent,
    MetodoVentasComponent,
    ManualesComponent,
    RegisterStepsComponent,
  ]
})
export default class PlanetaemxComponent implements OnInit {

  productsPlanetaemx = signal<productoModel[]>([]);
  planetaemxApp= signal<plataformaProductosModel[]>([]);
  montosPlanetaemx = signal<montosModel[]>([]);
  cuentasPlanetaemx = signal<cuentasPlanetaemxModel[]>([]);
  planetaemxManuals = signal<manualesModel[]>([]);
  planetaemxPolicies = signal<condicionesPlataformasModel[]>([]);
  registerStepPlanetaemx = signal<registerStepsModel[]>([]);
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


 private readonly _productosPlanetaemx = inject(ProductosService);
 private readonly _productoPlanetaemx = inject(AppPlataformasService);
 private readonly _montosPlanetaemx = inject(MontosPlataformasService);
 private readonly _cuentasPlanetaemx = inject(CuentasPlataformasService);
 private readonly _manualesPlanetaemx = inject(ManualesPlataformasService);
 private readonly _politicas = inject(PoliticasPlataformasService);
 private readonly _registerStepService = inject(RegisterStepsService);
 private readonly _metaTagService = inject(MetaTagService);
 private readonly titulo = inject(Title);

  ngOnInit(): void {
    this.titulo.setTitle('Recarga5g.com | Planetaemx plataforma para la venta de recargas Bait');

    this.productsPlanetaemx.set( this._productosPlanetaemx.getRecargasServicios() );
    this.planetaemxApp.set( this._productoPlanetaemx.getProductosPlanetaemx() );
    this.montosPlanetaemx.set( this._montosPlanetaemx.getMontosPlanetae() );
    this.cuentasPlanetaemx.set( this._cuentasPlanetaemx.getCuentasPlanetaemx() );
    this.planetaemxManuals.set( this._manualesPlanetaemx.getManualesPlanetaemx() );
    this.planetaemxPolicies.set( this._politicas.getPoliticas() );
    this.registerStepPlanetaemx.set( this._registerStepService.getStepsPlanetaemx() );

    this._metaTagService.generateTags({
        ...this.tag
    })
  }

}
