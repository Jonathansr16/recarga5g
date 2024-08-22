import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';

import { Title } from '@angular/platform-browser';

//* Servicios importados
import { razonesModel } from '@core/models/razones.model';
import { negocioModel } from '@core/models/negocios.model';
import { productoModel } from '@core/models/productos.model';
import { MetodosVentaModel } from '@core/models/metodos-venta.model';
import { registerStepsModel } from '@core/models/register-steps-model';
import { metaTagModel } from '@core/models/meta-tag.model';

//* Librerias externas usadas
//T-WRITER JS
// @ts-ignore
import Typewriter from 't-writer.js';

//*INTERFACES
import { MetodosVentaService } from '@core/services/metodos-venta.service';
import { RegisterStepsService } from '@core/services/register-steps.service';
import { ProductosService } from '@core/services/productos.service';
import { MetaTagService } from '@core/services/meta-tag.service';
import { RazonesService } from '@core/services/razones.service';
import { CanonicalLinkService } from '@core/services/canonical-link.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CarouselProductosComponent } from '@feature/components/carousel-productos/carousel-products.component';
import { ProductosFilterComponent } from '@feature/components/productos-filter/productos-filter.component';
import { RegisterStepsComponent } from '@feature/components/register/register-steps.component';
import { MetodoVentasComponent } from '@feature/components/metodo-ventas/metodo-ventas.component';
import { inject } from '@angular/core';
import { NegocioService } from '@core/services/negocio.service';
import { MatButtonModule } from '@angular/material/button';
import { AppRecargasComponent } from "@feature/components/app-recargas/app-recargas.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  providers: [RazonesService, NegocioService],
  imports: [
    CommonModule,
    MatIconModule,
    CarouselProductosComponent,
    ProductosFilterComponent,
    MetodoVentasComponent,
    AppRecargasComponent,
    RegisterStepsComponent,
    MatButtonModule,
    AppRecargasComponent
]
})
export default class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('productosSwiper') prodSwiper?: ElementRef;
  @ViewChild('menuAbout') menuAbout?: ElementRef;
  @ViewChild('textDinamic') textDinamico?: ElementRef;
  @ViewChildren('counter') counters?: QueryList<ElementRef>;

  showModal = signal<boolean>(false);
  item = signal<razonesModel[]>([]);
  negocios = signal<negocioModel[]>([]);
  metodosVenta = signal<MetodosVentaModel[]>([]);
  stepsRegister = signal<registerStepsModel[]>([]);
  products = signal<productoModel[]>([]);

  records = [
    {

      img: {
        src: '/assets',
        alt: ''
      },
      label: 'Clientes Felices',
      count: 4000
    },

    {
      img: {
        src: '',
        alt: ''
      },
      label: 'Años en el mercado',
      count: 20
    },

    {
      img: {
        src: '',
        alt: ''
      },
      label: 'Puntos de venta',
      count: 1800
    },

    {
      img: {
        src: '',
        alt: ''
      },
      label: 'Compañias de Servicios',
      count: 200
    },

  
  ]
  
  //? META TAG
  tag: metaTagModel = {
    title:
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión',
    description:
      'Vende recargar a cualquier compañía telefónica hasta 7.5% de comisión fija, paga servicios de todos tus clientes y pines electrónicos. Telcel, Unefón, Izzi, CFE, Google Play, Spotify y muchos más!',
    keywords:
      'Venta de recargas, recargas electrónicas, recargas telefónicas, recargas telcel, recargas electronicas telcel, venta de recargas telcel, recargas electronicas 7.5% comision, comision 7.5, comision 7.5 por la venta de recargas, vender recargas, tiempo aire telcel, Telcel',
    url: 'recarga5g.com',
    type: 'website',
    card: 'summary_large_image',
    creator: '@recargascelular',
    image: 'https://recarga5g.com/Venta-recargas.png',
  };


  private readonly _productosService = inject( ProductosService);
  private readonly _razonesService   = inject( RazonesService);
  private readonly _negocioService   = inject( NegocioService);
  private readonly _metodosService   = inject( MetodosVentaService);
  private readonly _stepsService     = inject( RegisterStepsService);
  private readonly _metaTagService   = inject( MetaTagService);
  private readonly _linkService      = inject(CanonicalLinkService);
  private readonly title             = inject( Title);
  private readonly platform_id       = inject(PLATFORM_ID);


 readonly listBeneficios = [

    {
      iconClass: 'check_circle',
      label: 'Mayor flujo de clientes',
    },

    {
      iconClass: 'check_circle',
      label: 'Comisiones ajustadas a tu negocio'
    },

    {
      iconClass: 'check_circle',
      label: 'Variedad de compañias de recargas y servicios'
    },

    {
      iconClass: 'check_circle',
      label: 'Recupera tu inversión + comision'
    },

    {
      iconClass: 'check_circle',
      label: 'Soporte personalizado'
    },
    {
      iconClass: 'check_circle',
      label: 'Diferenciador a tu negocio'
    },
    {
      iconClass: 'check_circle',
      label: 'Adatado para cualquier tipo de negocio'
    },
    {
      iconClass: 'check_circle',
      label: 'Aplicación de compras inmediatas'
    }
  ];

  readonly listInversion = [
    {
      id: 1,
      label: 'Sin pagos forzosos ni anualidades.'
    },

    {
      id: 2,
      label: 'Deposita como y cuando quieras.'
    },

    {
      id: 3,
      label: 'Aplicación de depósitos automático.'
    },

    {
      id: 4,
      label: 'Soporte continuo y personalizado.'
    },

    {
      id: 5,
      label: 'Excelentes comisiones.'
    },

    {
      id: 6,
      label: 'Diferente metodos de venta'
    }
  ]


  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión'
    );

    this.products.set( this._productosService.getProductos() );
    this.item.set( this._razonesService.getRazones() );
    this.negocios.set( this._negocioService.getNegocios() );
    this.metodosVenta.set( this._metodosService.getmetodosVenta() );
    this.stepsRegister.set( this._stepsService.getStepsHome() );

    this._linkService.removeCanonicalLink();
    this._linkService.addTag({
      rel: 'canonical',
      href: 'https://recarga5g.com/',
    });

    this._metaTagService.generateTags({
      ...this.tag,
    });

  }

  ngAfterViewInit(): void {
    this.typewrite();
    this.counterAnimation();
  }

  //* INIT TYPE WRITTER
  typewrite(): void {
    if (isPlatformBrowser(this.platform_id)) {
      const text = this.textDinamico?.nativeElement;
      const writter = new Typewriter(
        text,

        {
          loop: true,
          typeSpeed: 150,
          deleteSpeed: 150,
          typeColor: 'var(--c-primary)',
          cursorColor: 'var(--c-title)',
        }
      );

      writter
        .strings(
          400,
          'Telcel',
          'Bait',
          'AT&T',
          'Movistar',
          'IZZI',
          'Telmex',
          'Google play',
          'Netflix',
          'Cinepolis VIP',
          'y muchos mas!!'
        )
        .start();
    }
  }

  //* FUNCTION FOR OPEN MENU NAV
  aboutAnimate() {
    const menu = this.menuAbout?.nativeElement;
    menu.classList.toggle('menuActive');
  }

  //* FUNCTIONS FOR COUNTER RECORD SECTION
  counterAnimation(): void {
    if (isPlatformBrowser(this.platform_id)) {
      const observer = new IntersectionObserver(
        (entries, obj) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              let target = +entry.target.dataset.number;
              let number = entry.target;

              setTimeout(() => {
                this.updateCount(number, target);
              }, 400);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -50% 0px',
        }
      );

      this.counters?.forEach((element) => {
        const item = element.nativeElement;
        observer.observe(item);
      });
    }
  }

  updateCount = (num: any, maxNum: number) => {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = currentNum + 10;

      setTimeout(() => {
        this.updateCount(num, maxNum);
      }, 4);
    }
  };


}
