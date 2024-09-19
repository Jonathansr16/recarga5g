import { Component, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';


//*Interfaces importados
import { cuentasPlanetaemxModel } from '@core/interfaces/cuentas-plataformas.model';
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
import { MetaTagService } from '@core/services/meta-tag.service';
import { ProductosService } from '@core/services/productos.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { CommonModule } from '@angular/common';

//* Componentes
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-products.component';
import { MontosComponent } from '@plataformas/components/montos/montos.component';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { ManualesComponent } from '@plataformas/components/manuales/manuales.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';

@Component({
  selector: 'app-planetaemx',
  standalone: true,
  templateUrl: './planetaemx.component.html',
  styleUrls: ['./planetaemx.component.scss', '../plataformas.scss'],
  providers: [ 
    MontosPlataformasService, 
    CuentasPlataformasService, 
    ManualesPlataformasService, 
    PoliticasPlataformasService],
  imports: [
    CommonModule,
    CarouselProductosComponent,
    AppRecargasComponent,
    MontosComponent,
    MetodoVentasComponent,
    ManualesComponent,
    RegisterStepsComponent,
  ]
})
export default class PlanetaemxComponent implements OnInit {

  productsPlanetaemx = signal<productoModel[]>([]);
 
  appRecargaki= signal<CarouselApp[]>([

    {
      id: 1,
      img: {
        lightUrl: '/assets/img/plataformas/planetaemx/app-recarki_sesion.webp',
        alt: 'Inición de sesión para la venta de recargas bait'
      }
    },

    {
      id: 2,
      img: {
        lightUrl: '/assets/img/plataformas/planetaemx/app-recarki_recargas.webp',
        alt: 'Sistema de recargas'
      }
    },

    {
      id: 3,
      img: {
        lightUrl: '/assets/img/plataformas/planetaemx/app-recarki_servicios.webp',
        alt: 'Sistema para cobro de servicios'
      }
    },

    {
      id: 4,
      img: {
        lightUrl: '/assets/img/plataformas/planetaemx/app-recarki_ventas.webp',
        alt: 'Reporte de ventas de recargas'
      }
    },

    {
      id: 5,
      img: {
        lightUrl: '/assets/img/plataformas/planetaemx/app-recarki_reporte.webp',
        alt: 'Reporte de ventas de recargas'
      }
    }

  ]);
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
